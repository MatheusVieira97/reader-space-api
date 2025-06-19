import express, { Application } from 'express';

import { middleware } from './middlewares/middlewares.js';

const app: Application = express();
const port: string = process.env.PORT ?? '9001';

app.get('/', middleware);

app.listen(port, () => {
  console.log(`API is listening on port ${port}`);
});
