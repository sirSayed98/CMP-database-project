const empIdInput = document.getElementById('emp-id')
const empNameInput = document.getElementById('emp-name')
const empDepartmentInput = document.getElementById('emp-department')
const empSalaryInput = document.getElementById('emp-salary')
const submitBtn = document.getElementById('edit-emp-btn')
const backBtn = document.getElementById("back-btn")

document.addEventListener('DOMContentLoaded', event => {
  const queryString = window.location.search
  const urlParams = new URLSearchParams(queryString)
  getEmployee(urlParams.get('id'))
})

submitBtn.addEventListener('click', async e => {
  e.preventDefault()
  try {
    await axios.patch(
      `http://localhost:3000/api/v1/employee/${empIdInput.value}`,
      {
        employee_name: empNameInput.value,
        department_id: empDepartmentInput.value * 1,
        salary: empSalaryInput.value * 1,
      },
    )
    alert('Employee updated successfully')
    backBtn.click()
  } catch (error) {
    alert('An error occured while updating employee')
    console.log(error)
  }
})

async function getEmployee(emp_id) {
  const id = emp_id * 1
  const res = await axios.get(`http://localhost:3000/api/v1/employee/id/${id}`)
  const { data } = res.data
  handlePreFilling(data[0])
}

function handlePreFilling(employee) {
  empIdInput.value = employee.employee_id
  empNameInput.value = employee.employee_name
  empDepartmentInput.value = employee.department_id
  empSalaryInput.value = employee.salary
}
