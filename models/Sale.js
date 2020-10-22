const { model, Schema } = require('mongoose');

const saleSchema = new Schema({
    saleDate: String,
    items: [
        {
            name: String,
            tags: [String],
            price: Schema.Types.Decimal128,
            quantity: Schema.Types.Number
        }
    ],
    storeLocation: String,
    customer: {
        gender: String,
        age: Schema.Types.Number,
        email: String,
        satisfaction: Schema.Types.Number
    },
    couponUsed: Boolean,
    purchaseMethod: String,
});



module.exports = model("Sale", saleSchema);