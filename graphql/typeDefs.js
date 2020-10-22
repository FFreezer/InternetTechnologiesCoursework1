const { gql } = require('apollo-server-express');

module.exports = gql`
    type Sale{
        id: ID
        saleDate: String
        storeLocation: String
        couponUsed: Boolean
        purchaseMethod: String
        items: [Item]
        customer: Customer
    }

    type Item {
        name: String
        tags: [String]
        price: String
        quantity: Int
    }

    type Customer {
        gender: String
        age: Int
        email: String
        satisfaction: Int
    }

    input SaleInput {
        storeLocation: String,
        couponUsed: Boolean,
        purchaseMethod: String
        items: [ItemInput]
        customer: CustomerInput
    }

    input CustomerInput {
        gender: String
        age: Int
        email: String
        satisfaction: Int
    }

    input ItemInput {
        name: String,
        tags: [String],
        price: Float,
        quantity: Int
    }
    
    type Query {
        getAllSales: [Sale]
        getSaleById(id: ID!) : Sale
    }

    type Mutation {
        addSale(inputSale: SaleInput) : Sale
    }

`;