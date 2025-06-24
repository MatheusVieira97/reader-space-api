import { Router } from 'express';

import { ArticlesController } from '../controllers/articles.controller.js';
import { cacheMiddleware } from '../middlewares/cache.middleware.js';

const router = Router();
const articlesController = new ArticlesController();

// GET /api/articles - Cache por 2 minutos
router.get('/', cacheMiddleware({ ttl: 2 * 60 * 1000 }), async (req, res) => {
  await articlesController.getAllArticles(req, res);
});

// GET /api/articles/:id - Cache por 5 minutos com headers HTTP
router.get('/:id', cacheMiddleware({ ttl: 5 * 60 * 1000 }), async (req, res) => {
  const maxAgeSeconds = 5 * 60;
  const etag = `article-${req.params.id}-${Date.now().toString()}`;

  res.set({
    'Cache-Control': `public, max-age=${maxAgeSeconds.toString()}, s-maxage=${maxAgeSeconds.toString()}`,
    ETag: etag,
    'Last-Modified': new Date().toISOString(),
    Vary: 'Accept-Encoding',
  });

  await articlesController.getArticleById(req, res);
});

export default router;
