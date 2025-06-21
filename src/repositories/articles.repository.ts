import db from '../config/database.js';
import { IArticle, IPaginatedArticleResponse } from '../types/article.js';

export interface IArticlesRepository {
  getAllArticles(limit: number, page: number): Promise<IPaginatedArticleResponse>;
}

export class ArticlesRepository implements IArticlesRepository {
  async getAllArticles(limit: number, page: number): Promise<IPaginatedArticleResponse> {
    return new Promise((resolve, reject) => {
      const offset: number = (page - 1) * limit;
      const countQuery = 'SELECT COUNT(*) as count FROM articles';
      const articlesQuery = 'SELECT * FROM articles ORDER BY created_at DESC LIMIT ? OFFSET ?';

      db.get(countQuery, [], (countErr, countRow: { count: number }) => {
        if (countErr) reject(countErr);

        db.all(articlesQuery, [limit, offset], (err, rows) => {
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
}
