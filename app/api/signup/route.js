import { User } from "@/models/User";
import { mongooseConnect } from "@/lib/mongoose";
import { NextResponse } from "next/server";

export const POST=async(req)=>{
    try{
        const data=await req.json();
        console.log(data);
        await mongooseConnect();
        const newuser=new User(data);
        await newuser.save();
        return new NextResponse(JSON.stringify({message:"the new user is created.",user:newuser}),{status:201});
    }
    catch(error){
            return new NextResponse(
                JSON.stringify({
                    message:"Error creating new User",
                    error,

                }),
                {
                    status:500,
                }
            );
    }
};

