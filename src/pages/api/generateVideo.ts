import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const { prompt } = req.body;

    try {
      const response = await fetch('http://127.0.0.1:5000/video', {
        method: 'GET',
        // headers: {
        //   'Content-Type': 'application/json',
        // },
        body: JSON.stringify({ prompt }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate video');
      }

      // const data = await response.json();
      const buffer = await response.arrayBuffer()
      res.setHeader('Content-Type', 'video/mp4');
      res.setHeader('Content-Disposition', 'attachment; filename="downloaded_video.mp4"');
      res.status(200).send(buffer);
      // res.status(200).json({ videoUrl: data.videoUrl });
    } catch (error) {
      res.status(500).json({ error: "Error" });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
