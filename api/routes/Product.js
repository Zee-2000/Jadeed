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
//get the products by id
productRoute.get("products/id",
    AsyncHandler(async (req, res) => {
        const product = await Product.findById(req.params.id);
        if (product) {
            res.json(product);
        }
        else {
            res.status(404);
            throw new Error("Product isn't found");
        }
    })
);
module.exports = productRoute;