const express = require('express')
const router = express.Router()

const {
  getDepartments,
  getDeparmentByID,
  getDeparmentByName,
  createDepartment,
  deleteDepartment,
  updateDepartment
} = require('../controllers/department')

router.route('/')
  .get(getDepartments)
  .post(createDepartment)

router.route('/:id')
      .delete(deleteDepartment)
      .patch(updateDepartment)

router.route('/id/:id').get(getDeparmentByID)
router.route('/name/:name').get(getDeparmentByName)

module.exports = router
