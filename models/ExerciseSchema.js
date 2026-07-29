const { Schema, models, model, default: mongoose } = require("mongoose");

const ExerciseSchema = new Schema({
  exercise_ID: { type: mongoose.Types.ObjectId, ref: "ExerciseDB" },
  no_Of_Reps_Completed: { type: Number, required: true },
  no_Of_Sets_Completed: { type: Number, required: true },
});

const ExerciseLogSchema = new Schema({
  date: { type: String, required: true }, // Format: "24/12/24"
  day: { type: String, required: true }, // Example: "Monday"
  exercises: [ExerciseSchema], // Array of exercises
});

const WorkoutScheduleSchema = new Schema({
  user: { type: mongoose.Types.ObjectId, ref: "User", required: true },
  exercises_done: [ExerciseLogSchema], // Array of exercise logs
});

export const WorkoutsLog =
  models.WorkoutsLog || model("Workouts", WorkoutScheduleSchema);
