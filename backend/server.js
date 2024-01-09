const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel = require('./customer_model/model')
const bodyParser = require('body-parser')

const app = express()
app.use(cors())
app.use(express.json())

const port = process.env.PORT || 3001

mongoose.connect('mongodb://localhost:27017/customers')

app.get('/getUsers', (req, res) => {
    UserModel.find()
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})