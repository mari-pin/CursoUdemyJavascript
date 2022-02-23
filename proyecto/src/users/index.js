const express = require('express');
const {UsersController} = require('./controller')
// nos va a dirigir a las rutas independientemente de la aplicacion
const router = express.Router();

module.exports.UsersAPI = (app)=>{
    //definomos k rutas va a tener
    router
        .get('/', UsersController.getUsers)//http:localhost:3000/api/products/
        //.get('/report',ProductsController.generateReport)
        .get('/:id',UsersController.getUser)//http:localhost:3000/api/Users/23
        .post('/',UsersController.createUser)
        //update
        .get ('/', UsersController.updateUser)//ruta subir User
        //delete
        .get ('/',UsersController.deleteUser)//ruta delete user

//concadena la ruta '/api/users'con las rutas que le hemos creado arriba get y post
    app.use('/api/users', router)
}