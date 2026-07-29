import React, { useState, useEffect } from "react";
import { Button, TextField, Typography } from "@mui/material";
import axios from "axios";

import WorkoutCard from "./WorkoutCard";
const CompletedExercises = ({ seletedDate }) => {
  const [completedExercises, setCompletedExercises] = useState([]);

  // Fetch schedule data
  const loadCompletedExercises = async () => {
    try {
      const ss = typeof window !== "undefined" ? window.sessionStorage : null;
      const user = ss ? JSON.parse(ss.getItem("user")) : null;

      if (!user || !user.userId) {
        console.error("User ID is not available");
        return;
      }

      const response = await axios.get(`/api/MySchedule/CompletedExercises`, {
        params: { userId: user.userId },
      });

      if (
        response.data &&
        response.data.length > 0 &&
        response.data[0].schedule
      ) {
        const schedule = response.data[0].schedule;
        const selectedDay = days[new Date(seletedDate).getDay()]; // Get the day from the selectedDate
        setTodaysExercises(schedule[selectedDay] || []); // Set exercises for the selected day
      }
    } catch (error) {
      console.error("Error loading exercises:", error);
    }
  };

  useEffect(() => {
    if (seletedDate) {
      loadCompletedExercises(); // Fetch exercises whenever selectedDate changes
    }
  }, [seletedDate]);

  return (
    <div className="border-black w-auto bg-white mt-8 rounded-lg p-4">
      <div className="flex gap-[50px] justify-between">
        <Typography variant="h5" sx={{ display: "flex" }}>
          {seletedDate
            ? `Completed Exercises on ${new Date(seletedDate).toDateString()} are`
            : "Today you did not completed any exercises."}
        </Typography>
      </div>
      <div className="mt-4">
        {completedExercises.length > 0 ? (
          completedExercises.map((exercise) => (
            <WorkoutCard key={exercise._id} exercise={exercise} />
          ))
        ) : (
          <p>No exercises completed today.</p>
        )}
      </div>
    </div>
  );
};

export default CompletedExercises;
