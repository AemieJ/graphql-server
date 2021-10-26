const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const expressGraphQL = require('express-graphql').graphqlHTTP
const { schema } = require('./schema/index')
const getErrorCode = require('./errors/getCode')
const resolver = require('./resolvers/index')

const app = express()
const PORT = 4000 || process.env.PORT
dotenv.config()

mongoose.connect(process.env.DB_CONNECT, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, () => console.log('Connected to mongodb'))

const root = resolver

app.use('/graphql', expressGraphQL({
  schema: schema,
  rootValue: root,
  graphiql: true,
  customFormatErrorFn: (err) => ({
    message: getErrorCode(err.message)
  })
}))

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
