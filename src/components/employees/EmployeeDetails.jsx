// src/components/employees/EmployeeDetails.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getEmployeeById } from "../../services/employeeServices";
import "./employeeStyles/EmployeeDetails.css";

export const EmployeeDetails = () => {
    const [employee, setEmployee] = useState({});
    const { employeeId } = useParams();

    useEffect(() => {
        getEmployeeById(employeeId).then(data => {
            if (data) {
                setEmployee(data);  
            } else {
                console.error("No employee found with this ID");
                setEmployee({});
            }
        });
    }, [employeeId]);

    return (
        <section className="employee">
            <header className="employee-header">{employee.fullName}</header>
            <div>
                <span className="employee-info">Email:</span>
                {employee.email}
            </div>
            <div>
                <span className="employee-info">Address:</span>
                {employee.address}
            </div>
            <div>
                <span className="employee-info">Phone Number:</span>
                {employee.phoneNumber}
            </div>
        </section>
    );
};
