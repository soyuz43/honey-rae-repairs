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
