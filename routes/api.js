const router = require("express").Router();

// this is the full route --> /api/workouts...
router.get("/api/workouts", async function (req, res) {
  try {
    const workouts = await Workout.find({});
    res.json(workouts);
  } catch (err) {
    res.status(500).end();
  }
});

router.put("/api/workouts/:id", async function (req, res) {
    try {
        const updateWorkout = await Workout.findByIDAndUpdate(
            params.id,
            {
                $push: { exercises: body},
            },
            {new: true, runValidators:true}
        );
        res.json(updateWorkout);
    } catch(err) {
        res.status(500).end()
    }
});

router.post("/api/workouts", async function (req, res) {
    try {
        const newWorkout = await Workout.create({});
        res.json(newWorkout);
    } catch (err){
        res.status(500).end();
    }
});

router.get("/api/workouts/range", async function (req, res) {
  try {
    const range = await Workout.find({});
    res.json(range);
  } catch (err) {
    res.status(500).end();
  }
});

module.exports = router;
