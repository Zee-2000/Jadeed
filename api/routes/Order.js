const orderRoute = require("express").Router();
const AsyncHandler = require("express-async-handler");
const authentication = require("../middleware/Auth");



orderRoute.post("/order",
    authentication,
    AsyncHandler(async (req, res) => {
        const
            {
                orderItems,
                shippingAddress,
                paymentMethod,
                shippingPrice,
                taxPrice,
                totalPrice,
                price
            } = req.body;
        if (orderItems && orderItems.length === 0) {
            res.status(401);
            throw new Error("No orders found!");
        }
        else {
            const order = new Order({
                orderItems,
                shippingAddress,
                paymentMethod,
                shippingPrice,
                taxPrice,
                totalPrice,
                price,
                user: req.user.id
            })
            const createdOrder = await order.save();
            res.status(201).json(createdOrder);
        }
    }));
module.exports = orderRoute;