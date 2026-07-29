"use client";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Calender from "../components/MyWorkout/Calender";
import WorkoutCard from "../components/MyWorkout/WorkoutCard";
import styled from "styled-components";
import TodaysExercises from "../components/MyWorkout/TodaysExercises";
import CompletedExercises from "../components/MyWorkout/CompletedExercises";
const WorkoutWrapper = styled.div`
  background-color: "#f3a5a5";
`;
const MyWorkout = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  return (
    <WorkoutWrapper>
      <Navbar />
      <div className="flex flex-col gap-8 md:flex-row ml-4 items-start">
        <Calender
          className="flex flex-auto"
          setSelectedDate={setSelectedDate}
        />
        <TodaysExercises selectedDate={selectedDate} />
        <CompletedExercises selectedDate={selectedDate} />
      </div>
    </WorkoutWrapper>
  );
};

export default MyWorkout;
