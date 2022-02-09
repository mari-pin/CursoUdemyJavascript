const express = require('express')
const debug = require('debug')('app:main')

const {Config}= require('./src/config')
const app = express();

app.use(express.json())
//modulos
app.listen (Config.port, ()=>{
    debug(`servidor abierto en el puerto${Config.port}`)
})