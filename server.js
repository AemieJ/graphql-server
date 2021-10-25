const express = require('express')
const expressGraphQL = require('express-graphql').graphqlHTTP
const movieSchema = require('./schema/movies')
const {
  getMovieByTitle,
  getMoviesByYear,
  insertMovie,
  updateMovieByTitle
} = require('./resolvers/movies')

const root = {
  movie: getMovieByTitle,
  movies: getMoviesByYear,
  insertMovie: insertMovie,
  updateMovie: updateMovieByTitle
}

// // Create an express server and a GraphQL endpoint
const app = express()
app.use('/graphql', expressGraphQL({
  schema: movieSchema,
  rootValue: root,
  graphiql: true
}))

app.listen(4000, () => console.log('Express GraphQL Server Now Running On localhost:4000/graphql'))
