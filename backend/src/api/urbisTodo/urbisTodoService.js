const urbisTodo = require('../user/user') //obter resultado do metodo "mongoose.model('Todo', todoUrbis)"
const errorHandler = require('../common/errorHandler')

urbisTodo.methods(['get', 'post', 'put', 'delete']) // API REST padrao
urbisTodo.updateOptions({ new: true, runValidators: true, useNewUrlParser: true }) // Retornar regristro atualizado e validar atualizacoes
urbisTodo.after('post', errorHandler)

module.exports = urbisTodo