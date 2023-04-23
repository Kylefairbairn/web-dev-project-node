import mongoose from "mongoose";

const friendSchema = new mongoose.Schema({

    user: { type: mongoose.Schema.Types.ObjectId, ref: "UsersModel", required: true },
    friend: { type: mongoose.Schema.Types.ObjectId, ref: "UsersModel", required: true }

}, {collection: "friends"});

export default friendSchema;
