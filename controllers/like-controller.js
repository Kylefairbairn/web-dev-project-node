
import * as likeDao from "../daos/like-dao.js";

const LikeController = (app) => {
    app.post("/api/likes", likeGame);
    app.get("/api/likes/user/:uid", getLikesbyUser);
    app.delete("/api/likes/:lid", unLike);
};

const likeGame = async (req,res) => {
    const like = req.body;
    const likes = await likeDao.likeGame(like)
    res.json(likes)
};


const getLikesbyUser = async (req, res) => {
    const user = req.params["uid"];
    const usersLikes = await likeDao.getLikesbyUser(user);
    res.json(usersLikes);
};

const unLike = async (req, res) => {
    const likeId = req.params["lid"];
    const like = await likeDao.unLike(likeId);
    res.json(like);
};


export default LikeController;