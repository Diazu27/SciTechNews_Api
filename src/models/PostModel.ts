import { Schema, model, Date } from 'mongoose';

// Document interface
export interface IPost {
    title:string,
    content:string,
    creatorID: string,
    Categories: string[];
    postDate: Date
}
  
  // Schema
const PostSchema = new Schema<IPost>({
    title:{ type: String, required: true },
    content:{ type: String, required: true },
    creatorID: { type: String, required: true },
    Categories: { type:[{type: String}], required: true },
    postDate: { type: Date, default: new Date() }
});

export const Post = model<IPost>('Post', PostSchema, 'Post');