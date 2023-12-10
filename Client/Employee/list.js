async function listAllEmployees(){
  const res = await axios.get('http://localhost:3000/api/v1/employee/')
  const { data }  = res.data

  const employeeTableBody = document.getElementById('employeeTable').getElementsByTagName('tbody')[0];
  data.forEach(employee =>
    {
      console.log(employee);
      const row = employeeTableBody.insertRow();
      row.innerHTML = 
      `<td>${employee.employee_id}</td>
       <td>${employee.employee_name}</td>
       <td>${employee.department_name}</td>
       <td>${employee.salary}</td>
        <td>
          <button class="btn btn-sm btn-primary">Edit</button>
          <button class="btn btn-sm btn-danger">Delete</button>
        </td>`;
    });
}

document.addEventListener('DOMContentLoaded', event => {
  listAllEmployees()
})
