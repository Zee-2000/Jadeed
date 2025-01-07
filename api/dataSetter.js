const router = require('express').Router();
const User = require('./model/Users');
const users = require('./data/User');
const product = require('./model/Products');
const products = require('./data/Products');
const AsyncHandler = require('express-async-handler')

router.post("/users", AsyncHandler(async (req, res) => {
    await User.deleteMany({});
    const UserSetter = await User.insertMany(users);
    res.send(UserSetter);
}));

router.post("/products", AsyncHandler(async (req, res) => {
    await product.deleteMany({});
    const ProductSetter = await product.insertMany(products);
    res.send(ProductSetter);


}));
module.exports = router;