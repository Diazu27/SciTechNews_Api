import { DeletePost, getPost, getPostById, savePost, UpdatePost } from '../controllers/postController';
import Express  from "express";

export const PostRoutes = Express.Router();

PostRoutes.get('/', getPost)
PostRoutes.get('/:id', getPostById)
PostRoutes.post('/', savePost)
PostRoutes.put('/:id', UpdatePost)
PostRoutes.delete('/:id', DeletePost)