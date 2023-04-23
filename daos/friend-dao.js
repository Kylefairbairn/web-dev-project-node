import friendModel from "../models/friend-model.js";
import userModel from "../models/user-model.js";
import mongoose from "mongoose";


export const createFriend = async (friend) => await friendModel.create(friend);

export const findAllFriends = async () => await friendModel.find();

export const findFriendByFid = async (fid) =>
    await friendModel.findById(fid);

export const findFriendsByUserID = async (uid) => {
    const friends = await friendModel.find({ user: uid})
    return friends;
}

// export const findFriendsByUserID = async (uid) => {
//         const friends = await friendModel.find({ user: new mongoose.Types.ObjectId(uid) })
//             .populate('user', ['username'])
//             .populate('friend', ['username']);
//         return friends;
//
// }

export const findFriendByUsername = async (username) => {
    const user = await userModel.findOne({ username: username }).exec();
    console.log(user._id)
    const friends = await friendModel.find({ user: user._id })
        .populate({ path: "friend", select: "username" })
        .exec();
    return friends;
};



// export const findFriendByUsername = async (username) =>
//     await friendModel.findOne({ username: username });


// export const findFriendByUsername = async (username) =>
//     await friendModel.find({})
//         .populate({
//             path: 'User',
//             match: { username: username }
//         })
//         .populate({
//             path: 'friend',
//             match: { username: username }
//         })
//         .exec();



export const deleteFriend = async (fid) =>
    await friendModel.deleteOne({ _id: fid });

