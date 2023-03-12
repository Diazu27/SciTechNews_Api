import { DeleteComment, getCommentById, postComments, UpdateComment, getComments, getCommentByPostID, getCommentCountByPost } from './../controllers/commentController';
import Express  from "express";

export const CommentRoutes = Express.Router();

CommentRoutes.get('/', getComments)
CommentRoutes.get('/getCommentbyPost/:id', getCommentByPostID)
CommentRoutes.get('/getcommentsCount/:id', getCommentCountByPost)
CommentRoutes.get('/:id', getCommentById)
CommentRoutes.post('/', postComments)
CommentRoutes.put('/:id', UpdateComment)
CommentRoutes.delete('/:id', DeleteComment)