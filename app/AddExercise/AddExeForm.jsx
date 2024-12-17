"use client";
import React, { useRef, useState } from "react";
import { Typography,Button } from "@mui/material";
import axios from "axios";
import { useRouter } from "next/navigation";
const AddExeForm = ({ exercise,setShowPopup}) => {
const ss = typeof window !== "undefined" ? window.sessionStorage : null;
const router=useRouter();
  console.log(exercise);
  let initialState = {
    exerciseName: exercise.name,
    exerciseId: exercise.id,
    exerciseGif:exercise.gifUrl,
    numbreOfSets: 0,
    numberOfReps: 0,
  };
  const [userExercise, setUserExercise] = useState(initialState);
  const [error, setError] = useState("");
  const [day,setDay]=useState('mon');
  const PutAttribute = (e, attribute) => {
    const newExercise = { ...userExercise };
    newExercise[attribute] = e.target.value;
    setUserExercise(newExercise);
  };

  const saveUserExercise = async (e) => {
    e.preventDefault();
    try {
        const uid=JSON.parse(ss.getItem('user')).userId;
        console.log("users is ",uid);
      const data = {uid,day,userExercise};
      console.log(`data at checkout on ${day} of user ${uid}`, data);
      const resp=await axios.put("/api/SaveWorkout",data);
      console.log("log after saving workout",resp.data.schedule);
      ss.setItem('schedule',JSON.stringify(resp.data.schedule));
      setShowPopup(false);
      router.push('/schedule');
    } catch (error) {
      // Handle Axios POST request error
      console.error("Error creating product:", error);
      setError("Failed to create product. Please try again later.");
    }
  };
  
  return (
    <div
      className="flex flex-col justify-center items-center bg-mybg p-8 rounded-xl gap-4"
    >
      <Typography variant="h4" textTransform={"capitalize"} display={"inline"}>
        Add this Exercise to your schedule
      </Typography>
      <div className="flex flex-col gap-4 justify-center items-start">
        <input
          type="text"
          name="ExerciseName"
          placeholder={exercise.name}
          value={userExercise.exerciseName}
          className="p-4 py-2"
        />
        <input
          type="text"
          name="ExerciseId"
          value={userExercise.exerciseId}
          className="hidden"
        />
        <select
          value={day}
          onChange={(e) => setDay(e.target.value)}
          className="p-4 py-2 w-full"
        >
          <option value="mon">Monday</option>
          <option value="tue">Tuesday</option>
          <option value="wed">Wednesday</option>
          <option value="thu">Thursday</option>
          <option value="fri">Friday</option>
          <option value="sat">Saturday</option>
          <option value="sun">Sunday</option>
        </select>
        <input
          type="number"
          name="Sets"
          placeholder={"Number of Sets"}
          value={userExercise.numbreOfSets}
          onChange={(e) => PutAttribute(e, "numbreOfSets")}
          className="p-4 py-2"
        />
        <input
          type="number"
          name="Reps"
          placeholder={"Number of Repetations"}
          value={userExercise.numberOfReps}
          onChange={(e) => PutAttribute(e, "numberOfReps")}
          className="p-4 py-2"
        />
        <Button onClick={saveUserExercise} variant="contained" color="error" className="place-self-center">Add</Button>
      </div>
    </div>
  );
};

export default AddExeForm;
