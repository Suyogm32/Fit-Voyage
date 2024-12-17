import { User } from "@/models/User";
import { mongooseConnect } from "@/lib/mongoose";
import { NextResponse } from "next/server";


export const PUT=async(req)=>{
    try{
        const {uid,day,userExercise}=await req.json();
        console.log("At backend",{uid,day,userExercise});
        await mongooseConnect();
        const user=await User.findById(uid);
        console.log("user at backend ",user);
        if(user.schedule){
            console.log(`the day is ${day} and schedule is -> ${user.schedule[`${day}`]}`)
            let dayScheduleObj=[...user.schedule[`${day}`],userExercise];
            let allSchedule={...user.schedule,[day]:dayScheduleObj};
            console.log("All schedule object is ",allSchedule);
            const userWorkout=await User.findByIdAndUpdate(uid,{schedule:allSchedule});
            return new NextResponse(JSON.stringify({ "message": "Workout added to your schedule.",schedule:allSchedule}), { status: 200 });
        }
    }
    catch(error){
            return new NextResponse(
                JSON.stringify({
                    message:"Error creating new product",
                    error,

                }),
                {
                    status:500,
                }
            );
    }
}