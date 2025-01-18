const userRoute = require('express').Router();
const AsyncHandler = require('express-async-handler');
const User = require('../model/Users')
const generateToken = require('../generateToken');
const authentication = require('../middleware/Auth');

userRoute.post("/login",
    AsyncHandler(async (req, res) => {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (user && (await user.matchPassword(password))) {
            res.status(201).json(
                {
                    id: user.id,
                    name: user.name,
                    isAdmin: user.isAdmin,
                    token: generateToken(user.id),
                    createdAt: user.createdAt
                }
            )
        }
        else {
            res.status(401);
            throw new Error("Invalid Email or password, Try Again!");
        }
    })
);

userRoute.post("/",
    AsyncHandler(async (req, res) => {
        const { name, age, email, password } = req.body;
        const userExist = await User.findOne({ email });
        if (userExist) {
            res.status(400);
            throw new Error("User Already exists");
        }
        else {
            const user = await User.create({ name, age, email, password });
            if (user) {
                res.status(201).json(
                    {
                        _id: user.id,
                        name: user.name,
                        isAdmin: user.isAdmin,
                        token: null,
                        createdAt: user.createdAt
                    }
                )
            }
        }

    })
);
//profile data

userRoute.get("/profile",
    authentication,
    AsyncHandler(async (req, res) => {
        const user = await User.findById(req.user.id);
        if (user) {
            res.json(
                {
                    id: user.id,
                    name: user.name,
                    isAdmin: user.isAdmin,
                    email: user.email,
                    createdAt: user.createdAt
                }
            )
        }
        else {
            res.status(404);
            throw new Error("User isn't found")
        }
    }));
module.exports = userRoute;
