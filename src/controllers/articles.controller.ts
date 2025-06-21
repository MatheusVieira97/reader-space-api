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

  async getArticleById(req: Request, res: Response) {
    try {
      const id: number = parseInt(req.params.id);

      if (isNaN(id)) {
        res.status(400).json({
          data: [],
          message: 'Invalid article ID',
        });
        return;
      }

      const article = await this.articlesService.getArticleById(id);
      res.json({
        data: article,
        message: 'Article retrieved successfully',
      });
    } catch {
      res.status(500).json({
        data: [],
        message: 'Failed to retrieve article',
      });
    }
  }
}
