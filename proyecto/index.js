const express = require('express')
const debug = require('debug')('app:main')

const {Config}= require('./src/config/index')
const {ProductsAPI} = require('./src/products/index')
const app = express();

app.use(express.json())

//modulos
ProductsAPI(app)

app.listen (Config.port, ()=>{
    debug(`servidor abierto en el puerto${Config.port}`)
})