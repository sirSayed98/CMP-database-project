const empIdInput = document.getElementById('emp-id')
const empNameInput = document.getElementById('emp-name')
const empDepartmentInput = document.getElementById('emp-department')
const empSalaryInput = document.getElementById('emp-salary')
const createBtn = document.getElementById('create-emp-btn')
const backBtn = document.getElementById('back-btn')

createBtn.addEventListener('click', async e => {
  e.preventDefault()
  try {
    await axios.post(
      `http://localhost:3000/api/v1/employee`,
      {
        employee_name: empNameInput.value,
        department_id: empDepartmentInput.value * 1,
        salary: empSalaryInput.value * 1,
      },
    )
    alert('Employee created successfully')
    backBtn.click()
  } catch (error) {
    alert('An error occured while creating employee')
    console.log(error)
  }
})
