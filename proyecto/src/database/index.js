//pquete de mongodb necesitamos el mongoClient deberemos escribir un servidor que nos ayude a conectar con mongoAtlas
const {MongoClient} = require('mongodb')
//xa imprimir x la consola 
const debug = require('debug')('app:module-database')
//archivo config
const { Config } = require('../config/index')

//no esta conectado, esta null x defecto
let connection = null
//exportamos modulo
module.exports.Database = (collection) => new Promise(async(resolve, reject) => {
    try {
        //si no esta conectado realiza una conexion
        if (!connection) {
            const client = new MongoClient(Config.mongoUri);
            connection = await client.connect()
            debug('nueva connexion realizada con MongoAtlas')
        }
        debug('reutilizando conexion')
        const db = connection.db(Config.mongoDbName)
        resolve(db.collection(collection))

    } catch (error) {
        reject(error)

    }
})