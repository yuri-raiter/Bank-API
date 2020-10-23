const mongoose = require('mongoose')

const User = mongoose.model('User') // getting access to User
const modelOperations = require('./modelOperations')

module.exports = {
    async index(req, res) {
        const users = await modelOperations.findAll(User) // search for all users

        return res.json(users)
    },

    async search(req, res) { // search for the name submitted by the user
        const user = await modelOperations.findByName(User, req.params.name)

        return res.json(user)
    },

    async store(req, res) { // create new users
        const user = await modelOperations.createOne(User, req.body)

        return res.json(user)
    },

    async update(req, res) { // updates an user
        const user = await modelOperations.updateOne(User, req.params.name, req.body)

        return res.json(user)
    },

    async destroy(req, res) {
        await modelOperations.deleteOne(User, req.params.name)

        return res.send() // returns a secuccessful message
    }
}