import { RequestHandler } from 'express';

import { getAllPosts } from '../config/queries/posts.js';

export const middleware: RequestHandler = async (req, res) => {
  try {
    const posts = await getAllPosts();
    res.json({ posts });
  } catch {
    res.status(500).json({ error: 'Failed to retrieve posts' });
  }
};
