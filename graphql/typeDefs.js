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
    
    type Query {
        getAllSales: [Sale]
        getSaleById(id: ID!) : Sale
    }

`;