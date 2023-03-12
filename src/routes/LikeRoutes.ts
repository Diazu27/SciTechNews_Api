import { getLikes, getLikeById,UpdateLike, DeleteLike, postLikes, getLikeCountByPostID } from './../controllers/likeController';
import Express  from "express";

export const LikeRoutes = Express.Router();

LikeRoutes.get('/', getLikes)
LikeRoutes.get('/LikeCount/:id', getLikeCountByPostID)
LikeRoutes.get('/:id', getLikeById)
LikeRoutes.post('/', postLikes)
LikeRoutes.put('/:id', UpdateLike)
LikeRoutes.delete('/:id', DeleteLike)