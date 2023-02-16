import Express  from "express"
import { connectDB } from "../db/connection";
import { UserRoutes } from "../routes/UserRoutes";
import { PostRoutes } from '../routes/PostRoutes';

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
        this.app.use("/like",PostRoutes);
        this.app.use("/category",PostRoutes);
        this.app.use("/comment",PostRoutes);
    }

    startServer(){
        this.app.listen(this.PORT, ()=>{
            console.log(`Server running in port ${this.PORT}`)
        })
    }
}