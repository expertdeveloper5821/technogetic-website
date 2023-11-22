import { NextApiRequest, NextApiResponse } from 'next';
import connect from '../../server/config/db';
import Content from '../../server/models/content';

export default async function deleteContent(req: NextApiRequest, res: NextApiResponse) {
    try {
        if (req.method !== 'DELETE') {
            return res.status(405).json({
                message: 'Method Not Allowed',
            });
        }

        await connect();

        const { pageId, sectionId } = req.query;

        if (!pageId && !sectionId) {
            return res.status(400).json({
                message: 'Bad Request. Please provide at least pageId in the query parameters.',
            });
        }

        if (pageId) {
            if (sectionId) {
                // Both pageId and sectionId provided, delete specific section
                const updatedData = await Content.findOneAndUpdate(
                    { 'pages.pageId': pageId },
                    { $pull: { 'pages.$.sections': { sectionId: sectionId } } },
                    { new: true }
                );

                if (!updatedData) {
                    return res.status(404).json({
                        message: `Section with sectionId ${sectionId} not found in pageId ${pageId}.`,
                    });
                }

                return res.status(200).json({
                    message: `Section with sectionId ${sectionId} deleted successfully.`,
                });
            } else {
                // Only pageId provided, delete the entire page
                const deletedData = await Content.findOneAndDelete({ 'pages.pageId': pageId });

                if (!deletedData) {
                    return res.status(404).json({
                        message: `Data with pageId ${pageId} not found.`,
                    });
                }

                return res.status(200).json({
                    message: `Data with pageId ${pageId} deleted successfully.`,
                });
            }
        } else {
            return res.status(400).json({
                message: 'Bad Request. Please provide at least pageId in the query parameters.',
            });
        }
    } catch (error) {
        console.error("Error in delete content API:", error);
        return res.status(500).json({ error: 'Error in delete content API.' });
    }
}
