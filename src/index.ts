import express, { Application } from 'express';

import { seedArticles } from './config/seed.js';
import apiRoutes from './routes/index.js';

const app: Application = express();
const port: number = parseInt(process.env.PORT ?? '3000');

app.use(express.json());

app.use('/api', apiRoutes);

seedArticles()
  .then(() => {
    console.log('Database seeding completed');
  })
  .catch((error: unknown) => {
    console.error('Error seeding database:', error);
  });

app.listen(port, '0.0.0.0', () => {
  console.log(`API is listening on port ${String(port)}`);
});
