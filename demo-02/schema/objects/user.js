const userObj = /* GRAPH QL */`
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
},

type ForgotRes {
    name: String!
    email: String!
    message: String!
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
},`

module.exports = userObj