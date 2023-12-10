const express = require('express')
const router = express.Router()

const {
  getEmployees,
  getEmployeeByID,
  createEmployee,
  deleteEmployee,
  updateEmployee
} = require('../controllers/employee')

router.route('/')
  .get(getEmployees)
  .post(createEmployee)

router.route('/:id')
      .delete(deleteEmployee)
      .patch(updateEmployee)

router.route('/id/:id').get(getEmployeeByID)


module.exports = router
