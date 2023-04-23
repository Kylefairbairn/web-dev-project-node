import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {type: String, required: true, default: `testusername${Date.now()}`, unique: true},
    password: {type: String, required: true, default: `testpassword${Date.now()}`},
    firstname: {type: String,required: false, unique: false},
    lastname: {type: String, required: false, unique: false},
    email: {type: String, required: true, unique: false},
    profilePhoto: {type: String, required: false, unique: false},
    biography: {type: String, required: false, unique: false},
    dateOfBirth: {type: Date, required: false, unique: false},
    gems: {type:Number, required: false, unique: false},
    role: {type: String, required: true, unique: false,
        enum: ['PERSONAL', 'PREMIUM', 'GROUPMEMBER']}
}, {collection: "users"});

export default userSchema;

