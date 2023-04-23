import mongoose from "mongoose";
import gameSchema from "../schema/game-schema.js";

const gameModel = mongoose.model("gameModel", gameSchema);
export default gameModel;
