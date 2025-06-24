import { ArticlesRepository, IArticlesRepository } from '../repositories/articles.repository.js';
import { IArticle } from '../types/article.js';

export class ArticlesService {
  private articlesRepository: IArticlesRepository;

  constructor(articlesRepository?: IArticlesRepository) {
    this.articlesRepository = articlesRepository ?? new ArticlesRepository();
  }

  async getAllArticles(limit: number, page: number, tag?: string) {
    try {
      const articles = await this.articlesRepository.getAllArticles(limit, page, tag);
      return articles;
    } catch {
      throw new Error('Failed to retrieve articles');
    }
  }

  async getArticleById(id: number): Promise<IArticle> {
    try {
      const article = await this.articlesRepository.getArticleById(id);
      return article;
    } catch {
      throw new Error('Failed to retrieve article');
    }
  }
}
