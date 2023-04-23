import mongoose from "mongoose";

const likeSchema = new mongoose.Schema({

    user: { type: mongoose.Schema.Types.ObjectId, ref: "UsersModel", required: true },
    game: { type: mongoose.Schema.Types.ObjectId, ref: "gameModel", required: true }

}, {collection: "likes"});

export default likeSchema;