import mongoose from "mongoose";
import likeSchema from "../schema/like-schema.js";

const likeModel = mongoose.model("LikeModel", likeSchema);

export default likeModel;
