const router = require('express').Router();
const mongoose = require('mongoose')

const Workout = require('../../models/Workout');

router.get('/', (req, res) => {
    Workout.find({})
        .then(workout => {
            res.json(workout)
        })
        .catch(err => {
            res.json(err)
        })
})

router.post('/', (req, res) => {
    Workout.create({day: new Date()})
    .then(workout => {
        res.json(workout)
    })
    .catch(err => {
        res.json(err)
    })
})

router.put('/:id', (req, res) => {
    const exercises = req.body
    Workout.update({_id: new mongoose.Types.ObjectId(req.params.id) }, { $push: {exercises: exercises} })
    .then(excercise => {
        res.json(excercise);
    })
    .catch(err => {
        res.json(err);
    })
})

router.get('/range', (req, res) => {
    let workoutsInRange = Workout.aggregate([{
        $addFields: {
            totalDuration: {
                $sum: "$excercises.duration"
            }
        }
    }])
    .sort({
        _id: -1
    })
    .limit(7)
    .then(workouts => {
        res.json(workouts)
    })
    .catch(err => {
        console.log(err)
    })
})

module.exports = router;