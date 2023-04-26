import mongoose from "mongoose";


const profileSchema = new mongoose.Schema(
    {
            user: { type: mongoose.Schema.Types.ObjectId, ref:"User", required: true, unique: true},
            score: { type: Number, required: false, unique: false },
            gamesPlayed: { type: Number, required: false, unique: false },
            totalQuestions: { type: Number, required: false, unique: false },
            category: [
                    {
                            category: { type: String, required: false },
                            freq: { type: Number, required: false



                            }
                    }
            ],
            points: {type: Number, required: false, unique: false}
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