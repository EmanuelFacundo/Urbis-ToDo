/*

Arquivo:  loader.js
Descrição: arquivo resposável por criar a conexão com o mongoDB
Data: 02/04/2021
Autor: Emanuel Facundo

*/
const dotenv = require('dotenv')
dotenv.config()

const mongoose = require('mongoose')
mongoose.Promise = global.Promise //retirar mensagens de advertencia
mongoose.set('useUnifiedTopology', true) //Usando o novo mecanismo de topologia
module.exports = mongoose.connect(process.env.MONGODB, { useNewUrlParser: true }) 
//Uma vez que o Mongoose foi conectado com sucesso, o analisador de URL não é mais importante.