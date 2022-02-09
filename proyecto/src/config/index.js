//nos va a traer todas las variables de entorno del archivo .env
const dotenv = require('dotenv').config();

//nos permite importar este archivo  y exportarlo en otros archivos
module.exports.Config = {
    //accerdemos al PORT
    port: process.env.PORT,
    mongoUri: process.env.MONGO_URI,
    mongoDbName: process.env.MONGO_DBNAME

}