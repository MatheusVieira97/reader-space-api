import db from '../config/database.js';
import { IArticle, IPaginatedArticleResponse } from '../types/article.js';

export interface IArticlesRepository {
  getAllArticles(limit: number, page: number, tag?: string): Promise<IPaginatedArticleResponse>;
  getArticleById(id: number): Promise<IArticle>;
}

export class ArticlesRepository implements IArticlesRepository {
  async getAllArticles(
    limit: number,
    page: number,
    tag?: string
  ): Promise<IPaginatedArticleResponse> {
    return new Promise((resolve, reject) => {
      const offset: number = (page - 1) * limit;

      const tagFilter = tag ? 'WHERE tag = ?' : '';
      const countQuery = `SELECT COUNT(*) as count FROM articles ${tagFilter}`;
      const articlesQuery = `SELECT * FROM articles ${tagFilter} ORDER BY created_at DESC LIMIT ? OFFSET ?`;

      const countParams = tag ? [tag] : [];
      const articlesParams = tag ? [tag, limit, offset] : [limit, offset];

      db.get(countQuery, countParams, (countErr, countRow: { count: number }) => {
        if (countErr) reject(countErr);

        db.all(articlesQuery, articlesParams, (err, rows) => {
          if (err) {
            reject(err);
          } else {
            resolve({
              data: rows as IArticle[],
              page: page,
              totalItems: countRow.count,
              totalPages: Math.ceil(countRow.count / limit),
            });
          }
        });
      });
    });
  }

  async getArticleById(id: number): Promise<IArticle> {
    return new Promise((resolve, reject) => {
      db.get('SELECT * FROM articles WHERE id = ?', [id], (err, row) => {
        if (err) reject(err);
        resolve(row as IArticle);
      });
    });
  }
}
