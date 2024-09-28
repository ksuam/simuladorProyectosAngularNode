import express, {Application, Request, Response} from 'express';
import cors from 'cors';
import routeProducto from '../routes/producto';
import routeCategoria from '../routes/categoria';
import routeTest from '../routes/test';



import db  from '../db/connection'
import dbmy from '../db/connection'
import setupAssociations from './associations';




class Server {

    private app:Application;
    private port: string;
    
    constructor(){
        console.log(process.env.PORT);
        this.app = express();
        this.port = process.env.PORT || '3001';
        this.midlewares();
        this.routes();
        this.dbConnect();
        this.dbMyConnect();
        this.listen();
        setupAssociations();
    }
    listen(){
        this.app.listen(this.port,() =>{
            console.log(`Aplicacion corriendo en el puerto ${this.port}`)
        });

        
    }

    midlewares(){
        //parseamos el body
        this.app.use(express.json());

        //cors
        this.app.use(cors());
    }
    routes(){
        this.app.get('/', (req: Request, res:Response) =>{
            res.json({
                mssg:'Api Working'
            })
        })
        this.app.use('/productos/', routeProducto),
        this.app.use('/categorias', routeCategoria),
        this.app.use('/personas', routeTest)
    }


    async dbConnect(){
        console.log("Iniiciando conexion")
        try {
            await db.authenticate();
            console.log('base de datos conectada');
        } catch (error) {
            console.error('No se pudo conectar a la base de datos:', error);
        }
    }

    async dbMyConnect(){
        await dbmy.authenticate();
        console.log('base de datos mysql conectada')
    }
}

export default Server;