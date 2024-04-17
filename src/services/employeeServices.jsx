// src/services/employeeServices.jsx
export const getAllEmployees = () => {
    return fetch("http://localhost:8088/employees?_expand=user").then((res) =>
      res.json()
    );
  };
  


export const getEmployeeByUserId = (employeeUserId) => {
  return fetch(`http://localhost:8088/users/${employeeUserId}?_embed=employees`)
      .then(res => res.json());
};
export const updateEmployee = (employee) => {
  return fetch(`http://localhost:8088/employees/${employee.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      specialty: employee.specialty,
      rate: employee.rate,
      userId: employee.userId // Ensure this matches your database schema
    })
  })
  .then(response => response.json())
  .catch(error => console.error('Error updating employee:', error));
};
