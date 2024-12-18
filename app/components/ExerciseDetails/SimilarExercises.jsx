import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import ExerciseCard from "../homeComponents/Exercise/ExerciseCard";
import HorizontalScrollForExercises from "./HorizontalScrollForExercises";

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  
  return (
    <Box sx={{ mt: { lg: "100px", sx: "10px" } }}>
      <Typography variant="h4" mb={"20px"}>
        Similar <span style={{ color: "#ff2625" }}>Target Muscle</span>{" "}
        Exercises
      </Typography>
<<<<<<< HEAD
      <Stack direction={"row"} sx={{ p: "2", position: "relative"}}>
=======
      <Stack direction={"row"} sx={{ p: "2", position: "relative" }}>
>>>>>>> e84c902 (half project commit)
        {targetMuscleExercises?.length > 0 && (
          <HorizontalScrollForExercises exerciseData={targetMuscleExercises}/>
        )}
      </Stack>
      <Typography variant="h4" mb={'20px'}>
        Similar <span style={{ color: "#ff2625" }}>Equipment</span> Exercises
      </Typography>
<<<<<<< HEAD
      <Stack direction={"row"} sx={{ p: "2", position: "relative"}}>
=======
      <Stack direction={"row"} sx={{ p: "2", position: "relative" }}>
>>>>>>> e84c902 (half project commit)
        {equipmentExercises?.length > 0 && (
          <HorizontalScrollForExercises exerciseData={equipmentExercises}/>
        )}
      </Stack>
    </Box>
  );
};

export default SimilarExercises;
