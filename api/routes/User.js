const userRoute = require('express').Router();
const AsyncHandler = require('express-async-handler');
const User = require('../model/Users')

userRoute.post("/login", 
    AsyncHandler(async(req, res)=> {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user && (await user.matchPassword(password))) {
        res.json(
            {
                _id: user.id,
                name: user.name,
                isAdmin: user.isAdmin,
                token: null,
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
module.exports = userRoute;
