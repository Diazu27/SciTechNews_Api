import * as dotenv from 'dotenv'
import { ServerAPI } from './models/server'
dotenv.config()

var Server= new ServerAPI();

Server.startServer();
