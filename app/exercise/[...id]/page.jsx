"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Navbar from "@/app/components/Navbar";
import { fetchData, exerciseOptions,youtubeVideoOptions} from "@/app/utils/fetchData";
import Details from "@/app/components/ExerciseDetails/Details";
import ExerciseVideos from "@/app/components/ExerciseDetails/ExerciseVideos";
import SimilarExercises from "@/app/components/ExerciseDetails/SimilarExercises";
import SearchExercises from "@/app/components/homeComponents/SearchExercise/SearchExercises";
const ExerciseDetail = () => {
  const [currentExercise, setCurrentExercise] = useState({});
  const [exerciseVideosData,setExerciseVideosData]=useState([]);
  const [targetMuscleExerciseData,setTargetMuscleExerciseData]=useState([]);
  const [equipmentExerciseData,setEquipmentExerciseData]=useState([]);
  const path = usePathname();
  let patharray = path.split("/");
  const id = patharray[patharray.length - 1];
  useEffect(() => {
    const fetchExercisesData=async()=>{
        const exercisesDetails=await fetchData(`https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`,exerciseOptions);
        setCurrentExercise(exercisesDetails);
        const exerciseVideosDetails=await fetchData(`https://youtube-search-and-download.p.rapidapi.com/search?query=${exercisesDetails.name}`,youtubeVideoOptions);
        console.log('ExerciseVideosDetails are ->',exerciseVideosDetails);
        setExerciseVideosData(exerciseVideosDetails);
        const targetMuscleExerciseDetails=await fetchData(`https://exercisedb.p.rapidapi.com/exercises/target/${exercisesDetails.target}`,exerciseOptions);
        setTargetMuscleExerciseData(targetMuscleExerciseDetails);
        const equipmentExerciseDetails=await fetchData(`https://exercisedb.p.rapidapi.com/exercises/equipment/${exercisesDetails.equipment}`,exerciseOptions);
        setEquipmentExerciseData(targetMuscleExerciseDetails);
      }
      fetchExercisesData();
  }, []);
  return (
    <>
      <Navbar />
      <Details exerciseDetail={currentExercise} />
      <ExerciseVideos exerciseVideosData={exerciseVideosData} exerciseName={currentExercise.name}/>
      <SimilarExercises targetMuscleExercises={targetMuscleExerciseData} equipmentExercises={equipmentExerciseData}/>
    </>
  );
};

export default ExerciseDetail;
