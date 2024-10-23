// pages/api/og.tsx
import { ImageResponse } from '@vercel/og';

export const config = {
  runtime: 'edge',
};

export default function handler(req, res) {
  const { title } = req.query;

  // Example response for testing
  res.status(200).json({ message: `Generating image for title: ${title}` });
}
