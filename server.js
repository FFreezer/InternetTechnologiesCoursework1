const express = require('express');
const { ApolloServer , gql } = require('apollo-server-express');
const mongoose = require('mongoose');

const resolvers = require('./graphql/resolvers');
const typeDefs = require('./graphql/typeDefs');

/**
 * Normally wouldn't keep this here but its a tutorial so here we are
 */
const db_con_string = "mongodb+srv://admin:cSPAuqks86TRjBLW@honscluster.n2va8.mongodb.net/sample_supplies?retryWrites=true&w=majority"

const PORT = process.env.PORT || 8080;

const apollo_server = new ApolloServer({
    typeDefs,
    resolvers
});

const app = express();
apollo_server.applyMiddleware({ app });


mongoose.connect(db_con_string, { useNewUrlParser : true })
    .then(() => {
        console.log("MongoDB Connected");
        return app.listen({ port : PORT })
    })
    .then((res) => {
        console.log(`Application is listening on port ${PORT}. Browse to http://localhost:${PORT}${apollo_server.graphqlPath}`)
    })
    .catch((err) => {
        console.log(err)
    });