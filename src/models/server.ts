import Express  from "express"
import { connectDB } from "../db/connection";
import { UserRoutes } from "../routes/UserRoutes";

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
        this.app.use("/user",UserRoutes)
    }

    startServer(){
        this.app.listen(this.PORT, ()=>{
            console.log(`Server running in port ${this.PORT}`)
        })
    }
}