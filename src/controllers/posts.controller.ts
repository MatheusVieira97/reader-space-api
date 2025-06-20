import { Request, Response } from 'express';

import { PostsService } from '../services/postsService.js';

export class PostsController {
  private postsService: PostsService;

  constructor() {
    this.postsService = new PostsService();
  }

  async getAllPosts(req: Request, res: Response) {
    try {
      const posts = await this.postsService.getAllPosts();
      res.json({
        data: posts,
        message: 'Posts retrieved successfully',
      });
    } catch {
      res.status(500).json({
        data: [],
        message: 'Failed to retrieve posts',
      });
    }
  }
}
