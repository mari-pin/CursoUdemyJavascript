const express = require('express');

const app = express();
const PORT = 3000;
//le damos la capacidad ewscuchar a nuestro sevidor peticiones tipo get 
//request-->peticion del cliente
//response--> respuesta al cliente
app.get('/',(req, res)=>{
    //responde datos. accedemos al json
    res.json({
        //estructuramos el objeto json que queremos responder
        message:'hola desde expess'
    })

})

app.listen(PORT, ()=>{
    console.log(`servidor escuchando en http://localhost:${PORT}`);
})