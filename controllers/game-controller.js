import * as gameDao from "../daos/game-dao.js";

const GameController = (app) => {
  app.post("/api/game", createGame);
  app.get("/api/game", findAllGames);
  app.get("/api/game/:gid", findGameById);
  app.put("/api/game/:gid", updateGame);
  app.delete("/api/game/:gid", deleteGame);
  app.get("/api/game/one/:gid/:name", findGameByName);
  app.get("/api/game/user/:uid", findGamesByUserId);
};

const findGamesByUserId = async (req, res) => {
  console.log("findGamesByUserId")
  const uid = req.params["uid"];
  const games = await gameDao.findGamesByUserId(uid)
  res.json(games)
};


const createGame = async (req, res) => {
  const game = req.body;
  const actualGame = await gameDao.createGame(game);
  res.json(actualGame);
};

const findAllGames = async (req, res) => {
  const games = await gameDao.findAllGames();
  res.json(games);
};

const findGameById = async (req, res) => {
  const gameId = req.params["gid"];
  const game = await gameDao.findGameById(gameId);
  res.json(game);
};

const findGameByName = async (req, res) => {
  console.log("hello")
  const name = req.params["name"];
  const game = await gameDao.findUserByName(name);
  res.json(game);
};

const deleteGame = async (req, res) => {
  const gameId = req.params["gid"];
  const game = await gameDao.deleteGame(gameId);
  res.json(game);
};

const updateGame = async (req, res) => {
  const gameId = req.params["gid"];
  const gameUpdates = req.body;
  const game = await gameDao.updateGame(gameId, gameUpdates);
  res.json(game);
};

export default GameController;
