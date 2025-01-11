const mongoose = require('mongoose');

const orderItemsSchema = new mongoose.Schema({
    name: { type: String, required: true, default: 0 },
    price: { type: Number, required: true, default: 0 },
    quantity: { type: Number, required: true, default: 0 },
    image: { type: String, required: true, default: 0 },
    products: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "Products" },
});

const orderSchema = new mongoose.Schema(
    {
        user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
        orderItems: [orderItemsSchema],
        shippingAddress: {
            address: { type: String, required: true },
            postalCode: { type: String, required: true },
            city: { type: String, required: true },
            country: { type: String, required: true },
        },
        paymentMethod: { type: String, required: true, default: "PayPal" },

        paymentResult: {
            id: { type: String },
            status: { type: String },
            emailAddress: { type: String },
            updatedTime: { type: String },
        },
        taxPrice: { type: Number, requied: true, default: 0.0 },
        shippingPrice: { type: Number, required: true, deafult: 0.0 },
        totalPrice: { type: Number, required: true, default: 0.0 },
        isPaid: { type: Boolean, required: true, default: false },
        paidAt: { type: Date },
        isDelivered: { type: Boolean, required: true, default: false },
        deliveredAt: { type: Date, required: true, default: false },
        refund: { type: Number, required: true, default: false },
        refundDate: { type: Date, required: true, deafult: false },
        tiemstamps:{createdAt: 'createdAt', updatedAt : 'updatedAt', required : true},
    }
);

module.exports = mongoose.model(orderSchema, "Order");
