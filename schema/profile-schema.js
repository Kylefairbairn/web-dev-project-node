import mongoose from "mongoose";


const profileSchema = new mongoose.Schema(
    {
            user: { type: mongoose.Schema.Types.ObjectId, ref:"User", required: true, unique: true},
            score: { type: Number, required: true, unique: false },
            gamesPlayed: { type: Number, required: true, unique: false },
            totalQuestions: { type: Number, required: true, unique: false },
            category: [
                    {
                            category: { type: String, required: true },
                            freq: { type: Number, required: true }
                    }
            ],
            points: {type: Number, required: true, unique: false}
    },
    { collection: "profile"}
);

export default profileSchema;

// category: [
//     {
//         category: { type: String, required: true },
//         freq: { type: Number, required: true }
//     }
// ],