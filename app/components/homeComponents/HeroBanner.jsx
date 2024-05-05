import React from 'react'
<<<<<<< HEAD
import {Button,Typography} from '@mui/material';
=======
import {Button} from '@mui/material';
>>>>>>> e84c902 (half project commit)


const HeroBanner = () => {
  return (
    <div className='flex flex-col gap-5 justify-center items-start ml-8 mytop'>
<<<<<<< HEAD
      <Typography variant='h2'>Fitness Club</Typography>
      {/* <Typography sx={{variant:{lg:'h3',xs:'h6'}}} className='font-bold text-myred mt-5'>Fitness Club</Typography> */}
=======
      <h2 className='font-bold text-myred mt-5'>Fitness Club</h2>
>>>>>>> e84c902 (half project commit)
      <h1 className='font-bold'>Sweat, Smile <br/> and Repeat</h1>
      <div className='text-2xl'>Check out the most effective exercises.</div>
      <Button variant='contained' color='error' href='#exercises'>EXPOLER EXERCISES</Button>
    </div>
  )
}

export default HeroBanner