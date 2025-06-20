import db from '../config/database.js';
import { Post } from '../types/post.js';

export interface IPostsRepository {
  getAllPosts(): Promise<Post[]>;
}

export class PostsRepository implements IPostsRepository {
  async getAllPosts(): Promise<Post[]> {
    return new Promise((resolve, reject) => {
      const sql = 'SELECT * FROM posts ORDER BY created_at DESC';
      db.all(sql, [], (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows as Post[]);
        }
      });
    });
  }
}
