const mongoose = require('mongoose')
const Schema = mongoose.Schema

const workout = new Schema({
    day: {
        type: Date,
        required: "A date is required",
        unique: true
    },
    excersises: [excersise]

})

module.exports = workout