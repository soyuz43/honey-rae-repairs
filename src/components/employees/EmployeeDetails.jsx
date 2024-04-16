// src/components/employees/EmployeeDetails.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getEmployeeByUserId } from "../../services/employeeServices";
import "./employeeStyles/EmployeeDetails.css";

export const EmployeeDetails = () => {
    const [employee, setEmployee] = useState({});
    const { employeeUserId } = useParams();

    useEffect(() => {
        console.log("Fetching employee data for ID:", employeeUserId);
    
        if (employeeUserId) { // Check if employeeUserId is not undefined
            const fetchEmployee = async () => {
                const employee = await getEmployeeByUserId(employeeUserId);
                setEmployee(employee);
            };
    
            fetchEmployee();
        } else {
            console.log("No employeeUserId provided");
        }
    }, [employeeUserId]);

    return (
        <section className="employee">
            {/* Assuming `user` data is part of the employee object */}
            <header className="employee-header">{employee.user?.fullName || 'No Name'}</header>
            <div>
                <span className="employee-info">Email:</span>
                {employee?.email || 'No Email'}
            </div>
            <div>
                <span className="employee-info">Specialty:</span>
                {employee?.specialty || 'No Specialty'}
            </div>
            <div>
                <span className="employee-info">Hourly Rate:</span>
                {employee?.rate ? `$${employee.rate}` : 'No Rate'}
            </div>
        </section>
    );
};
