// src/components/employees/EmployeeList.jsx

import React, { useEffect, useState } from "react";
import { getStaffUsers } from "../../services/userServices";
import { User } from "../users/User"; // Assuming you have a User component that is suitable for rendering user details
import "./Employees.css"; // Make sure the CSS path is correct

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
