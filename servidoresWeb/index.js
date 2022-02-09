const express = require('express');

const Service = require('./src/service')
const app = express();
const PORT = 3000;

//nos permite recibir datos de nuestros clientes
app.use(express.json())

//le damos la capacidad ewscuchar a nuestro sevidor peticiones tipo get 
//request-->peticion del cliente
//response--> respuesta al cliente
app.get('/:id',(req, res)=>{

    let {params:{id}} = req
    let user = Service.getUser(id)
    //responde datos. accedemos al json
    //estructuramos el objeto json que queremos responder
    res.json({
        message:`Usuario${id}`,
        body: Service.getUsers(),
    })

})

 app.post('/',(req,res)=>{
    //almacenamos en la variable los datos de la peticion
    let{body: newUser} = req;
    let user = Service.createUser(newUser)
    res.json({
        message: " Usuario creado",
        body: user//Service.createUser(newUser)
    })


}) 

app.listen(PORT, ()=>{
    console.log(`servidor escuchando en http://localhost:${PORT}`);
})