const { MongoClient } = require('mongodb')
const uri = require('../config/mongo')

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const dbName = 'sample_mflix'
const collectionName = 'movies'

const getMovieByTitle = async function (args) {
  const title = args.title
  let data

  try {
    await client.connect()
    const collection = client.db(dbName).collection(collectionName)
    data = await collection.findOne({
      $or: [
        { title: title }
      ]
    })
  } catch (err) {
    data = { message: err }
  } finally {
    await client.close()
  }
  return data
}

const getMoviesByYear = async function (args) {
  const yearMentioned = args.year
  let data
  try {
    await client.connect()
    const collection = client.db(dbName).collection(collectionName)
    data = await collection.find({
      year: { $gt: yearMentioned }
    }).limit(5).toArray()
  } catch (err) {
    data = { message: err }
  } finally {
    await client.close()
  }
  return data
}

const insertMovie = async function (args) {
  let data = args.input
  try {
    await client.connect()
    const collection = client.db(dbName).collection(collectionName)
    await collection.insertOne(args.input)

    data = await getMovieByTitle({ title: data.title })
  } catch (err) {
    data = { message: err }
  } finally {
    await client.close()
  }
  return data
}

const updateMovieByTitle = async function ({ title, body }) {
  let data = body
  try {
    await client.connect()
    const collection = client.db(dbName).collection(collectionName)
    await collection.findOneAndUpdate({ title: title }, {
      $set: body
    })
    data = await getMovieByTitle({ title: title })
  } catch (err) {
    data = { message: err }
  } finally {
    await client.close()
  }
  return data
}

module.exports = {
  getMovieByTitle,
  getMoviesByYear,
  insertMovie,
  updateMovieByTitle
}
