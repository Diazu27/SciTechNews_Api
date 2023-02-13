import Express  from "express";
import { getUsers, postUsers } from "../controllers/userController";

export const UserRoutes = Express.Router();

UserRoutes.get('/', getUsers)
UserRoutes.post('/', postUsers)