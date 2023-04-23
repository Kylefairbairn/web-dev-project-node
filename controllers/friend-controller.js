import * as friendDao from "../daos/friend-dao.js";

const FriendController = (app) => {
    app.post("/api/friends", createFriend);
    app.get("/api/friends", findAllFriends);
    app.get("/api/friends/:fid", findFriendByFid);
    app.get("/api/friends/users/:uid", findFriendsByUserID)
    app.delete("/api/friends/:fid", deleteFriend);
    app.get("/api/friends/one/:username", findFriendByUsername);
};

const findFriendsByUserID = async (req,res) => {
    const uid = req.params["uid"]
    const friends = await friendDao.findFriendsByUserID(uid)
    res.json(friends)
};


const createFriend = async (req, res) => {
    const friend = req.body;
    const friendship = await friendDao.createFriend(friend);
    res.json(friendship);
};

const findAllFriends = async (req, res) => {
    const friends = await friendDao.findAllFriends();
    res.json(friends);
};

const findFriendByFid = async (req, res) => {
    const friendId = req.params["fid"];
    const friend = await friendDao.findFriendByFid(friendId);
    res.json(friend);
};

const findFriendByUsername = async (req, res) => {
    const name = req.params["username"];
    const friend = await friendDao.findFriendByUsername(name);
    res.json(friend);
};

const deleteFriend = async (req, res) => {
    const friendId = req.params["fid"];
    const friend = await friendDao.deleteFriend(friendId);
    res.json(friend);
};


export default FriendController;
