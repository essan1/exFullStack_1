import express from 'express';
//path para realizar la config del dirname
import path from 'path'
const router = express.Router();
//dirname para hacer publica la carpeta de assets
const __dirname = import.meta.dirname


//trbajamos el link con dirname, para enlazar index con el html
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/index.html'))
})


export default router;