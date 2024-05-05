import React,{useState} from 'react'
import { Box,Stack } from '@mui/material';
import { Pagination } from "@mui/material";
import ExerciseCard from '../homeComponents/Exercise/ExerciseCard';
const ScheduleStack = ({ setExercises, exercises }) => {
    const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 9;
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises?.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );
  const paginate = (e, value) => {
    setCurrentPage(value);
    document.getElementById("showing-results").scrollIntoView({
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
          <ExerciseCard key={index} exercise={exer} />
        ))}
      </Stack>
      <Stack mt={"50px"} alignItems={"center"}>
        {exercises?.length > 9 && (
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
  )
}

export default ScheduleStack