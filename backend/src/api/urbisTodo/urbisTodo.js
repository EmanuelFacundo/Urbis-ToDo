const restful = require('node-restful')
const Schema = restful.mongoose.Schema

const todoUrbis = new Schema({
    description: { type: String, required: true },
    done: { type: Boolean, required: true , default: false},
    createdAt: { type: Date, default: Date.now}    
})

module.exports = restful.model('Todo', todoUrbis)