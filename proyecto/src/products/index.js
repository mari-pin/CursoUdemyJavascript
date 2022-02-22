const express = require('express');
const {ProductsController} = require('./controller')
// nos va a dirigir a las rutas independientemente de la aplicacion
const router = express.Router();

module.exports.ProductsAPI = (app)=>{
    //definomos k rutas va a tener
    router
        .get('/', ProductsController.getProducts)//http:localhost:3000/api/products/
        .get('/report',ProductsController.generateReport)
        .get('/:id',ProductsController.getProduct)//http:localhost:3000/api/products/23
        .post('/',ProductsController.createProduct)
        

//concadena la ruta '/api/products'con las rutas que le hemos creado arriba get y post
    app.use('/api/products', router)
}