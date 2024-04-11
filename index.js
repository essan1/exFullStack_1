//archivo principal, aqui importamos router y disponibilizamos el middleware de router app.use
import express from 'express';
import router from './routes/routes.js'
//path para realizar la config del dirname
import path from 'path'
const app = express();
const PORT = process.env.PORT || 3034;
//dirname para hacer publica la carpeta de assets
const __dirname = import.meta.dirname


//carpetos publicas middleware
app.use(express.static(path.join(__dirname, 'assets')));

//middleware para recibir json
app.use(express.json());

//middleware para routes
app.use(router);


app.listen(PORT, () => console.log(`serv running on http://localhost:${PORT}`));