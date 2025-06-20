import { Router } from 'express';

// Routes Imports
import postsRoutes from './posts.route.js';

const router = Router();

// Posts Routes
router.use('/posts', postsRoutes);

export default router;
