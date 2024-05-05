const { Schema, models, model } = require("mongoose");

const UserSchema=new Schema({
    name:String,
    email:String,
    password:String,
<<<<<<< HEAD
    schedule: {
        mon: { type: [Schema.Types.Mixed], default: [] },
        tue: { type: [Schema.Types.Mixed], default: [] },
        wed: { type: [Schema.Types.Mixed], default: [] },
        thu: { type: [Schema.Types.Mixed], default: [] },
        fri: { type: [Schema.Types.Mixed], default: [] },
        sat: { type: [Schema.Types.Mixed], default: [] },
        sun: { type: [Schema.Types.Mixed], default: [] },
    },
=======
>>>>>>> e84c902 (half project commit)
});

export const User=models.User || model('User',UserSchema);