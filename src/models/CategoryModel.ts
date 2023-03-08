import { Schema, model } from 'mongoose';

// Document interface
export interface ICategories {
    CategoryName: string,
    postDate: Date
}
  
  // Schema
const CategoriesSchema = new Schema<ICategories>({
    CategoryName: { type: String, required: true },
    postDate: { type: Date, default: new Date() }
});

export const Category = model<ICategories>('Category', CategoriesSchema, 'Category');