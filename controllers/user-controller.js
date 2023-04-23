import * as usersDao from "../daos/user-dao.js";

const UserController = (app) => {
  app.get("/api/users", findAllUsers);
  app.get("/api/users/:uid", findUserById);
  app.post("/api/users", createUser);
  app.put("/api/users/:uid", updateUser);
  app.delete("/api/users/:uid", deleteUser);
  app.get("/api/users/username/:username", findUserByUsername);
  app.get('/api/users/credentials/users/:username/:password', findByCredentials)
};

const createUser = async (req, res) => {
  const newUser = req.body;
  const actualUser = await usersDao.createUser(newUser);
  res.json(actualUser);
};

const findAllUsers = async (req, res) => {
  const users = await usersDao.findAllUsers();
  res.json(users);
};

const findUserById = async (req, res) => {
  const userId = req.params["uid"];
  const user = await usersDao.findUserById(userId);
  res.json(user);
};

const findUserByUsername = async (req, res) => {
  const username = req.params["username"];
  const user = await usersDao.findUserByUsername(username);
  res.json(user);
};


const deleteUser = async (req, res) => {
  const userId = req.params["uid"];
  const user = await usersDao.deleteUser(userId);
  res.json(user);
};

const updateUser = async (req, res) => {
  const userId = req.params["uid"];
  const userUpdates = req.body;
  const user = await usersDao.updateUser(userId, userUpdates);
  res.json(user);
};

const findByCredentials = async (req,res) => {
  const username = req.params["username"]
  const password = req.params["password"]
  const user = await usersDao.findByCredentials(username,password)
  res.json(user)
}

export default UserController;
