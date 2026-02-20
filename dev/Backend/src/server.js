import express from 'express';
import morgan from 'morgan';

//routes
import { initialRoute } from './routes/index.js';

const app = express();

//middlewares
app.use(express.json()); //maneja json en las peticiones


//rutas
app.use("/api/", initialRoute)

export default app;