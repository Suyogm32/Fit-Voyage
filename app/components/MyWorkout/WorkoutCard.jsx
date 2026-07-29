import React from "react";
import styled from "styled-components";
import { Button, Typography } from "@mui/material";
const CardGrid = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 1.5fr;
  gap: 10px;
  background-color: "#F8D8D6";
  width: auto;
  padding: 10px;
  border-radius: 10px;
`;
const ButtonGrid = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 0.5fr;
  gap: 10px;
  background-color: "#F8D8D6";
  width: auto;
  padding: 10px;
  border-radius: 10px;
`;

const WorkoutCard = ({ exercise }) => {
  return (
    <div className="bg-mybg mb-2 gap-5">
      {exercise ? (
        <CardGrid className="bg-mybg mb-2 gap-5">
          <div className="flex justify-center items-center">
            <img
              src={exercise.exerciseGif}
              alt={exercise.exerciseName}
              className="rounded-md"
            />
          </div>
          <div className="flex flex-col gap-1">
            <Typography textTransform={"capitalize"}>
              {exercise.exerciseName}
            </Typography>
            <Typography>Sets - {exercise.numberOfSets}</Typography>
            <div className="flex gap-8 justify-between items-center">
              <Typography>Repetations - {exercise.numberOfReps}</Typography>
              <Button
                type="submit"
                className="place-self-end bg-white rounded-lg"
              >
                Done
              </Button>
            </div>
          </div>
        </CardGrid>
      ) : null}
    </div>
  );
};

export default WorkoutCard;
