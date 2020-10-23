const express = require('express')

const routes = express.Router()

const UserController = require('./controllers/UserController')

routes.get('/users', UserController.index)
routes.get('/users/:name', UserController.search)
routes.post('/users', UserController.store)
routes.put('/users/:name', UserController.update)
routes.delete('/users/:name', UserController.destroy)

module.exports = routes