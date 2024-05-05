const { Schema, models, model } = require("mongoose");

const UserSchema=new Schema({
    name:String,
    email:String,
    password:String,
});

export const User=models.User || model('User',UserSchema);