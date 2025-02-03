const express = require('express');
const dotenv = require('dotenv');
const app = express();
//const products = require("./data/Products");
const mongoose = require('mongoose');
const dataSetter = require('./dataSetter');
const userRoute = require('./routes/User');
const productRoute = require("./routes/Product");
const orderRoute = require('./routes/Order');
const PORT = process.env.PORT;
const cors = require('cors');
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
app.use(cors())
app.use('/api/users', userRoute)

//routes for products
app.use("/api/products", productRoute);

//route for order
app.use("/api/orders", orderRoute)

//Listen to the port
app.listen(PORT || 3000,()=>
{
 console.log("App is running")   
});
