"use client";
import React,{useState} from 'react'
import Navbar from '../components/Navbar'
import styled from 'styled-components'
import SearchExercises from '../components/homeComponents/SearchExercise/SearchExercises';
import ScheduleStack from '../components/ScheduleComponent/ScheduleStack';

const ScheduleWrapper=styled.div`
  background-color: '#f3a5a5';  
`;
const page = () => {
    const [exercises,setExercises]=useState([]);
    const [bodyPart,setBodyPart]=useState('all');
  return (
    <ScheduleWrapper>
        <Navbar/>
        <SearchExercises setExercises={setExercises}/>
        <ScheduleStack exercises={exercises} setExercises={setExercises}/>
    </ScheduleWrapper>
  )
}

export default page