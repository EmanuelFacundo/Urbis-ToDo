const urbisTodo = require('./urbisTodo') //obter resultado do metodo "mongoose.model('Todo', todoUrbis)"

urbisTodo.methods(['get', 'post', 'put', 'delete']) // API REST padrao
urbisTodo.updateOptions({ new: true, runValidators: true, useNewUrlParser: true }) // Retornar regristro atualizado e validar atualizacoes

module.exports = urbisTodo