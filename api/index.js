const express = require('express');
const dotenv = require('dotenv');
const app = express();
//const products = require("./data/Products");
const mongoose = require('mongoose');
const dataSetter = require('./dataSetter');
const userRoute = require('./routes/User');
const productRoute = require("./routes/Product");
const PORT = process.env.PORT
dotenv.config();

//test route
app.get("/", (req, res)=>
{
    res.send("Nice")
});

//Connect to the mongo database


mongoose.connect(process.env.MongoDB).then(()=>console.log('db connected')).then((err)=>{
    err
});
//database setter
app.use('/api/seed', dataSetter);

//routes for users
app.use(express.json());
app.use('/api/users', userRoute)

//routes for products
app.use("/api/products", productRoute);

//Listen to the port
app.listen(PORT || 3000,()=>
{
 console.log("App is running")   
});







//module.exports = products;
//test api products
/*app.get("/api/products", (req, res)=>
{
    res.json(products);
});
//Find the id of the item
app.get("/api/products/ :id", (req, res)=>
{
    const product = products.find((product)=>product.id === req.params.id)
    res.json(product)
});*/