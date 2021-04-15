const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "Enter a type of exercise",
      },
      name: {
        type: String,
        trim: true,
        required: "Enter a name of the exercise",
      },
      duration: {
        type: Number,
        required: "Enter the duration of the exercise in minutes",
      },
      distance: {
        type: Number,
      },
      Weight: {
        type: Number,
      },
      reps: {
        type: Number,
      },
      sets: {
        type: Number,
      },
    },
  ],
});


module.exports.model("Workout", WorkoutSchema);
