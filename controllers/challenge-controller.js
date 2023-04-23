import * as challengeDao from "../daos/challenge-dao.js"

const ChallengeController = (app) => {
    app.post("/api/challenges", createChallenge);
    app.get("/api/challenges", findAllChallenges);
    app.get("/api/challenges/user/one/:uid", findChallengerOneByUserId);
    app.get("/api/challenges/user/two/:uid", findChallengerTwoByUserId);
    app.put("/api/challenges/:cid", updateChallenge);
    app.get("/api/challenges/:cid", findChallengeById);
    app.get("/api/challenges/username/:username", findChallengeByName);
    app.delete("/api/challenges/:cid", deleteChallenge);
}

const createChallenge = async (req, res) => {
    const challenge = req.body;
    const challenges = await challengeDao.createChallenge(challenge)
    res.json(challenges)
};


const findAllChallenges = async (req, res) => {
    const challenges = await challengeDao.findAllChallenges();
    res.json(challenges);
};

const findChallengerOneByUserId = async (req, res) => {
    const userOne = res.params["uid"]
    const challenger = await challengeDao.findChallengerOneByUserId(userOne);
    res.json(challenger);
};


const findChallengerTwoByUserId = async (req, res) => {
    const userTwo = res.params["uid"]
    const challenger = await challengeDao.findChallengerTwoByUserId(userTwo);
    res.json(challenger);
};

const findChallengeByName = async (req, res) => {
    const userName = req.params["username"];
    const challenge = await challengeDao.findChallengeByName(userName);
    res.json(challenge);
};

const findChallengeById = async (req, res) => {
    const challengeID = req.params["cid"];
    const challenge = await challengeDao.findChallengeById(challengeID);
    res.json(challenge);
};

const deleteChallenge = async (req, res) => {
    const challengeID = req.params["cid"];
    const challenge = await deleteChallenge.deleteGame(challengeID);
    res.json(challenge);
};

const updateChallenge = async (req, res) => {
    const challengeID = req.params["cid"];
    const challengeUpdates = req.body;
    const challenge = await challengeDao.updateChallenge(challengeID, challengeUpdates);
    res.json(challenge);
};

export default ChallengeController;
