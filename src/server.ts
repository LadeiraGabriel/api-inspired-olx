import express,{Request, Response} from 'express';
import dotenv from 'dotenv';
import path from 'path';
import mainRouter from './routers/index';



dotenv.config();


const server = express();

//rotas publicas
server.use(express.static(path.join(__dirname,'../public')));
// habilitado metodos post
server.use(express.urlencoded({extended: true}));


//rotas principais
server.use(mainRouter);

server.use((req: Request, res: Response)=>{
    res.status(404).json({status: 'Not found!'})
})

server.listen(process.env.PORT)