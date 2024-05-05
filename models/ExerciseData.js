const { Target } = require("lucide-react");
const { Schema, models, model } = require("mongoose");

const ExerciseSchema=new Schema({
    bodyPart:String,
    equipment:String,
    gifUrl:String,
    id:String,
    name:String,
    target:String,
    secondaryMuscles:[String],
    instructions:[String]
});
<<<<<<< HEAD
export const ExerciseDB=models.ExerciseDB || model('ExerciseDB',ExerciseSchema);
=======
export const Exercise=models.Exercise || model('Exercise',ExerciseSchema);
>>>>>>> e84c902 (half project commit)
