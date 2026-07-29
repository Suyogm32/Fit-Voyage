import { mongooseConnect } from "@/lib/mongoose";
import { NextResponse } from "next/server";
import { Workouts } from "@/models/WorkoutDays";


export const PUT = async (req) => {
    try {
        const { uid, day, userExercise } = await req.json();
        console.log("At backend", { uid, day, userExercise });

        await mongooseConnect();

        // Find the user's workout schedule by user ID
        let workoutSchedule = await Workouts.findOne({ user: uid });

        // If the user does not have a workout schedule, create a new one
        if (workoutSchedule) {
            console.log("Workout schedule found for user:", workoutSchedule);

            // Add the new exercise to the corresponding day
            const updatedDaySchedule = [...workoutSchedule.schedule[day], userExercise];

            // Update the schedule for the given day
            workoutSchedule.schedule[day] = updatedDaySchedule;

            // Save the updated workout schedule
            await workoutSchedule.save();

            return new NextResponse(
                JSON.stringify({
                    message: "Workout added to your schedule.",
                    schedule: workoutSchedule.schedule,
                }),
                { status: 200 }
            );
        } 
        else {
            // If no workout schedule is found, create a new one
            console.log("No workout schedule found, creating a new one.");

            // Initialize the schedule with the correct order
            const initialSchedule = {
                mon: [],
                tue: [],
                wed: [],
                thu: [],
                fri: [],
                sat: [],
                sun: [],
            };

            // Add the exercise to the specified day
            initialSchedule[day] = [userExercise];

            workoutSchedule = new Workouts({
                user: uid,
                schedule: initialSchedule,
            });

            await workoutSchedule.save();

            return new NextResponse(
                JSON.stringify({
                    message: "User workout schedule created and workout added.",
                    schedule: workoutSchedule.schedule,
                }),
                { status: 201 }
            );
        }
    } 
    catch (error) {
        console.error("Error in PUT handler:", error);
        return new NextResponse(
            JSON.stringify({
                message: "Error processing request.",
                error: error.message,
            }),
            { status: 500 }
        );
    }
};
