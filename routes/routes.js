import express from 'express';
//path para realizar la config del dirname
import path from 'path'
//importamos la queries
import { agregarRutinas, verRutinas} from '../consultas/consultas.js'
const router = express.Router();
//dirname para hacer publica la carpeta de assets
const __dirname = import.meta.dirname


//trbajamos el link con dirname, para enlazar index con el html
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/index.html'))
})

//creamos ruta para las consultas
//ver rutinas
router.get('/rutinas',async (req, res) => {
    const mostrarRutinas = await verRutinas();
    res.json(mostrarRutinas);
})

//agregar rutina
router.post("/agregarRutina", async (req, res) => {
  const datos = Object.values(req.body);
   console.log(datos);
   const result = await agregarRutinas(datos);

   res.json(result);

});

//creamos nuestra ruta generica, simeprea al final
router.get('*', (req, res) => {
    res.status(400);
    res.send("<center>404 ERROR -- Pagina No Encontrada</center>");
})


export default router;