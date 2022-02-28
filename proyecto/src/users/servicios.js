const { ObjectId} = require('mongodb');
const { Database } = require('../database/index')


const COLLECTION = 'users'
const getAll = async () => {
    const collection = await Database(COLLECTION)
    return await collection.find({}).toArray()

}
const getById = async (id) =>{
    const collection = await Database(COLLECTION);
    return collection.findOne({_id:ObjectId(id)})
}
const create = async (user)=>{
    const collection = await Database(COLLECTION);
    let result = await collection.insertOne(user)
    return result.insertedId
}

//update
const updateUser = async (user)=> {
    const collection = await Database(COLLECTION)
    let result = await user.updateOne(user)
    return result
}

//otro modo de resolverlo 
//delete
  deleteUser: (id) =>{
    let identificador = Number(id);
    console.log(identificador)
    let user = data.filter((person) => person.id === identificador[0]);
    if (user === undefined) {
        return("el usuario que intente eliminar no existe")
    } else {
        let userAEliminar = data.findIndex((userToDelete) => userToDelete.id === identificador)
        let datosEliminados = data.find((userToDelete)=>userToDelete.id === identificador)
        data.splice(userAEliminar, 1)
        return(`los datos del usuario ${datosEliminados.nombre} con ID ${datosEliminados.id}ha sido eliminado correctamente`)
    }
}
//solucion con el patrón que estaba siguiendo
/* const deleteUser = async (user)=>{
    const collection = await Database(COLLECTION)
    let result = await user.deleteOne({_id:ObjectId(id)})
    return result
}
 */


module.exports.UsersService = {
    getAll,
    getById,
    create,
}