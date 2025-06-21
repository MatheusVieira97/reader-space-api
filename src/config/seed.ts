import db from './database.js';
import { sampleArticles } from './sampleData.js';

export const seedArticles = (): Promise<void> => {
  return new Promise((resolve, reject) => {
    const insertArticle = (article: (typeof sampleArticles)[0]): Promise<void> => {
      return new Promise((resolveArticle, rejectArticle) => {
        db.run(
          'INSERT INTO articles (title, content, author) VALUES (?, ?, ?)',
          [article.title, article.content, article.author],
          function (err) {
            if (err) {
              console.error('Error inserting article:', err.message);
              rejectArticle(err);
            } else {
              console.log(`Article "${article.title}" inserted with ID: ${String(this.lastID)}`);
              resolveArticle();
            }
          }
        );
      });
    };

    db.get('SELECT COUNT(*) as count FROM articles', (err, row: undefined | { count: number }) => {
      if (err) {
        console.error('Error checking articles count:', err.message);
        reject(err);
        return;
      }

      if (row && row.count > 0) {
        console.log('Articles already exist, skipping seed');
        resolve();
        return;
      }

      Promise.all(sampleArticles.map(insertArticle))
        .then(() => {
          console.log('Seed completed successfully');
          resolve();
        })
        .catch(reject);
    });
  });
};

export default seedArticles;
