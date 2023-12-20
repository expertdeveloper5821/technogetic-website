import connect from '../../server/config/db';
import Page from '../../server/models/pages';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function getAllPages(req: NextApiRequest, res: NextApiResponse) {
    try {
        if (req.method !== 'GET') {
            return res.status(405).json({
                message: 'Method Not Allowed',
            });
        }

        await connect();

        const allPages = await Page.find({});

        if (allPages.length === 0) {
            return res.status(404).json({ error: "No pages found" });
        }

        return res.status(200).json({ data: allPages });
    } catch (error) {
        console.error('Error in getAllPages API', error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}
