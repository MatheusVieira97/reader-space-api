import { Router } from 'express';

import { ArticlesController } from '../controllers/articles.controller.js';

const router = Router();
const articlesController = new ArticlesController();

// GET /api/articles
// Query Params: limit, page
router.get('/', async (req, res) => {
  await articlesController.getAllArticles(req, res);
});

// GET /api/articles/:id
router.get('/:id', async (req, res) => {
  await articlesController.getArticleById(req, res);
});

export default router;
