const { buildSchema } = require('graphql')

const schema = buildSchema(`
    type Query {
        user(email: String!): User
    },

    input RegisterUser {
        name: String!
        email: String!
        password: String!
    },

    input LoginUser {
        email: String!
        password: String!
    },

    input UpdateUser {
        name: String
    }

    type Mutation {
       registerUser(body: RegisterUser!): User!
       updateUserInfo(email: String!, body: UpdateUser!, accessToken: String!): UpdateObject!
       loginUser(body: LoginUser!): Token!
    },

    type TokenObject {
        token: String!
        expires: Int!
    },
    type UpdateObject {
        name: String
        email: String
        accessToken: TokenObject
    },
    type Token {
        accessToken: TokenObject!
        refreshToken: TokenObject!
    },

    type User {
        name: String!
        email: String!
    }
`)

module.exports = schema
