const mongoose = require("mongoose");
require("dotenv").config();

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;

const conn = async () => {
  try {
    const dbConn = await mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@cluster0.j1rpmna.mongodb.net/?retryWrites=true&w=majority`);
    console.log("banco conectado");
    return dbConn;
  } catch (error) {
    console.log(error);
  }
}

conn()

module.exports = conn;