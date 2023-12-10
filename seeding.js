require('dotenv').config()
const connectDB = require('./config/db')

const seedDepartment = `
INSERT INTO Department (department_name, location) VALUES
('Sales', 'New York'),
( 'Marketing', 'San Francisco'),
( 'IT',  'Los Angeles')
`
const seedEmployee = `
INSERT INTO Employee (employee_name, department_id, salary) VALUES
('John Smith', 1, 75000),
('Alice Johnson', 2, 80000),
('Bob Williams', 3, 90000),
('Sara Davis', 1, 70000),
('Mike Brown', 2, 85000),
('Emily White', 3, 95000),
('David Miller', 1, 72000),
('Olivia Wilson', 2, 78000),
('Daniel Lee', 3, 92000),
('Sophia Hall', 1, 73000);
`

const updateDepartment1 = `
UPDATE Department
SET manager_id = 1 
WHERE department_id = 1; `

const updateDepartment2 = `
UPDATE Department
SET manager_id = 2 
WHERE department_id = 2; `

const updateDepartment3 = `
UPDATE Department
SET manager_id = 3 
WHERE department_id = 3; `

const sqlQueries = [
  seedDepartment,
  seedEmployee,
  updateDepartment1,
  updateDepartment2,
  updateDepartment3,
]

async function main() {
  await connectDB()
  try {
    sqlQueries.forEach(async query => {
      await global.db.query(query)
    })
    console.log('seeding success'.bgBlue)
  } catch (error) {
    console.log('seeding failed'.bgRed)
  }
}

main()
