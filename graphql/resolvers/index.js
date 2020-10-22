const salesResolvers = require('./sales');


module.exports = {
    Query : {
        ...salesResolvers.Query
    },

    Mutation : {
        ...salesResolvers.Mutation
    }
}