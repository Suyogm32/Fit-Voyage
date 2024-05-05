<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import { Box, Stack } from "@mui/material";
import { Pagination } from "@mui/material";
import ExerciseCard from "../homeComponents/Exercise/ExerciseCard";
import AddExercise from "@/app/AddExercise/page";
const ScheduleStack = ({ setExercises, exercises }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [showPopup, setShowPopup] = useState(false);
  const [addExer, setAddExer] = useState({});
  const exercisesPerPage = 8;
=======
import React,{useState} from 'react'
import { Box,Stack } from '@mui/material';
import { Pagination } from "@mui/material";
import ExerciseCard from '../homeComponents/Exercise/ExerciseCard';
const ScheduleStack = ({ setExercises, exercises }) => {
    const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 9;
>>>>>>> e84c902 (half project commit)
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises?.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );
<<<<<<< HEAD
  useEffect(() => {
    if (addExer.name) {
      setShowPopup(true);
    }
  }, [addExer]);
  const paginate = (e, value) => {
    setCurrentPage(value);
    document.getElementById("exercises").scrollIntoView({
=======
  const paginate = (e, value) => {
    setCurrentPage(value);
    document.getElementById("showing-results").scrollIntoView({
>>>>>>> e84c902 (half project commit)
      behavior: "smooth",
    });
  };
  return (
    <Box id="exercises" sx={{ mt: { lg: "110px" } }} mt="50px" p={"20px"}>
      <Stack
        direction={"row"}
        sx={{ gap: { lg: "110px", xs: "50px" } }}
        flexWrap={"wrap"}
        justifyContent={"center"}
      >
        {currentExercises?.map((exer, index) => (
<<<<<<< HEAD
          <ExerciseCard key={index} exercise={exer} setAddExer={setAddExer} />
        ))}
      </Stack>
      {showPopup && (
        <>
          {console.log("Neaserst to component", addExer)}
          <AddExercise exerc={addExer} setShowPopup={setShowPopup} />
        </>
      )}
      <Stack mt={"50px"} alignItems={"center"}>
        {exercises?.length > 8 && (
=======
          <ExerciseCard key={index} exercise={exer} />
        ))}
      </Stack>
      <Stack mt={"50px"} alignItems={"center"}>
        {exercises?.length > 9 && (
>>>>>>> e84c902 (half project commit)
          <Pagination
            color="standard"
            shape="circular"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
    </Box>
<<<<<<< HEAD
  );
};

export default ScheduleStack;
=======
  )
}

export default ScheduleStack
>>>>>>> e84c902 (half project commit)
