require('dotenv').config()
require('colors')
const connectDB = require('./config/db')

const dbName = process.env.DB_NAME

const useDatabase = `USE ${dbName};`
const disableForeignKeys = `SET FOREIGN_KEY_CHECKS=0;`
const deleteTableDepartment = `Drop table Department`
const deleteTableEmployee = `Drop table Employee`

const sqlQueries = [
  useDatabase,
  disableForeignKeys,
  deleteTableDepartment,
  deleteTableEmployee,
]

async function main() {
  await connectDB()
  try {
    sqlQueries.forEach(async query => {
      await global.db.query(query)
    })
    console.log('tables deleted successfully'.bgBlue)
  } catch (error) {
    console.log('there is an error while deleting tables'.bgRed)
  }
}

main()
