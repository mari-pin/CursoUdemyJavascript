const express = require('express');
// traemos los datos de nuestro mockdata(es nuestra base de datos ficticia)y se almacenan en la variable data.
const data = require('./MOCK_DATA.json')

const app = express();
const PORT = 3000;
//le damos la capacidad ewscuchar a nuestro sevidor peticiones tipo get 
//request-->peticion del cliente
//response--> respuesta al cliente
app.get('/',(req, res)=>{
    //responde datos. accedemos al json
    //estructuramos el objeto json que queremos responder
    res.json({
        message:"lista de usuarios",
        body: data
    })

})

app.listen(PORT, ()=>{
    console.log(`servidor escuchando en http://localhost:${PORT}`);
})