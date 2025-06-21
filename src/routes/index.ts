import { Router } from 'express';

// Routes Imports
import articlesRoutes from './articles.route.js';

const router = Router();

// Articles Routes
router.use('/articles', articlesRoutes);

export default router;
