import express from "express"
import cors from 'cors'
import * as dotenv from'dotenv'
import mongoose from "mongoose";
import session from "express-session"
import UsersController from "./controllers/user-controller.js";
import GameController from "./controllers/game-controller.js";
import FriendController from "./controllers/friend-controller.js";
import AuthenticationController from "./controllers/authentication-contoller.js";
import ProfileController from "./controllers/profile-controller.js";
import LikeController from "./controllers/like-controller.js";
import ChallengeController from "./controllers/challenge-controller.js";
dotenv.config()

const app = express()


// app.use(cors({
//     credentials: true,
//     origin: 'http://localhost:3000'
// }))


app.use(cors({
    credentials: true,
    origin: true
}))

let sess = {
    secret: process.env.SECRET,
    saveUninitialized: true,
    resave: true,
    cookie: {
        secure: false
    }
}


if(process.env.ENV === 'PRODUCTION'){
    app.set('trust proxy', 1)
    sess.cookie.secure = true
}

app.use(session(sess))
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/trivia-db');

UsersController(app);
ChallengeController(app);
LikeController(app);
GameController(app);
FriendController(app);
AuthenticationController(app)
ProfileController(app)

app.listen(4000)

const PORT = process.env.PORT || 4000