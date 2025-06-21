import { Request, Response } from 'express';

import { ArticlesService } from '../services/articles.js';

export class ArticlesController {
  private articlesService: ArticlesService;

  constructor() {
    this.articlesService = new ArticlesService();
  }

  async getAllArticles(req: Request, res: Response) {
    try {
      const limit: number = req.query.limit ? parseInt(req.query.limit as string) : 10;
      const page: number = req.query.page ? parseInt(req.query.page as string) : 1;

      const articles = await this.articlesService.getAllArticles(limit, page);

      res.json({
        data: articles.data,
        message: 'Articles retrieved successfully',
        page: articles.page,
        totalItems: articles.totalItems,
        totalPages: articles.totalPages,
      });
    } catch {
      res.status(500).json({
        data: [],
        message: 'Failed to retrieve articles',
      });
    }
  }
}
