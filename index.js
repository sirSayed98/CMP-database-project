require('colors')
const express = require('express')
const app = express()
const connectDB = require('./config/db')
connectDB()
// Body parser
app.use(express.json())

// load Routers
const departmentRoutes = require('./routes/department')
const employeeRoutes = require('./routes/employee')

// Mount routers
app.use('/api/v1/department', departmentRoutes)
app.use('/api/v1/employee', employeeRoutes)

const PORT = process.env.APP_PORT || 3000

app.listen(PORT, console.log(`Server running on port ${PORT}`.bgBlue))
