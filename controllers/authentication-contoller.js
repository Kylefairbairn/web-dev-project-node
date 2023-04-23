import * as usersDao from '../daos/user-dao.js';
import bcrypt from 'bcrypt'


const AuthenticationController = app => {
    const saltRounds = 10;
    let currentUser = null

    // const register = async (req, res) => {
    //     const user = req.body;
    //     const existingUser = await usersDao.findUserByUsername(user.handle);
    //     if (existingUser) {  // username not unique -> already existing
    //         res.sendStatus(403);
    //         return;
    //     } else {
    //         const currentUser = await usersDao.createUser(user);
    //         req.session['currentUser'] = currentUser;
    //         res.json(currentUser);
    //     }
    // };

    const register = async (req, res) => {
        const user = req.body;
        // const foundUser = users.find((user) => user.username === req.body.username);
        const foundUser = await usersDao.findUserByUsername(req.body.username);
        if (foundUser) {
            res.sendStatus(409);
        } else {
            // const newUser = { ...user, id: new Date().getTime() };
            const newUser = await usersDao.createUser(user);
            currentUser = newUser;
            // users.push(newUser);
            res.json(newUser);
        }
    };


    // const signup = async (req, res) => {
    //     const newUser = req.body;
    //     const password = newUser.password;
    //
    //     const hash = await bcrypt.hash(password, saltRounds);
    //     newUser.password = hash;
    //
    //     const existingUser = await usersDao
    //         .findUserByUsername(req.body.username);
    //     if (existingUser) {
    //         res.sendStatus(403);
    //         return;
    //     } else {
    //         const insertedUser = await usersDao
    //             .createUser(newUser);
    //         insertedUser.password = '';
    //         req.session['profile'] = insertedUser;
    //         res.json(insertedUser);
    //     }
    // }


    // const login = async (req, res) => {
    //     const credentials = req.body;
    //     const existingUser = await usersDao.findByCredentials(credentials);
    //     if (existingUser) {
    //         req.session['currentUser'] = existingUser;
    //         res.json(existingUser);
    //         return;
    //     } else {
    //         res.sendStatus(403);
    //     }
    // };

    const login = async (req, res) => {
        const user = req.body;
        const username = user.username;
        const password = user.password;
        const existingUser = await usersDao
            .findUserByUsername(username);
        if (existingUser) {
            req.session['currentUser'] = existingUser;
            res.json(existingUser);
            return;
        } else {
            res.sendStatus(403);
        }
    }

    // const login = async (req, res) => {
    //     const user = req.body;
    //     // const foundUser = users.find(
    //     //   (user) =>
    //     //     user.username === req.body.username &&
    //     //     user.password === req.body.password
    //     // );
    //     const foundUser = await usersDao.findByCredentials(
    //         req.body.username,
    //         req.body.password
    //     );
    //
    //     if (foundUser) {
    //         currentUser = foundUser;
    //         res.send(foundUser);
    //     } else {
    //         res.sendStatus(404);
    //     }
    // };

    const profile = async (req, res) => {
        const currentUser = req.session['currentUser']
        if (currentUser) {
            const currentProfile = await usersDao.findUserById(currentUser._id)
            res.json(currentProfile)
        } else {
            res.sendStatus(403)
        }
    };
    const logout = (req, res) => {
        req.session.destroy();
        res.sendStatus(200);
    };


    app.post("/api/users/login", login);
    //app.post("/api/auth/login", login);
    app.post("/api/users/profile", profile);
    app.post("/api/users/logout", logout);
    //app.post("/api/auth/signup", signup);
    app.post("/api/users/register", register);

}
export default AuthenticationController;