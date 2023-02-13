import { Schema, model } from 'mongoose';

// Document interface
export interface IUser {
    name:string,
    lastname:string,
    email:string,
    password:string,
    title:string,
    avatarUrl: string,
    isVerified: boolean,
  }
  
  // Schema
const UserSchema = new Schema<IUser>({
    name:{ type: String, required: true },
    lastname:{ type: String, required: true },
    email:{ type: String, required: true },
    password:{ type: String, required: true },
    title:{ type: String, required: true },
    avatarUrl: { type: String, required: true },
    isVerified: { type: Boolean, required: true },
});

export const User = model<IUser>('User', UserSchema, 'User');