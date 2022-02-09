// traemos los datos de nuestro mockdata(es nuestra base de datos ficticia)y se almacenan en la variable data.
const data = require('./MOCK_DATA.json');

//exportamos lo k hay dentro del objeto con el module.exports
module.exports = {
    //obtener usuarios
    getUsers: ()=> data,

    //func k recibe el id delusuario
    getUser:(id) => {
        //nos ayuda a pasar el id a numero
        let identificador = Number(id);
       let user =  data.filter((persona)=> persona.id === identificador)[0];
       return user;
    },


    // crear un nuevo usuario
    createUser: (dataUser)=>{
        let newUser = {
            //de este modo le pedimos los id consecuticos 
            id: data.length +1,
            ...dataUser
            /* first_name):'',
            last_name:'',
            email:'' */
        }
        //agrega el nuevo usuario al array de memoria
        data.push(newUser)

        //retorna el nuevo usuario
        return newUser;

    }
}
