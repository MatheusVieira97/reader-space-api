import db from './database.js';
import { samplePosts } from './sampleData.js';

export const seedPosts = (): Promise<void> => {
  return new Promise((resolve, reject) => {
    const insertPost = (post: (typeof samplePosts)[0]): Promise<void> => {
      return new Promise((resolvePost, rejectPost) => {
        db.run(
          'INSERT INTO posts (title, content, author) VALUES (?, ?, ?)',
          [post.title, post.content, post.author],
          function (err) {
            if (err) {
              console.error('Error inserting post:', err.message);
              rejectPost(err);
            } else {
              console.log(`Post "${post.title}" inserted with ID: ${String(this.lastID)}`);
              resolvePost();
            }
          }
        );
      });
    };

    db.get('SELECT COUNT(*) as count FROM posts', (err, row: undefined | { count: number }) => {
      if (err) {
        console.error('Error checking posts count:', err.message);
        reject(err);
        return;
      }

      if (row && row.count > 0) {
        console.log('Posts already exist, skipping seed');
        resolve();
        return;
      }

      Promise.all(samplePosts.map(insertPost))
        .then(() => {
          console.log('Seed completed successfully');
          resolve();
        })
        .catch(reject);
    });
  });
};

export default seedPosts;
