"use client";
<<<<<<< HEAD
import React,{useState,useCallback} from 'react'
=======
import React,{useState} from 'react'
>>>>>>> e84c902 (half project commit)
import Navbar from '../components/Navbar'
import styled from 'styled-components'
import SearchExercises from '../components/homeComponents/SearchExercise/SearchExercises';
import ScheduleStack from '../components/ScheduleComponent/ScheduleStack';
<<<<<<< HEAD
import ExerSchedule from './ExerSchedule';
=======
>>>>>>> e84c902 (half project commit)

const ScheduleWrapper=styled.div`
  background-color: '#f3a5a5';  
`;
const page = () => {
    const [exercises,setExercises]=useState([]);
    const [bodyPart,setBodyPart]=useState('all');
<<<<<<< HEAD
    const [updateTrigger, setUpdateTrigger] = useState(0);

  const triggerUpdate = useCallback(() => {
    setUpdateTrigger(prev => prev + 1);
  }, []);
=======
>>>>>>> e84c902 (half project commit)
  return (
    <ScheduleWrapper>
        <Navbar/>
        <SearchExercises setExercises={setExercises}/>
        <ScheduleStack exercises={exercises} setExercises={setExercises}/>
<<<<<<< HEAD
        <ExerSchedule updateTrigger={updateTrigger} />
=======
>>>>>>> e84c902 (half project commit)
    </ScheduleWrapper>
  )
}

export default page