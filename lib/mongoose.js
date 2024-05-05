import mongoose from "mongoose";

export function mongooseConnect(){
    const uri=process.env.MONGODB_URI;
    if(mongoose.connection.readyState===1){
<<<<<<< HEAD
        console.log("Mongodb Connection successful")
=======
>>>>>>> e84c902 (half project commit)
        return mongoose.connection.asPromise();
    }
    else{
        return mongoose.connect(uri);
    }
};