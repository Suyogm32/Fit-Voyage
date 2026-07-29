import { WorkoutsLog } from "@/models/ExerciseSchema";
import { mongooseConnect } from "@/lib/mongoose";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  try {
    await mongooseConnect();
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get("userId");
    const date = searchParams.get("date");
    const day = searchParams.get("day");

    if (!userId || !date || !day) {
      return new NextResponse(
        JSON.stringify({
          message: "Missing required query parameters: userId, date, or day.",
        }),
        { status: 400 },
      );
    }

    console.log(userId);

    // Fetch the workout log for the given user, date, and day
    const userSchedule = await WorkoutsLog.findOne(
      {
        user: userId,
        "exercises_done.date": date,
        "exercises_done.day": day,
      },
      {
        "exercises_done.$": 1, // Retrieve only the matching log entry
      },
    ).populate("exercises_done.exercises.exercise_ID");

    if (!userSchedule) {
      return new NextResponse(
        JSON.stringify({
          message: "No workout log found for the specified date and day.",
        }),
        { status: 404 },
      );
    }

    return new NextResponse(JSON.stringify(userSchedule.exercises_done[0]), {
      status: 200,
    });
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: "Error fetching workout log", error }),
      { status: 500 },
    );
  }
};
