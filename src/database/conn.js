const { MongoClient } = require('mongodb');
const config = require('../config');

const connectionString = `mongodb+srv://${config.mongoDB.userName}:${config.mongoDB.password}@cluster0.w1wkcra.mongodb.net/?retryWrites=true&w=majority`; //try to pick from config

const client = new MongoClient(connectionString);

const connectToDatabase = async () => {
  try {
    const conn = await client.connect();
    const db = conn.db(`${config.mongoDB.database}`);
    return db;
  } catch(e) {
    console.error(e);
  }
};

module.exports = {
  connectToDatabase,
}