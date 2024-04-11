import db from "../config/db.js"

//agregar datos
const agregarRutinas = async() => {
    try{   
        const consultaRutinas = {
            text: '',
            values: '',
        }
    }catch(err){
        console.log(err.message)
    }
}

//ver rutinas
const verRutinas = async () => {
    try{
            const consultaRutinas = {
                text: "select * from ejercicios"
            }
            const result = await db.query(consultaRutinas);
            console.log(result.rows);
            return result.rows
    }catch(err){
        console.log(err.message);
    }
}

export { 
    agregarRutinas,
    verRutinas
}