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
const updateProduct = async (product)=> {
    const collection = await Database(COLLECTION)
    let result = await product.updateOne(user)
    return result
}


//delete
const deleteProduct = async (product)=>{
    const collection = await Database(COLLECTION)
    let result = await product.deleteOne(user)
    return result
}



module.exports.UsersService = {
    getAll,
    getById,
    create,
}