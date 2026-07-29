import { Workouts } from "@/models/WorkoutDays";
import { mongooseConnect } from "@/lib/mongoose";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  try {
    await mongooseConnect();
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get("userId");
    console.log(userId);
    if (userId) {
      const usersSchedule = await Workouts.find({ user: userId });
      console.log(usersSchedule);
      return new NextResponse(JSON.stringify(usersSchedule), { status: 200 });
    } else {
      return new NextResponse(JSON.stringify({ message: "User Not found!" }), {
        status: 200,
      });
    }
  } catch (error) {
    return new NextResponse(
      JSON.stringify({
        message: "Error in fetching equipment exercises",
        error,
      }),
      {
        status: 500,
      },
    );
  }
};

export const POST = async (req) => {
  try {
    await mongooseConnect();

    const body = await req.json();
    const { userId, date, day, newExercise } = body; // `newExercise` is the new entry to add

    // Validate input
    if (!userId || !date || !day || !newExercise) {
      return new NextResponse(
        JSON.stringify({
          message: "Invalid or missing request body parameters.",
        }),
        { status: 400 },
      );
    }

    // Find the user's workout log
    const workoutLog = await WorkoutsLog.findOne({ user: userId });

    if (!workoutLog) {
      return new NextResponse(
        JSON.stringify({ message: "Workout log not found for the user." }),
        { status: 404 },
      );
    }

    // Find the log entry for the specified date and day
    const existingLog = workoutLog.exercises_done.find(
      (log) => log.date === date && log.day === day,
    );

    if (existingLog) {
      // Add the new exercise to the existing exercises array
      existingLog.exercises.push(newExercise);
    } else {
      // If no entry exists for the date and day, create a new one
      workoutLog.exercises_done.push({
        date,
        day,
        exercises: [newExercise],
      });
    }

    // Save the updated log
    await workoutLog.save();

    return new NextResponse(
      JSON.stringify({
        message: "Exercise added successfully.",
        data: workoutLog,
      }),
      { status: 200 },
    );
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: "Error updating workout log", error }),
      { status: 500 },
    );
  }
};
