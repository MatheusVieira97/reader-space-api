import { Router } from 'express';

import { PostsController } from '../controllers/posts.controller.js';

const router = Router();
const postsController = new PostsController();

// GET /api/posts
router.get('/', async (req, res) => {
  await postsController.getAllPosts(req, res);
});

export default router;
