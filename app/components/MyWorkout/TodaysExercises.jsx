import React, { useState, useEffect } from "react";
import { Button, TextField, Typography } from "@mui/material";
import axios from "axios";

import WorkoutCard from "./WorkoutCard";
const TodaysExercises = ({ selectedDate }) => {
  const [search, setSearch] = useState("");
  const [todaysExercises, setTodaysExercises] = useState([]);
  const days = {
    0: "sun",
    1: "mon",
    2: "tue",
    3: "wed",
    4: "thu",
    5: "fri",
    6: "sat",
  };
  // Fetch schedule data
  const loadExercises = async () => {
    try {
      const ss = typeof window !== "undefined" ? window.sessionStorage : null;
      const user = ss ? JSON.parse(ss.getItem("user")) : null;

      if (!user || !user.userId) {
        console.error("User ID is not available");
        return;
      }

      const response = await axios.get(`/api/MySchedule`, {
        params: { userId: user.userId },
      });

      if (
        response.data &&
        response.data.length > 0 &&
        response.data[0].schedule
      ) {
        const schedule = response.data[0].schedule;
        const selectedDay = days[new Date(selectedDate).getDay()]; // Get the day from the selectedDate
        setTodaysExercises(schedule[selectedDay] || []); // Set exercises for the selected day
      }
    } catch (error) {
      console.error("Error loading exercises:", error);
    }
  };

  useEffect(() => {
    if (selectedDate) {
      loadExercises(); // Fetch exercises whenever selectedDate changes
    }
  }, [selectedDate]);

  return (
    <div className="border-black w-auto bg-white mt-8 rounded-lg p-4">
      <div className="flex gap-[50px] justify-between">
        <Typography variant="h5" sx={{ display: "flex" }}>
          {selectedDate
            ? `Workout Schedule for ${new Date(selectedDate).toDateString()}`
            : "Today's Workout Schedule"}
        </Typography>
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
      <div className="mt-4">
        {todaysExercises.length > 0 ? (
          todaysExercises.map((exercise) => (
            <WorkoutCard key={exercise._id} exercise={exercise} />
          ))
        ) : (
          <p>No exercises scheduled for this day.</p>
        )}
      </div>
    </div>
  );
};

export default TodaysExercises;
