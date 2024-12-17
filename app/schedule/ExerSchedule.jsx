import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import ScheduleExerciseCard from './ScheduleExerciseCard';
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 columns */
  grid-template-rows: auto; /* Rows with automatic height based on content */
  gap: 10px;
  width: 100%;
  padding: 10px;
  margin: auto;
   /* Align the entire grid */
   justify-content: center; /* Center the grid horizontally */
  align-content: start; /* Align the grid to the top vertically */

  /* Align grid items */
  justify-items: start; /* Align items to the start (left) of each column */
  align-items: start; /* Align items to the start (top) of each row */
  /* Medium screens */
  @media screen and (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr); /* 2 columns for medium screens */
  }

  /* Small screens */
  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr); /* Single column for small screens */
  }
`;

const GridItem = styled.div`
  background-color: white;
  padding: 20px;
  font-size: 1.2em;
  border-radius: 5px;
  display: flex;
  flex-direction: column; /* Ensure items are stacked vertically */
  align-items: flex-start; /* Align items to the top-left */
  justify-content: flex-start; /* Align content to the top */
`;


const ExerSchedule = ({ updateTrigger }) => {
  const ss = typeof window !== "undefined" ? window.sessionStorage : null;
  const [schedule,setSchedule]=useState({});
  const fetchSchedule = () => {
    if (ss && ss.getItem('schedule') !== null) {
      let scheduleItem = JSON.parse(ss.getItem('schedule'));
      setSchedule(scheduleItem);
    }
  };

  useEffect(() => {
    fetchSchedule();
  }, [updateTrigger]); // Re-fetch schedule when updateTrigger changes
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
      <GridContainer className='items-center'>
        {schedule && Object.keys(schedule).map(day => (
        <GridItem key={day} style={{ marginBottom: '20px' }}>
          <h3>{day.toUpperCase()}</h3>
          <div>
          {schedule[day].length > 0 ? (
            <ul>
              {schedule[day].map((exercise, index) => (
                <li key={exercise.exerciseId}>
                  <ScheduleExerciseCard exercise={exercise} day={day} className='gap-4'/>
                </li>
              ))}
            </ul>
          ) : (
            <p>No exercises scheduled.</p>
          )}
          </div>
        </GridItem>
      ))}
      </GridContainer>
    </div>
  )
}

export default ExerSchedule