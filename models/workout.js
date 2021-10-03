const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Excercise = require('./Excercise');

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        required: "A date is required",
        unique: true
    },
    excercises: [{type: Schema.Types.ObjectId, ref: Excercise}]

})

const Workout = mongoose.model("Workout", WorkoutSchema)


module.exports = Workout