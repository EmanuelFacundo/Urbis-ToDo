/*

Arquivo:  loader.js
Descrição: arquivo resposável por mapear as rotas do servidor
Data: 02/04/2021
Autor: Emanuel Facundo

*/

const express = require('express')

module.exports = function(server) {

    //API Routes
    const router = express.Router()
    server.use('/api', router) //midway

    //TODO Routes
    const urbisTodoService = require('../api/urbisTodoService')
    urbisTodoService.register(router, '/urbisTodos')
}