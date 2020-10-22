const Sale = require('../../models/Sale');

module.exports = {
    Query : {
        async getAllSales() {
            try{
                const sales = await Sale.find();
                return sales;
            }catch(err){
                throw new Error(err);
            }
        },//End of getAllSales()

        async getSaleById(parent, { id: id_to_search }, context, info){
            try{
                const sale = await Sale.findOne({ _id: id_to_search });
                console.log(sale._doc.items);
                return {
                    ...sale._doc,
                }
            }catch(err){
                throw new Error(err);
            }
        }
    },
    
    Mutation : {
        async addSale(parent, {
            inputSale : { items, storeLocation, couponUsed, purchasedMethod, customer}
        }, context, info){
            // addSale function body start
            const newSale = new Sale({
                storeLocation : storeLocation,
                couponUsed: couponUsed,
                purchasedMethod: purchasedMethod,
                customer: customer,
                items: items,
                saleDate : new Date().toISOString()
            });

            const result = await newSale.save();
            console.log(result);
            return {
                ...result._doc
            }
            // addSale function body end
        }
    }
}
