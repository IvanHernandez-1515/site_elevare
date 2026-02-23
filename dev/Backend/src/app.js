import express from 'express';
import morgan from 'morgan';

//rutas
import apiRouter from "./routes/AppRouter.js";
//errores
import {notFound} from "./middlewares/notFound.js";
import {errorHandler} from "./middlewares/errorHandler.js";

const CreateApp = () => {
    //inicializa express
    const app = express();
    
    //middlewares
    app.use(express.json()); //maneja json en las peticiones
    app.set("trust proxy", true);
    if (config.env !== "production") {
        app.use(morgan("dev"));
    }

    //rutas
    app.use("/api", apiRouter);

    //errores
    app.use(notFound);
    app.use(errorHandler);

    return app;
}
export default CreateApp;