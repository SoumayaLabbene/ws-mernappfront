const express = require('express')
const app = express()
require('dotenv').config()
const connectDB = require('./config/connectdb')
const router = require('./routes/contact')

app.use(express.json())

connectDB()
app.use('/api/contacts',router)

const port = 5000 
app.listen(port,(err) => err ? console.log('errroorr!!',err) : console.log(`server is running on port : ${port}`))


