const { ObjectId} = require('mongodb');
const { Database } = require('../database/index')
const {ProductsUtils} = require('./utils');

const COLLECTION = 'products'
const getAll = async () => {
    const collection = await Database(COLLECTION)
    return await collection.find({}).toArray()

}
const getById = async (id) =>{
    const collection = await Database(COLLECTION);
    return collection.findOne({_id:ObjectId(id)})
}
const create = async (product)=>{
    const collection = await Database(COLLECTION);
    let result = await collection.insertOne(product)
    return result.insertedId
}

//update
const updateProduct = async (product)=> {
    const collection = await Database(COLLECTION)
    let result = await product.updateOne(product)
    return result
}


//delete
const deleteProduct = async (product)=>{
    const collection = await Database(COLLECTION)
    let result = await product.deleteOne(product)
    return result
}


const generateReport = async(name,res) =>{
    let products = await getAll();
    ProductsUtils.excelGeneretor(products, name, res)
}

module.exports.ProductsService = {
    getAll,
    getById,
    create,
    generateReport,
}