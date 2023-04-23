import usersModel from "../models/user-model.js";

export const createUser = async (user) => await usersModel.create(user);

export const findAllUsers = async () => await usersModel.find();

export const findUserById = async (uid) =>
  await usersModel.findById(uid, { password: false });

export const findUserByUsername = async (username) =>
  await usersModel.findOne({username}, { password: false });

export const deleteUser = async (uid) =>
  await usersModel.deleteOne({ _id: uid });

export const updateUser = async (uid, userUpdates) =>
  await usersModel.updateOne({ _id: uid }, { $set: userUpdates });

export const findByCredentials = async ({username, password}) => await usersModel
    .findOne({username, password}, {password: false});