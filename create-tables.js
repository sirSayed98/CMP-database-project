require('dotenv').config()
require('colors')
const connectDB = require('./config/db')

const dbName = process.env.DB_NAME

const createDatabase = `CREATE DATABASE IF NOT EXISTS ${dbName};`

const useDatabase = `USE ${dbName};`

const createDepartment = `CREATE TABLE IF NOT EXISTS Department (
  department_id INT PRIMARY KEY AUTO_INCREMENT,
  department_name VARCHAR(255) NOT NULL,
  manager_id INT,
  location VARCHAR(255)
);
`
const createEmployee = `CREATE TABLE IF NOT EXISTS Employee (
  employee_id INT PRIMARY KEY AUTO_INCREMENT,
  employee_name VARCHAR(255) NOT NULL,
  department_id INT,
  salary DECIMAL(10, 2),
  FOREIGN KEY (department_id) REFERENCES Department(department_id)
);
`
const alterDepartment = `ALTER TABLE Department ADD FOREIGN KEY (manager_id) REFERENCES Employee(employee_id);`

const sqlQueries = [
  createDatabase,
  useDatabase,
  createDepartment,
  createEmployee,
  alterDepartment,
]

async function main() {
  await connectDB()
  try {
    sqlQueries.forEach(async query => {
      await global.db.query(query)
    })
    console.log('tables created successfully'.bgBlue)
  } catch (error) {
    console.log('there is an error while creating tables'.bgRed)
  }
}

main()
