const restful = require('node-restful')
const mongoose = restful.mongoose

const todoUrbis = new mongoose.Schema({
    description: { type: String, required: true },
    done: { type: Boolean, required: true , default: false},
    createdAt: { type: Date, default: Date.now}
})

const todoList = new mongoose.Schema({
    title: { type: String, required: true },
    todo: [todoUrbis]
})

module.exports = restful.model('TodoList', todoList)