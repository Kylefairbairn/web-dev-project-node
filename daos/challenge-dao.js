import challengeModel from "../models/challenge-model.js";
import * as userDao from "./user-dao.js";


export const createChallenge = async (challenge) => await challengeModel.create(challenge);

export const findAllChallenges = async () => await challengeModel.find();

export const findChallengerOneByUserId = async (uid) => {
    const user = await userDao.findUserById(uid);
    return await challengeModel.find({userOne: user}).exec();
}
export const findChallengerTwoByUserId = async (uid) => {
    const user = await userDao.findUserById(uid);
    return await challengeModel.find({userTwo: user}).exec();
}

export const findChallengeById = async (cid) =>
    await challengeModel.findById(cid);

export const findChallengeByName = async (name) =>
    await challengeModel.where("name").equals(name)

export const deleteChallenge = async (cid) =>
    await challengeModel.deleteOne({ _id: cid });

export const updateChallenge = async (cid, gameUpdates) =>
    await challengeModel.updateOne({ _id: cid }, { $set: gameUpdates });