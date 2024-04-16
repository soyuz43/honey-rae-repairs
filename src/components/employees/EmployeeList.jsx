// src/components/employees/EmployeeList.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; 
import { getStaffUsers } from "../../services/userServices";
import { User } from "../users/User";
import "./employeeStyles/EmployeeList.css";

export const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    getStaffUsers().then((employeeArray) => {
      setEmployees(employeeArray);
    });
  }, []);

  return (
    <div className="employees">
      <h2>Staff</h2>
      {employees.map((employee) => (
        <Link key={employee.id} to={`/employees/${employee.id}`}>
          <User user={employee} />
        </Link>
      ))}
    </div>
  );
};
