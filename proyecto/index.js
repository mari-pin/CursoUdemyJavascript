const express = require('express')
const debug = require('debug')

const app = express();

app.use(express.json())
//modulos
app.listen (3000, ()=>{
    debug(`servidor abierto en el puerto${3000}`)
})