const router = require('express').Router();
const mongoose = require('mongoose')

const db = require('../../models/index');

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

router.get('/', (req, res) => {
    db.Workout.find({})
        .then(workout => {
            res.json(workout)
        })
        .catch(err => {
            res.json(err)
        })
})

router.post('/', (req, res) => {
    db.Workout.create({day: new Date()})
    .then(workout => {
        res.json(workout)
    })
    .catch(err => {
        res.json(err)
    })
})

router.put('/:id', (req, res) => {
    const exercises = req.body
    db.Workout.update({_id: new mongoose.Types.ObjectId(req.params.id) }, { $push: {exercises: exercises} })
    .then(excercise => {
        res.json(excercise);
    })
    .catch(err => {
        res.json(err);
    })
})

router.get('/range', (req, res) => {
    let workoutsInRange = db.Workout.aggregate([{
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