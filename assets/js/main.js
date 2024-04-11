//llmamos la api, primero en una variable
//la queremos mostrar en el front end,, todo lo que esta guardado en nuestra api, creada..

const apiUrl = "http://localhost:3034/rutinas";

const callApi = async() => {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);

    //nos traenis el obj
    const lista = document.getElementById('rutinasJson');
    //iteramos para mostrar
    data.forEach(e => {
        let cards =
          `
        <div class="card">
            <p>${e.nombre}</p>
            <p>${e.series}</p>
            <p>${e.repeticiones}</p>
            <p>${e.descanso}</p>
        </div>
        `
        lista.innerHTML += cards;
    })
}

callApi();