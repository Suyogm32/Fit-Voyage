import { Typography } from "@mui/material";
import React from "react";

const WorkoutCard = () => {
  return (
    <div className="border-black w-auto bg-white mt-8 rounded-lg p-4">
      <Typography variant="h5" sx={{ display: "flex" }}>
        Workout
      </Typography>
      <div>Some content</div>
    </div>
  );
};

export default WorkoutCard;
