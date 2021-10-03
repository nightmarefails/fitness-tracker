const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ExcerciseSchema = new Schema({
    type: {
        type: String,
        required: "Excercise type is required"
    },
    name: {
        type: String,
        required: "Excercise name is required"
    },
    duration: {
        type: Number,
        required: "Excercise duration is required"
    },
    weight: {
        type: Number
    },
    reps: {
        type: Number
    },
    sets: {
        type: Number
    },
    distance: {
        type: Number
    }
})

const Excercise = mongoose.model("Excercise", ExcerciseSchema);

module.exports = Excercise