import mongoose from "mongoose";


const gameSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref:"User", required: true, unique: false},
    game: {type: Array, required: true},
    username: {type: String, required: false, unique: false},
    score: { type: Number, required: false, unique: false },
    name: { type: String, required: false, unique: false },
    totalQuestions: { type: Number, required: false, unique: false },
    category: {type: String, required: false, unique: false},
    points: {type: Number, required: false, unique: false}
  },
  { collection: "games" }
);

export default gameSchema;