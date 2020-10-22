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

    }
}
