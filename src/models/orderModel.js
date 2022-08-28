const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const orderSchema = new mongoose.Schema({
    userId: {
        type: ObjectId,
        ref: "user"
    },
    productId: {
        type: ObjectId,
        ref: "product"
    },
    amount: Number,
    isFreeAppUser: {
        type: Boolean,
        default: false
    },
    date: {
        type: Date,
        default: Date.now
    },

}, { timestamps: true });

module.exports = mongoose.model('order', orderSchema)
