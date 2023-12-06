const mysql = require('mysql2/promise')
require('colors')
require('dotenv').config()

const connectDB = async () => {
  try {
     const db = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      port: process.env.DB_PORT,
    })
    
    console.log(`database connected sucessfully`.bgGreen)
 
    global.db = db;


  } catch (error) {
    console.log('an error occured while connecting to Database'.bgRed)
    console.log(error);
  }
}

module.exports = connectDB;
