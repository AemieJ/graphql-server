const { buildSchema } = require('graphql')

const schema = buildSchema(`
    type Query {
        movie(title: String!): Movie
        movies(year: Int!): [Movie]
    },

    input InsertMovie {
        title: String!
        plot: String
        year: Int!
        type: String
    },
    type Mutation {
       insertMovie(input: InsertMovie!): Movie!
       updateMovie(title: String!, body: InsertMovie!): Movie!
    },
    type Movie {
        title: String
        plot: String
        year: Int
        type: String
    }
`)

module.exports = schema
