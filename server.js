// Import packages
const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const path = require('path')

const PORT = process.env.PORT || 3001

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(express.static('public'))

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
    useNewUrlParser: true,
    useFindAndModify: false
})

//import routes/
app.use(require('./routes/index'))

app.get('/exercise', (req, res) => {
    try {

        res.sendFile(path.join(__dirname, 'public/exercise.html'))
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error})
    }
})

app.get('/stats', (req, res) => {
    try {
        res.sendFile(path.join(__dirname, '/public/stats.html'))
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
})

app.get('/', (req, res) => {
    try {
        res.sendFile(path.join(__dirname, '/public/index.html'));
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error})
    }
})

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`)
})

