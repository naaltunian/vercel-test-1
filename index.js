const express = require('express')
const mongoose = require('mongoose')
const userRoutes = require('./controllers/user')

require('dotenv').config()

const app = express()

// Middleware
app.use(express.json())

// Routes
app.use('/user', userRoutes)

// db connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('DB connected'))
    .catch(err => console.error(err));

const PORT = process.env.PORT

app.listen(PORT, console.log(`listening on port ${PORT}`))