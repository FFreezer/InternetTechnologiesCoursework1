const Sale = require('../../models/Sale');

module.exports = {
    Query : {
        async getAllSales() {
            try{
                const sales = await Sale.find();
                const sales_json = sales.map(element => element.toJSON());
                return sales_json;
            }catch(err){
                throw new Error(err);
            }
        },

        async getSaleById(parent, { id: id_to_search }, context, info){
            try{
                const sale = await Sale.findOne({ _id: id_to_search });
                return {
                    ...sale.toJSON(),
                }
            }catch(err){
                throw new Error(err);
            }
        },

        async getSaleByCustomerEmail(parent, args, context, info){
            try{
                const { email : email } = args;
                const sale = await Sale.findOne( { "customer.email" : email });
                const sale_json = sale.toJSON();
                return {
                    ...sale_json
                }
            }catch(err){
                throw new Error(err);
            }
        }
    },
    
    Mutation : {
        async addSale(parent, {
            inputSale : { items, storeLocation, couponUsed, purchaseMethod, customer}
        }, context, info){
            // addSale function body start
            const newSale = new Sale({
                storeLocation : storeLocation,
                couponUsed: couponUsed,
                purchaseMethod: purchaseMethod,
                customer: customer,
                items: items,
                saleDate : new Date().toISOString()
            });

            const result = await newSale.save();
            return {
                ...result.toJSON()
            }
            // addSale function body end
        }
    }
}
