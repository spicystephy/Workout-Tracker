const router = require("express").Router();
const { Workout } = require("../models");

// this is the full route --> /api/workouts...
router.get("/workouts", async function (req, res) {
  try {
    const workouts = await Workout.aggregate([
      {
        $addFields: {
          totalDuration: {
            $sum: "$exercise.duration",
          },
        },
      },
    ]);
    res.json(workouts);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.put("/workouts/:id", async function (req, res) {
  try {
    const updateWorkout = await Workout.findByIdAndUpdate(
      req.params.id,
      {
        $push: { exercises: req.body },
      },
      { new: true }
    );
    res.json(updateWorkout);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/workouts", async function (req, res) {
  try {
    const newWorkout = await Workout.create(req.body);
    console.log(newWorkout);
    res.json(newWorkout);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/workouts/range", async function (req, res) {
  try {
    const range = await Workout.find({}).sort({ day: -1 }).limit(7);
    res.json(range);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

// router.get("/workouts", async function (req, res) {
//   try {
//     const workouts = await Workout.find({});
//     res.json(workouts);
//   } catch (err) {
//     res.status(500).end();
//   }
// });

// router.put("/workouts/:id", async function ({body, params}, res) {
//   try {
//     const updateWorkout = await Workout.findByIDAndUpdate(
//       params.id,
//       {
//         $push: { exercises: body },
//       },
//       { new: true }
//     );
//     res.json(updateWorkout);
//   } catch (err) {
//     res.status(500).send();
//   }
// });
