const asyncHandler = require('../middlewares/async')

// @desc      Get all Departments
// @route     GET /api/v1/departments
// @access    Public
exports.getDepartments = asyncHandler(async (req, res, next) => {
  const data = await global.db.query('select * from Department')
  res.status(200).json({ data: data[0] })
  // res.status(200).json({ data })
})

// @desc      Get  department by id
// @route     GET /api/v1/departments/id/:id
// @access    Public
exports.getDeparmentByID = asyncHandler(async (req, res, next) => {
  const id = req.params.id
  const data = await global.db.query(
    `select * from Department where department_id=${id}`,
  )
  if (data && data[0].length === 0) {
    res.status(404).json({ message: `Department with id:${id} not found` })
    return
  }
  res.status(200).json({ data: data[0] })
})

// @desc      Get  department by name
// @route     GET /api/v1/departments/name/:name
// @access    Public
exports.getDeparmentByName = asyncHandler(async (req, res, next) => {
  const name = req.params.name

  global.db.query(
    `select * from Department where department_name='${name}'`,
    (err, data) => {
      res.status(200).json({ data })
    },
  )
})

// @desc      Create department
// @route     POST /api/v1/departments
// @access    Public
exports.createDepartment = asyncHandler(async (req, res, next) => {
  const { department_name, manager_id, location } = req.body

  const sql = `INSERT INTO Department (department_name, manager_id, location)
  VALUES ("${department_name}", ${manager_id}, "${location}" );`

  try {
    await global.db.query(sql)
    res.status(200).json({ message: 'department inserted sucessfully' })
  } catch (error) {
    res.status(500).json({ message: 'department not inserted' })
  }
})


// @desc      Delete department
// @route     DELETE /api/v1/departments/:id
// @access    Public
exports.deleteDepartment =  asyncHandler(async (req, res, next) => {
  const id = req.params.id
  try {
    await global.db.query(
      `DELETE FROM Department WHERE department_id = ${id};`,
    )
    res.status(200).json({ message: `Department with id: ${id} deleted successfully` })
    
  } catch (error) {
    res.status(404).json({ message: `Department not deleted` })
  }

})
