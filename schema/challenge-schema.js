import mongoose from "mongoose";


const challengeSchema = new mongoose.Schema(
    {
        userOne: { type: mongoose.Schema.Types.ObjectId, ref:"User", required: true, unique: false},
        userOneUserName: {type:String, required: false, unique:false},
        userOnesProfilePhoto: {type: String, required: false, unique: false},
        userTwo: { type: mongoose.Schema.Types.ObjectId, ref:"User", required: true, unique: false},
        userTwoUserName: {type:String, required: false, unique:false},
        userTwosProfilePhoto: {type: String, required: false, unique: false},
        userOnePlayed: {type: Boolean, required: false, unique: false},
        userTwoPlayed: {type: Boolean, required: false, unique: false},
        game: {type: Array, required: true},
        userOneScore: { type: Number, required: false, unique: false },
        userTwoScore: { type: Number, required: false, unique: false },
        userTwoGems: { type: Number, required: false, unique: false },
        userOneGems: { type: Number, required: false, unique: false },
        name: { type: String, required: false, unique: false },
    },
    { collection: "challenges"}
);

export default challengeSchema;