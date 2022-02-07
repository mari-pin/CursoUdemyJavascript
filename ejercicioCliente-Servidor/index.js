//traemos axios xa utilizarlo
const axios = require('axios');
// traemosw paquete file sistem y añadimos .promises para que trabaje de forma asincrona y nos traiga solo la funcionalidad de las promesas (especificico del pakete de fs)
const fs = require('fs').promises

//path nos atyuda a generar las rutas donde queremos almacenar los archivos
const path = require('path')
//axios trabaja de forma asincrona
const main = async () => {
    //peticion get a la url y almacena la respuesta en la varible response
    let response = await axios.get('https://rickandmortyapi.com/api/character');
    let {
        data: {
            results
        }
    } = response;
    console.log(results);

    let personajes = results.map((personaje) => {
            return {
                id: personaje.id,
                nombre: personaje.name,
                status: personaje.status,
                especie: personaje.species,

            }
            //hacemos un map para obtener los valores del objeto separandolos con la ',' sin que aparezcan las claves
        }).map((personaje) => Object.values(personaje).join(','))
        //añade dos saltos de linea 
        .join('\n \n')
        // creacion promesa y creara un estring con los datos que queremos almacenar    
        await fs.writeFile(path.join(__dirname, "file.csv"))
        /* añade la ruta donde estan nuestros datos 
        console.log(path.join(__dirname,"data.csv")); */
    console.log(personajes);
}
main()