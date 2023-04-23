import * as profileDao from "../daos/profile-dao.js";

const ProfileController = (app) => {
    app.get("/api/profiles", findAllProfiles);
    app.get("/api/profiles/:pid", findProfileById);
    app.post("/api/profiles", createProfile);
    app.put("/api/profiles/:pid", updateProfile);
    app.delete("/api/profiles/:pid", deleteProfile);
    app.get("/api/profiles/user/:uid", findProfileByUserId);
};

const createProfile = async (req, res) => {
    const newProfile = req.body;
    const actualProfile = await profileDao.createProfile(newProfile);
    res.json(actualProfile);
};

const findAllProfiles = async (req, res) => {
    const profiles = await profileDao.findAllProfiles();
    res.json(profiles);
};

const findProfileById = async (req, res) => {
    const profileId = req.params["pid"];
    const profile = await profileDao.findProfileById(profileId);
    res.json(profile);
};

const findProfileByUserId = async (req, res) => {
    const userId = req.params["uid"];
    const profile = await profileDao.findProfileByUser(userId);
    res.json(profile);
};

const deleteProfile = async (req, res) => {
    const profileId = req.params["pid"];
    const profile = await profileDao.deleteProfile(profileId);
    res.json(profile);
};

const updateProfile = async (req, res) => {
    const profileId = req.params["pid"];
    const profileUpdates = req.body;
    const profile = await profileDao.updateProfile(profileId, profileUpdates);
    res.json(profile);
};

export default ProfileController;
