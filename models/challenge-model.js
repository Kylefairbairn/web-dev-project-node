import mongoose from "mongoose";
import challengeSchema from "../schema/challenge-schema.js";


const challengeModel = mongoose.model(
    'ChallengeModel', challengeSchema
);
export default challengeModel;