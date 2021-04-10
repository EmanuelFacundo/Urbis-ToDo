const urbisTodo = require('../user/user') //obter resultado do metodo "mongoose.model('Todo', todoUrbis)"
const errorHandler = require('../common/errorHandler')

urbisTodo.methods(['get', 'post', 'put', 'delete']) // API REST padrao
urbisTodo.updateOptions({ new: true, runValidators: true, useNewUrlParser: true }) // Retornar regristro atualizado e validar atualizacoes
urbisTodo.after('post', errorHandler)

const searchDescription = async (req, res) => {
    try {
        const { description } = req.query;
        let where = {};

        if (description) {
            where = { description: description};
        }

        const menu = await urbisTodo.list.findOne(where).exec();

        // Caso não encontre nenhum registro para a busca especificada
        if (!menu) {
            const message = 'Não existe nenhum Reviews nesse registro';
            console.error(message);
            res.status(404).send({ message });
            return;
        }

        // Se tudo correr bem
        res.status(200).send(menu);
    } catch (e) {
        const message = 'Erro na solicitação.';
        console.error(e);
        res.status(500).send({ message });
    }
}


module.exports ={
    urbisTodo,
    searchDescription

} 