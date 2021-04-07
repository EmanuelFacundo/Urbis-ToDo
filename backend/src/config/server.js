const dotenv = require('dotenv')
dotenv.config()

const port = process.env.PORT || 3000

const express = require('express')
const cors = require('cors')
const corsOptions = require('../config/cors')

const server = express()

server.use(express.urlencoded({ extended: true }))
server.use(express.json())
server.use(cors(corsOptions))

server.listen(port, function(){
    console.log(`BACKEND is running on port ${port}.`)
})

module.exports = server