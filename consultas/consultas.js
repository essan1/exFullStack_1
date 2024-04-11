import db from "../config/db.js"

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

//agregar datos
const agregarRutinas = async(datos) => {
    try{   
        const consultaRutinas = {
            text: 'insert into ejercicios (nombre, series, repeticiones, descanso) values ($1, $2, $3, $4) returning *',
            values: datos,
        }

        const result = await db.query(consultaRutinas);
        console.log(result.rows);
        return result.rows;
    }catch(err){
        console.log(err.message)
    }
}



//modificar rutina


//delete rutina




export { 
    agregarRutinas,
    verRutinas
}