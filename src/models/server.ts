import Express  from "express"
import { connectDB } from "../db/connection";
import { UserRoutes } from "../routes/UserRoutes";
import { PostRoutes } from '../routes/PostRoutes';
import { LikeRoutes } from "../routes/LikeRoutes";
import { CategoryRoutes } from "../routes/CategoryRoutes";
import { CommentRoutes } from "../routes/CommentRoutes";

export class ServerAPI {
    private PORT;
    private app;
    constructor(){
        this.app = Express();
        this.PORT = process.env.PORT || 3000;

        this.connectionDB();
        this.middlewares();
        this.routes();
    }

    private async connectionDB(){
        await connectDB();
    }

    private middlewares(){
        this.app.use(Express.json())
    }

    private routes(){
        this.app.use("/user",UserRoutes);
        this.app.use("/post",PostRoutes);
        this.app.use("/like",LikeRoutes);
        this.app.use("/category",CategoryRoutes);
        this.app.use("/comment",CommentRoutes);
    }

    startServer(){
        this.app.listen(this.PORT, ()=>{
            console.log(`Server running in port ${this.PORT}`)
        })
    }
}