// src/components/employees/EmployeeList.jsx

import React, { useEffect, useState } from "react";
import { getStaffUsers } from "../../services/userServices";
import { User } from "../users/User"; 
import "./Employees.css"; 

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
                <User key={employee.id} user={employee} />
            ))}
        </div>
    );
};
