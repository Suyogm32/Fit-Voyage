import React from 'react'
import {Button} from '@mui/material';


const HeroBanner = () => {
  return (
    <div className='flex flex-col gap-5 justify-center items-start ml-8 mytop'>
      <h2 className='font-bold text-myred mt-5'>Fitness Club</h2>
      <h1 className='font-bold'>Sweat, Smile <br/> and Repeat</h1>
      <div className='text-2xl'>Check out the most effective exercises.</div>
      <Button variant='contained' color='error' href='#exercises'>EXPOLER EXERCISES</Button>
    </div>
  )
}

export default HeroBanner