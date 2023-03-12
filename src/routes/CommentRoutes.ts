import { DeleteComment, getCommentById, postComments, UpdateComment, getComments, getCommentByPostID, getCommentCountByPost } from './../controllers/commentController';
import Express  from "express";

export const CommentRoutes = Express.Router();

CommentRoutes.get('/', getComments)
CommentRoutes.get('/getCommentbyPost/:PostID', getCommentByPostID)
CommentRoutes.get('/getcommentsCount/:PostID', getCommentCountByPost)
CommentRoutes.get('/:id', getCommentById)
CommentRoutes.post('/', postComments)
CommentRoutes.put('/:id', UpdateComment)
CommentRoutes.delete('/:id', DeleteComment)