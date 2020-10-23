const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const requireDir = require('require-dir')

// Initializing App
const app = express()

const port = 3001

app.use(express.json()) // allows us to send data in json
app.use(cors())

//Initializing DB
mongoose.connect('mongodb+srv://Yuri:byyri@cluster0.hu1jd.gcp.mongodb.net/bankSystem?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})

mongoose.set('useCreateIndex', true);

requireDir('./src/models')


// Routes
app.use('/api', require('./src/routes')) // .use() accepts all kinds of requisitions (GET, POST, ...)
// everytime we receive a requisition from /api, we call ./src/routes

app.listen(port, () => console.log(`Server running on port ${port}`))