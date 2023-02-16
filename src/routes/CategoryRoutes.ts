import { getCategoryById, getCategories, postCategories, UpdateCategory, DeleteCategory } from './../controllers/categoryController';
import Express  from "express";

export const CategoryRoutes = Express.Router();

CategoryRoutes.get('/', getCategories)
CategoryRoutes.get('/:id', getCategoryById)
CategoryRoutes.post('/', postCategories)
CategoryRoutes.put('/:id', UpdateCategory)
CategoryRoutes.delete('/:id', DeleteCategory)