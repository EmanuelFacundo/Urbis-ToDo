/*

Arquivo:  loader.js
Descrição: arquivo resposável por toda a configuração e execução da aplicação
Data: 02/04/2021
Autor: Emanuel Facundo

*/

const server = require('./config/server')
require('./config/database')
require('./routes/routes')(server)