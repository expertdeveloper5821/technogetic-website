import { NextApiRequest, NextApiResponse } from 'next';
import connect from '../../server/config/db';
import Content from '../../server/models/content';
import multer from 'multer';
import { cloudinary } from '../../server/config/cloudinary';
import fs from 'fs';

// Configure multer for file upload
const upload = multer({ dest: './public/Images' });

// Configure API endpoint to disable default body parsing
export const config = {
    api: {
        bodyParser: false,
    },
};

// Define the main API handler function
export default async function content(req: NextApiRequest, res: NextApiResponse) {
    try {

        // Check if the request method is not GET
        if (req.method !== 'POST') {
            return res.status(405).json({
                message: 'Method Not Allowed',
            });
        }

        // Connect to the database
        await connect();

        // Use multer to handle file uploads
        await new Promise<void>((resolve, reject) => {
            // Using upload.any() to handle all types of files
            upload.any()(req, res, (err) => {
                if (err) {
                    console.error("Multer Error:", err);
                    reject(err);
                } else {
                    resolve();
                }
            });
        });

        // Retrieve uploaded files from the request
        const files: Express.Multer.File[] = (req as any).files;

        // Extract specific files from the uploaded files
        const metaImages = (files && files.find(file => file.fieldname === 'metaImages')) || null;
        const sectionsImages = (files && files.find(file => file.fieldname === 'sectionsImages')) || null;
        const subSectionsImages = (files && files.find(file => file.fieldname === 'subSectionsImages')) || null;
        const favicon = (files && files.find(file => file.fieldname === 'favicon')) || null;
        const pageSlug = (files && files.find(file => file.fieldname === 'pageSlug')) || null;

        // Extract data from the request body
        const {
            pageId,
            name,
            metaDetails,
            sections,
        } = req.body.pages[0];

        // Check if a page with the same pageId and name exists in the database
        let existingData = await Content.findOne({ "pages.pageId": pageId, "pages.name": name });
        if (existingData) {
            const imgUploadPromises = [
                sectionsImages ? cloudinary.uploader.upload(sectionsImages.path) : Promise.resolve(),
                subSectionsImages ? cloudinary.uploader.upload(subSectionsImages.path) : Promise.resolve(),
            ];

            // Wait for all image uploads to complete
            const imgUploads = await Promise.all(imgUploadPromises);
            // Page with the same pageId and name exists, update the sections
            existingData.pages[0].sections.push(...sections.map((section: { subSections: any[]; }) => ({
                ...section,
                sectionsImages: imgUploads[0] ? [imgUploads[0].secure_url] : [],
                subSections: section.subSections.map((subSection) => ({
                    ...subSection,
                    subSectionsImages: imgUploads[1] ? [imgUploads[1].secure_url] : [],
                })),
            })),);

            existingData = await existingData.save();
            // Unlink the file paths after successful submission
            files.forEach((file) => {
                fs.unlink(file.path, (err) => {
                    if (err) {
                        console.error("Error unlinking file:", err);
                    }
                });
            });
        } else {
            // Prepare promises for uploading images to cloudinary
            const imgUploadPromises = [
                metaImages ? cloudinary.uploader.upload(metaImages.path) : Promise.resolve(),
                sectionsImages ? cloudinary.uploader.upload(sectionsImages.path) : Promise.resolve(),
                subSectionsImages ? cloudinary.uploader.upload(subSectionsImages.path) : Promise.resolve(),
                pageSlug ? cloudinary.uploader.upload(pageSlug.path) : Promise.resolve(),
                favicon ? cloudinary.uploader.upload(favicon.path) : Promise.resolve(),
            ];

            // Wait for all image uploads to complete
            const imgUploads = await Promise.all(imgUploadPromises);

            // Prepare updated page data with uploaded image URLs
            const newData = new Content({
                pages: [
                    {
                        pageId,
                        name,
                        metaDetails: {
                            title: metaDetails.title,
                            description: metaDetails.description,
                            keywords: metaDetails.keywords,
                            metaImages: imgUploads[0] ? imgUploads[0].secure_url : '',
                            favicon: imgUploads[4] ? imgUploads[4].secure_url : '',
                        },
                        pageSlug: imgUploads[3] ? imgUploads[3].secure_url : '',
                        sections: sections.map((section: { subSections: any[]; }) => ({
                            ...section,
                            sectionsImages: imgUploads[1] ? [imgUploads[1].secure_url] : [],
                            subSections: section.subSections.map((subSection) => ({
                                ...subSection,
                                subSectionsImages: imgUploads[2] ? [imgUploads[2].secure_url] : [],
                            })),
                        })),
                    },
                ],
            })

            // Create a new Content document and save it to the database
            await newData.save();

            // Unlink the file paths after successful submission
            files.forEach((file) => {
                fs.unlink(file.path, (err) => {
                    if (err) {
                        console.error("Error unlinking file:", err);
                    }
                });
            });

            return res.status(201).json({ message: 'Submit successfully!', data: newData });
        }
        return res.status(201).json({ message: 'Submit successfully!', data: existingData });
    } catch (error) {
        console.error("Error in content API :", error);
        return res.status(500).json({ error: 'Error in content API.' });
    }
}
