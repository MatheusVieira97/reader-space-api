import db from '../database.js';

export const getAllPosts = () => {
  return new Promise((resolve, reject) => {
    const sql = 'SELECT * FROM posts ORDER BY created_at DESC';
    db.all(sql, [], (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
};

export const getPostById = (id: number) => {
  return new Promise((resolve, reject) => {
    const sql = 'SELECT * FROM posts WHERE id = ?';
    db.get(sql, [id], (err, row) => {
      if (err) {
        reject(err);
      } else {
        resolve(row);
      }
    });
  });
};

export const getPostsByAuthor = (author: string) => {
  return new Promise((resolve, reject) => {
    const sql = 'SELECT * FROM posts WHERE author = ? ORDER BY created_at DESC';
    db.all(sql, [author], (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
};

export const searchPosts = (searchTerm: string) => {
  return new Promise((resolve, reject) => {
    const sql = 'SELECT * FROM posts WHERE title LIKE ? OR content LIKE ? ORDER BY created_at DESC';
    const searchPattern = `%${searchTerm}%`;
    db.all(sql, [searchPattern, searchPattern], (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
};
