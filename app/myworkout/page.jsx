"use client";
import React from 'react'
import Navbar from '../components/Navbar'
import Calender from '../components/MyWorkout/Calender';
import WorkoutCard from '../components/MyWorkout/WorkoutCard';
import styled from 'styled-components';
import TodaysExercises from '../components/MyWorkout/TodaysExercises';
const WorkoutWrapper=styled.div`
  background-color: '#f3a5a5';
`
const MyWorkout = () => {
  return (
    <WorkoutWrapper> 
        <Navbar/>
        <div className='flex flex-col gap-8 md:flex-row ml-4 items-start'>
            <Calender className='flex flex-auto'/>
            <WorkoutCard/>
            <TodaysExercises/>
        </div>
    </WorkoutWrapper>
  )
}

export default MyWorkout