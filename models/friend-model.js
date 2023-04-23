import mongoose from "mongoose";
import friendSchema from "../schema/friend-schema.js";


const friendModel = mongoose.model(
    'FriendsModel', friendSchema
);
export default friendModel;