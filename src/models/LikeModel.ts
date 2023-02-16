import { Schema, model } from 'mongoose';

// Document interface
export interface ILike {
    PostID: string,
    UserID: string,
    postDate: Date
}
  
  // Schema
const LikeSchema = new Schema<ILike>({
    PostID: { type: String, required: true },
    UserID: { type: String, required: true },
    postDate: { type: Date, default: new Date() }
});

export const Like = model<ILike>('Like', LikeSchema, 'Like');