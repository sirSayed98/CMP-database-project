async function listAllEmployees() {
  const res = await axios.get('http://localhost:3000/api/v1/employee/')
  const { data } = res.data

  const employeeTableBody = document.getElementById('table-body')
  // clear  tablebody
  employeeTableBody.innerHTML = ``
  data.forEach(employee => {
    console.log(employee)
    const row = employeeTableBody.insertRow()
    row.innerHTML = `<td>${employee.employee_id}</td>
       <td>${employee.employee_name}</td>
       <td>${employee.department_name}</td>
       <td>${employee.salary}</td>
        <td>
          <a href="./edit-employee.html?id=${employee.employee_id}" class="btn btn-sm btn-primary">Edit</a>
          <a class="btn btn-sm btn-danger"  onclick="handleDeleteEmployee(${employee.employee_id})">Delete</a>
        </td>`
  })
}

async function handleDeleteEmployee(emp_id) {
  let answer = confirm('Do you want to delete employee')
  if (answer) {
    await axios.delete(`http://localhost:3000/api/v1/employee/${emp_id}`)
    listAllEmployees()
  }
}

document.addEventListener('DOMContentLoaded', event => {
  listAllEmployees()
})
