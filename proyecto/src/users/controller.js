const createError = require('http-errors');
const debug = require('debug')('app:module-products-controller');
const { UsersService} = require('./servicios');
const {Response} = require('../common/response');
const {ObjectId} = require('mongodb');
module.exports.UsersController = {
    // nos devuelve la lista de ususarios
    getUsers: async (req, res) => {
        try {
            let users = await UsersService.getAll()
            Response.success(res, 200, 'Lista de ususarios', users)
            /*  res.json(products) */

        } catch (error) {
            debug(error)
            /* res.status(500).json ({message:'Internal server error'}) */
            Response.error(res)
        }
    },
    //un usuario
    getUser: async (req, res) => {
        try {
            const {
                params: {
                    id
                }
            } = req;
            let user = await UsersService.getById(id)
            if (!user) {
                Response.error(res, new createError.NotFound())
            }else{
                Response.success(res, 200, `User${id}`, user)
            }
        } catch (error) {
            debug(error)
            Response.error(res)

        }

    },
    //creacion de usuario
    createUser: async (req, res) => {
        try {
            const {body} = req;
            if (!body || Object.keys(body).length === 0) {
                Response.error(res, new createError.BadRequest())
            } else {
                const insertedId = await UsersService.create(body)
                Response.success(res, 201, 'Usuario agregado', insertedId)

            }
        } catch (error) {
            debug(error)
            Response.error(res)

        }

    },

    //update user
    updateUser:async(req,res)=>{
        try {
            
        } catch (error) {
            debug(error)
            Response.error(res)
        }

    },
    //deleteuser
    deleteUser:async(req,res)=>{
        try {
            
        } catch (error) {
            debug(error)
            Response.error(res)
        }

    }
}    