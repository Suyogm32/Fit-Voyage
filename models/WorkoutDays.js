const { Schema, models, model, default: mongoose } = require("mongoose");

const WorkoutScheduleSchema=new Schema({
    user:{type:mongoose.Types.ObjectId,ref:'User'},
    mon:[Object],
    tue:[Object],
    wed:[Object],
    thu:[Object],
    fri:[Object],
    sat:[Object],
    sun:[Object],
});
export const Workouts = models.Workouts || model("Workouts",WorkoutScheduleSchema);