import User from '../../server/models/user';
import connect from '../../server/config/db';
import { NextApiRequest, NextApiResponse } from 'next';
import { v4 as uuidv4 } from "uuid";
import { emailValidate } from '../../server/middleware/helper';
import { transporter } from "../../server/middleware/email";
import { environmentConfig } from "../../server/config/environmentConfig";

export default async function contactUs(req: NextApiRequest, res: NextApiResponse) {
    try {

        // Check if the request method is not GET
        if (req.method !== 'POST') {
            return res.status(405).json({
                message: 'Method Not Allowed',
            });
        }

        const { fullName, email, phoneNumber, subject, message } = req.body;

        await connect();

        if (!fullName || !email || !phoneNumber || !subject || !message) {
            res.status(400).json({
                error: { message: `All fields are required.` },
            });
        } else {
            // validate email
            if (!emailValidate(email)) {
                return res.status(400).json("Invalid email format");
            }

            // check if email is already in the database
            const existingUser = await User.findOne({ "userData.email": email });

            if (existingUser) {
                // If email exists, add the new details to the user's userData array
                existingUser.userData.push({
                    fullName,
                    email,
                    phoneNumber,
                    subject,
                    message,
                });

                // Update the existing user in the database
                await existingUser.save();

                // Send email with existing user details
                await transporter.sendMail({
                    from: environmentConfig.EMAIL_FROM,
                    to: email,
                    subject: "Technogetic Private Limited",
                    html: `<p><strong>New message from ${fullName}</strong></p>
                        <p><strong>User Information</strong></p>
                        <p><strong>Name:</strong> ${fullName}</p>
                        <p><strong>Email:</strong> ${email}</p>
                        <p><strong>Phone:</strong> ${phoneNumber}</p>
                        <p><strong>Subject:</strong> ${subject}</p>
                        <p><strong>Message:</strong> ${message}</p>`,
                });

                return res.status(200).json({
                    message: "Thank you for submitting your details.",
                    data: {
                        fullName,
                        email,
                        phoneNumber,
                        subject,
                        message,
                    },
                });
            } else {
                // If email does not exist, create a new user
                const newUuid = uuidv4();
                const newUser = new User({
                    userData: [
                        {
                            fullName,
                            email,
                            phoneNumber,
                            subject,
                            message,
                        }
                    ],
                    userUuid: newUuid,
                });

                // Save the new user in the database
                const userSave = await newUser.save();

                // Send email with existing user details
                await transporter.sendMail({
                    from: environmentConfig.EMAIL_FROM,
                    to: email,
                    subject: "Technogetic Private Limited",
                    html: `<p><strong>New message from ${fullName}</strong></p>
                        <p><strong>User Information</strong></p>
                        <p><strong>Name:</strong> ${fullName}</p>
                        <p><strong>Email:</strong> ${email}</p>
                        <p><strong>Phone:</strong> ${phoneNumber}</p>
                        <p><strong>Subject:</strong> ${subject}</p>
                        <p><strong>Message:</strong> ${message}</p>`,
                });

                if (userSave._id) {
                    return res.status(200).json({
                        message: "Thank you for submitting your details.",
                        data: {
                            fullName,
                            email,
                            phoneNumber,
                            subject,
                            message,
                        },
                    });
                } else {
                    return res.status(500).json({ message: "Details not submitted" });
                }
            }
        }
    } catch (error) {
        console.error('Error in contactUs API',error);
        return res.status(500).json({ error: "Error in contactUs API" });
    }
}
