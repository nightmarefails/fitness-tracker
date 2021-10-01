// Import packages
const express = require('express')
const morgan = require('morgan')

const PORT = process.env.PORT || 3001

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(express.static("public"))

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
    useNewUrlParser: true,
    useFindAndModify: false
})

//import routes
app.use(require("./routes/index.js"))

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`)
})

