/*

Arquivo:  loader.js
Descrição: arquivo resposável por mapear as rotas do servidor
Data: 02/04/2021
Autor: Emanuel Facundo

*/

const express = require('express')
const auth = require('../config/auth')

module.exports = function (server) {

    /*
    * Rotas protegidas por Token JWT
    */
    const protectedApi = express.Router()
    server.use('/api', protectedApi) //midway

    protectedApi.use(auth)

    const urbisTodo = require('../api/urbisTodo/urbisTodoService')
    urbisTodo.register(protectedApi, '/urbisTodos')

    /*
    * Rotas Abertas
    */
    const openApi = express.Router()
    server.use('/oapi', openApi)

    const AuthService = require('../api/user/userService')
    openApi.use('/login', AuthService.login)
    openApi.use('/signup', AuthService.signup)
    openApi.use('/validationToken', AuthService.validateToken)
}