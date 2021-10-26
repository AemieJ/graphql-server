const userMutation = require("./user")

const mutation = `
type Mutation {
    ${userMutation}
},
`

module.exports = mutation