const productRoute = require("express").Router();
const AsyncHandler = require("express-async-handler");
const Product = require("../model/Products");

//get all the products from database

productRoute.get("/products",
    AsyncHandler(async (req, res) => {
        const product = await Product.find({});
        res.json(product);
    })
);
module.exports = productRoute;