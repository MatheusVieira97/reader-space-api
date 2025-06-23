import sqlite3 from 'sqlite3';

sqlite3.verbose();

const db = new sqlite3.Database('./data/articles.db');

db.serialize(() => {
  db.run(
    `
    CREATE TABLE IF NOT EXISTS articles (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      content TEXT NOT NULL,
      author TEXT NOT NULL,
      tag TEXT,
      image_url TEXT,
      published_at DATETIME,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `,
    (err) => {
      if (err) {
        console.error('Error creating articles table:', err.message);
      } else {
        console.log('Articles table created successfully');
      }
    }
  );
});

export default db;
