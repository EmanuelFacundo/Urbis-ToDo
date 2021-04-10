const todo = require('../urbisTodo/urbisTodo')
const restful = require('node-restful')
const Schema = restful.mongoose.Schema

const userSchema = new Schema({

    name: { type: String, required: true},
    email: { type: String, required: true },
    password: { type: String, min:6 , max: 12, required: true },
    list: [todo]
})

module.exports = restful.model('User', userSchema)
