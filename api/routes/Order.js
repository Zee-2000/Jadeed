const orderRoute = require("express").Router();
const AsyncHandler = require("express-async-handler");
const authentication = require("../middleware/Auth");
const Order = require("../model/Order")


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

//Order details
orderRoute.get("/:id",
    authentication,
    AsyncHandler(async (req, res) => {
        const order = await Order.findById(req.params.id).populate(
            "user",
            "name email"
        );
        if (order) {
            res.status(201).json(order);
        }
        else {
            res.status(401);
            throw new Error("Order not found")
        }
    }));

//Order Payment
orderRoute.put("/:id/payment",
    authentication,
    AsyncHandler(async (req, res) => {
        const order = await Order.findById(req.params.id);
        if (order) {
            isPaid = true;
            order.paidAt = Date.now()
            order.paymentResult =
            {
                id: req.body.id,
                status: req.body.status,
                emailAddress: req.body.emailAddress,
                updatedTime: req.body.updatedTime
            }
            const createdOrder = await order.save();
            res.status(201).json(createdOrder);
        }
        else {
            res.status(404);
            throw new Error("No Orders found!")
        }
    }));
//Order List
orderRoute.get("/",
    authentication,
    AsyncHandler(async (req, res) => {
        const orders = await Order.find({ user: req.user.id }).sort({ _id: -1 });
        if (orders) {
            res.status(200).json(order);
        }
        else {
            res.status(404);
            throw new Error("No Orders is listed")
        }
    }
    ));
module.exports = orderRoute;