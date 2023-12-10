const asyncHandler = require('../middlewares/async')

// @desc      Get all Employees
// @route     GET /api/v1/employees
// @access    Public
exports.getEmployees = asyncHandler(async (req, res, next) => {
  const sql = 'select * from Employee'
  const data = await global.db.query(sql)
  res.status(200).json({ data: data[0] })
})


// @desc      Get  employee by id
// @route     GET /api/v1/employees/id/:id
// @access    Public
exports.getEmployeeByID = asyncHandler(async (req, res, next) => {
  const id = req.params.id
  const sql = `select * from Employee where employee_id=${id}`
  const data = await global.db.query(sql)
  if (data && data[0].length === 0) {
    res.status(404).json({ message: `Employee with id:${id} not found` })
    return
  }
  res.status(200).json({ data: data[0] })
})


// @desc      Create employee
// @route     POST /api/v1/employees
// @access    Public
exports.createEmployee = asyncHandler(async (req, res, next) => {
  const { employee_name, department_id, salary } = req.body

  const sql = `INSERT INTO Employee (employee_name, department_id, salary)
  VALUES ("${employee_name}", ${department_id}, ${salary} );`

  try {
    await global.db.query(sql)
    res.status(200).json({ message: 'employee inserted sucessfully' })
  } catch (error) {
    res.status(500).json({ message: 'employee not inserted' })
  }
})


// @desc      Update employee
// @route     Patch /api/v1/employees/:id
// @access    Public
exports.updateEmployee = asyncHandler(async (req, res, next) => {
  const id = req.params.id
  const { employee_name, department_id, salary } = req.body
  const sql = 
  `UPDATE Employee
      SET
          employee_name = '${employee_name}',
          department_id = ${department_id},
          salary = '${salary}'
      WHERE
      employee_id = ${id};`
  try {
    await global.db.query(sql)
    res
      .status(200)
      .json({ message: `Employee with id: ${id} updated successfully` })
  } catch (error) {
    res.status(404).json({ message: `Employee not updated` })
  }
})

// @desc      Delete Employee
// @route     Delete /api/v1/employees/:id
// @access    Public
exports.deleteEmployee = asyncHandler(async (req, res, next) => {
  const id = req.params.id
  const sql = `DELETE FROM Employee WHERE employee_id = ${id};`
  try {
    await global.db.query(sql)
    res
      .status(200)
      .json({ message: `Employee with id: ${id} deleted successfully` })
  } catch (error) {
    res.status(404).json({ message: `Employee not deleted` })
  }
})
