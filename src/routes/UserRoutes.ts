import { AuthUser, DeleteUser, getUserById } from './../controllers/userController';
import Express  from "express";
import { getUsers, postUsers, UpdateUser } from "../controllers/userController";

export const UserRoutes = Express.Router();

UserRoutes.get('/', getUsers)
UserRoutes.get('/:id', getUserById)
UserRoutes.post('/', postUsers)
UserRoutes.put('/:id', UpdateUser)
UserRoutes.delete('/:id', DeleteUser)
UserRoutes.get('/auth', AuthUser )