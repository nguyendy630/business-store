const mongoose = require('mongoose')

const usersSchema = new mongoose.Schema ({
    name: String,
    email: String,
})


const UserModel = mongoose.model('users', usersSchema)
module.exports = UserModel;