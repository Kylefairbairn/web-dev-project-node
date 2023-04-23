import gameModel from "../models/game-model.js";
import userModel from "../models/user-model.js"
import {findUserById} from "./user-dao.js";
import * as userDao from "./user-dao.js"
import usersModel from "../models/user-model.js";

export const createGame = async (game) => await gameModel.create(game);

export const findAllGames = async () => await gameModel.find();

export const findGamesByUserId = async (uid) => {
    const user = await userDao.findUserById(uid);
    console.log(user)
    return await gameModel.find({user: user}).exec();
}

export const findGameById = async (uid) =>
    await gameModel.findById(uid);

// game by name
export const findUserByName = async (name) =>
    await gameModel.where("name").equals(name)
    //await gameModel.findOne({ name: name });

export const deleteGame = async (gid) =>
    await gameModel.deleteOne({ _id: gid });

export const updateGame = async (gid, gameUpdates) =>
    await gameModel.updateOne({ _id: gid }, { $set: gameUpdates });
