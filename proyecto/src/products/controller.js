const cresateError = require('http-errors');
const debug = require('debug')('app:module-products-controller');
const { ProductsService} = require('./servicios');
const {Response} = require('../common/response');
const {ObjectId} = require('mongodb');
module.exports.ProductsController = {
    // nos devuelve la lista de productos
    getProducts: async (req, res) => {
        try {
            let products = await ProductsService.getAll()
            Response.success(res, 200, 'Lista de productos', products)
            /*  res.json(products) */

        } catch (error) {
            debug(error)
            /* res.status(500).json ({message:'Internal server error'}) */
            Response.error(res)
        }
    },
    //un producto 
    getProduct: async (req, res) => {
        try {
            const {
                params: {
                    id
                }
            } = req;
            let product = await ProductsService.getById(id)
            if (!product) {
                Response.error(res, new cresateError.NotFound())
            }else{
                Response.success(res, 200, `Producto${id}`, product)
            }
        } catch (error) {
            debug(error)
            Response.error(res)

        }

    },
    //creacion de producto
    createProduct: async (req, res) => {
        try {
            const {body} = req;
            if (!body || Object.keys(body).length === 0) {
                Response.error(res, new cresateError.BadRequest())
            } else {
                const insertedId = await ProductsService.create(body)
                Response.success(res, 201, 'Producto agregado', insertedId)

            }
        } catch (error) {
            debug(error)
            Response.error(res)

        }

    },
    generateReport:async(req,res)=>{
        try {
           await ProductsService.generateReport('Inventario', res)
        } catch (error) {
            debug(error)
            Response.error(res)
        }
    }
}