import React, { useEffect, useState } from "react";
import { Pagination } from "@mui/material";
import { Box, Stack, Typography } from "@mui/material";
<<<<<<< HEAD
import ExerciseCard from "./ExerciseCard";
import axios from "axios";
import AddExercise from "@/app/AddExercise/page";
const Exercises = ({ setExercises, bodyPart, exercises }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [showPopup, setShowPopup] = useState(false);
  const [addExer, setAddExer] = useState({});
  const exercisesPerPage = 8;
=======
import { exerciseOptions, fetchData } from "@/app/utils/fetchData";
import ExerciseCard from "./ExerciseCard";
const Exercises = ({ setExercises, bodyPart, exercises }) => {
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
    const fetchExercisesData = async () => {
      let exercisesData = [];
      if (bodyPart === "all") {
        exercisesData = await axios.get("/api/ExerciseDB");
      } else {
        exercisesData = await axios.get(
          `/api/ExerciseDB/bodyPart/?bodyPart=${bodyPart}`
        );
      }
      setExercises(exercisesData.data);
    };
    fetchExercisesData();
    if (addExer.name) {
      setShowPopup(true);
    }
  }, [bodyPart, addExer]);
=======
  useEffect(()=>{
    const fetchExercisesData=async()=>{
      let exercisesData=[];
      if(bodyPart==='all'){
        exercisesData=await fetchData('https://exercisedb.p.rapidapi.com/exercises?limit=5000',exerciseOptions);

      }else{
        exercisesData=await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}?limit=5000`,exerciseOptions);
      }
      setExercises(exercisesData);
    }
    fetchExercisesData();
  },[bodyPart])
>>>>>>> e84c902 (half project commit)

  const paginate = (e, value) => {
    setCurrentPage(value);
    document.getElementById("showing-results").scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <Box id="exercises" sx={{ mt: { lg: "110px" } }} mt="50px" p={"20px"}>
      <Typography id="showing-results" variant="h4" mb={"40px"}>
        Showing results
      </Typography>
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
  );
};

export default Exercises;
