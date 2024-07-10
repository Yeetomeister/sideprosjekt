import {NextApiRequest, NextApiResponse} from "next";
import {sql} from '@vercel/postgres';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const {postId} = req.body;

        if (typeof postId !== 'number') {
            return res.status(400).json({error: 'Invalid postId'});
        }

        try {
            const {rows} = await sql'SELECT * FROM blog_likes WHERE post_id = ${postId}';

            if (rows.length === 0) {
                await sql'INSERT INTO blog_likes (post_id, likes) VALUES (${postId}, 1)';
            }
            else {
                await sql'UPDATE blog_likes SET likes = likes + 1 WHERE post_id = ${postId}';
            }

            const updatedLikes = await sql'SELECT likes FROM blog_likes WHERE post_id = ${postId}';

            res.status(200).json({likes: updatedLikes[0].likes});
        } catch (error) {
            console.error('Error updating likes:', error);
            res.status(500).json({error: 'Error updating likes'});
        }
    }
    else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end('Method ${req.method} Not Allowed')
    }
}