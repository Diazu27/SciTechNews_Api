import mongoose from "mongoose";

export const connectDB = async()=>{
    try{
        mongoose.set('strictQuery', false);
        mongoose.connect(process.env.MongoConnectionString);

        console.log("Database online")
    }catch(error){
        throw new Error("Database connection fail"+error)
    }
}
