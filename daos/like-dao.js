import likeModel from "../models/like-model.js";


export const likeGame = async (like) => await likeModel.create(like);

export const getLikesbyUser = async (uid) => {
    const response = await likeModel.find({user: uid})
    return response
}

export const unLike = async (lid) => {
    await likeModel.deleteOne({_id:lid})
}


