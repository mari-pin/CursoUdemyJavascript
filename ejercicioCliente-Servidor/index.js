//traemos axios xa utilizarlo
const axios = require ( 'axios');
//axios trabaja de forma asincrona
const main = async() =>{
 //peticion get a la url y almacena la respuesta en la varible response
let response = await axios.get('https://rickandmortyapi.com/api/character');
let {data:{results}} = response;console.log(results);

let personajes = results.map((personaje)=>{
    return{
        id:personaje.id,
        nombre: personaje.name,
        especie:personaje.species
    }
})
console.log(personajes);
}
main()