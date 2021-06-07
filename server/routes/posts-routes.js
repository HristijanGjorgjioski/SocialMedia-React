import express from 'express';
import { createPost, deletePost, getPosts } from '../controllers/posts-controller.js';

const router = express.Router();

router.get('/getPosts', getPosts);
router.post('/createPost', createPost);
router.delete('/deletePost/:id', deletePost);

export default router;
