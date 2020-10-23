const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    rg: {
        type: Number,
        required: true,
        unique: true
    },
    cpf: {
        type: Number,
        required: true,
        unique: true
    },
    account_number: {
        type: Number,
        required: true,
        unique: true
    },
    balance: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('User', UserSchema) // register a model in the application