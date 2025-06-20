import express, { Application } from 'express';

import { seedPosts } from './config/seed.js';
import { middleware } from './middlewares/middlewares.js';

const app: Application = express();
const port: string = process.env.PORT ?? '9001';

app.get('/', middleware);

// Seed the database with sample posts
seedPosts()
  .then(() => {
    console.log('Database seeding completed');
  })
  .catch((error: unknown) => {
    console.error('Error seeding database:', error);
  });

app.listen(port, () => {
  console.log(`API is listening on port ${port}`);
});
