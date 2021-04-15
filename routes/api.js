const router = require("express").Router();

// this is the full route --> /api/workouts...
router.get("/workouts", async function (req, res) {
  try {
    const workouts = await Workout.find({});
    res.json(workouts);
  } catch (err) {
    res.status(500).end();
  }
});

router.put("/workouts/:id", async function (req, res) {
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

router.post("/workouts", async function (req, res) {
    try {
        const newWorkout = await Workout.creat({});
        res.json(newWorkout);
    } catch (err){
        res.status(500).end();
    }
});

router.get("/workouts/range", async function (req, res) {
  try {
    const data = await Workout.find({});
    res.json(data);
  } catch (err) {
    res.status(500).end();
  }
});

module.exports = router;
