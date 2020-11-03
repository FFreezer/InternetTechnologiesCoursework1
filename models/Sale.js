const { model, Schema } = require('mongoose');

const saleSchema = new Schema({
    saleDate: String,
    items: [
        {
            _id: false,
            name: String,
            tags: [String],
            price: {
                type : Schema.Types.Decimal128,
                transform : v => v.toString()
            },
            quantity: Schema.Types.Number
        }
    ],
    storeLocation: String,
    customer: {
        _id: false,
        gender: String,
        age: Schema.Types.Number,
        email: String,
        satisfaction: Schema.Types.Number
    },
    couponUsed: Boolean,
    purchaseMethod: String,
},
{
    collection : 'sales'
}
);


module.exports = model("Sale", saleSchema);