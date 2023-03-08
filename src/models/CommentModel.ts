import { Schema, model, models } from 'mongoose';

// Document interface
export interface IComment {
    PostID: string,
    UserID: string,
    Content: string,
    Responses: string[],
    postDate: Date
}
  
  // Schema
const CommentSchema = new Schema<IComment>({
    PostID: { type: String, required: true },
    UserID: { type: String, required: true },
    Content:{ type: String, required: true },
    Responses:{ type: [{type:String}], required: true },
    postDate: { type: Date, default: new Date() }
});

var Comment;

if (models.Comment) {
  Comment = model<IComment>('Comment');
} else {
  Comment = model<IComment>('Comment', CommentSchema,'Comment');
}


export default Comment