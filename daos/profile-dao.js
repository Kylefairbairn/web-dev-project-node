
import profileModel from "../models/profile-model.js";


export const createProfile = async (profile) => await profileModel.create(profile);

export const findAllProfiles = async () => await profileModel.find();

export const findProfileById = async (pid) =>
    await profileModel.findById(pid);

export const findProfileByUser = async (user) =>
    await profileModel.findOne({ user });

export const deleteProfile = async (pid) =>
    await profileModel.deleteOne({ _id: pid });

export const updateProfile = async (pid, profileUpdates) =>
    await profileModel.updateOne({ _id: pid }, { $set: profileUpdates });

export const addCategoryToProfile = async (pid, category) =>
    await profileModel.updateOne({ _id: pid }, { $set: { category } });



