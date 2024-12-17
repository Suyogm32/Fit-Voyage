import React, { useState } from 'react'
import { Button,TextField,Typography } from '@mui/material';
import axios from 'axios';
const TodaysExercises = () => {
    const [search, setSearch] = useState("");
    const [exercise,setExercises]=useState([]);
    const handleSearch = async (exercise) => {
        if (search) {
          const resp = await axios.get('/api/ExerciseDB');
          const exerciseData=resp.data;
          const searchedExercises=exerciseData.filter(
            (exercise)=>exercise.name.toLowerCase().includes(search) 
            || exercise.target.toLowerCase().includes(search)
            || exercise.equipment.toLowerCase().includes(search)
            || exercise.bodyPart.toLowerCase().includes(search)
          );
          setSearch('');
          setExercises(searchedExercises);
        }
      };
  return (
    <div className="border-black w-auto bg-white mt-8 rounded-lg p-4">
        <div className="flex gap-[50px] justify-between">
      <Typography variant="h5" sx={{display:'flex'}}>Today's Workout Schedule</Typography>
        <button className="inline-flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-8 h-8"
          >
            <path
              fillRule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default TodaysExercises