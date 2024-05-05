import React from "react";
import Link from "next/link";
import { Button, Stack, Typography } from "@mui/material";
const ExerciseCard = ({ exercise }) => {
  return (
    <Link href={`/exercise/${exercise.id}`} className="exercise-card">
      <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
      <Stack direction={"row"}>
        <Button
          sx={{
            ml: "20px",
            color: "#fff",
            background: "#ffa9a9",
            fontSize: "12px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
          {exercise.bodyPart}
        </Button>
        <Button
          sx={{
            ml: "20px",
            color: "#fff",
            background: "#fcc757",
            fontSize: "12px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
          {exercise.target}
        </Button>
      </Stack>
      <Typography
        ml={"20px"}
        color={"#000"}
        fontWeight={"bold"}
        mt={"10px"}
        p={"10px"}
        textTransform={"capitalize"}
        fontSize={'20px'}
      >
        {exercise.name}
      </Typography>
    </Link>
  );
};

export default ExerciseCard;
