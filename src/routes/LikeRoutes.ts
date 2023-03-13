import { getLikes, getLikeById,UpdateLike, DeleteLike, postLikes, getLikeCountByPostID, getUserLike, getLikeByUserPost } from './../controllers/likeController';
import Express  from "express";

export const LikeRoutes = Express.Router();

LikeRoutes.get('/', getLikes)
LikeRoutes.get('/LikeCount/:PostID', getLikeCountByPostID)
LikeRoutes.get('/:id', getLikeById)
LikeRoutes.post('/LikeData', getLikeByUserPost)
LikeRoutes.post('/isLiked',getUserLike)
LikeRoutes.post('/', postLikes)
LikeRoutes.put('/:id', UpdateLike)
LikeRoutes.delete('/:id', DeleteLike)