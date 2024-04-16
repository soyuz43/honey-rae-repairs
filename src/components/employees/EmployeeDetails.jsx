// src/components/employees/EmployeeDetails.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getEmployeeByUserId } from "../../services/employeeServices";
import "./employeeStyles/EmployeeDetails.css";

export const EmployeeDetails = () => {
    const [user, setUser] = useState({}); // !  Use null or nullObject for initial state or user wont be defined 
    const { employeeUserId } = useParams();

    useEffect(() => {
        const fetchEmployee = async () => {
            const data = await getEmployeeByUserId(employeeUserId);
            setUser(data); 
        };

        fetchEmployee();
    }, [employeeUserId]);

    // Accessing the first employee from the employees array if it exists
    const employee = user?.employees?.[0];

    if (!user) return <div>Loading...</div>; // Show loading until data is available

    return (
        <section className="employee">
            <header className="employee-header">{user.fullName || 'No Name'}</header>
            <div>
                <span className="employee-info">Email:</span>
                {user.email || 'No Email'}
            </div>
            {employee && (
                <>
                    <div>
                        <span className="employee-info">Specialty:</span>
                        {employee.specialty || 'No Specialty'}
                    </div>
                    <div>
                        <span className="employee-info">Hourly Rate:</span>
                        {employee.rate ? `$${employee.rate}` : 'No Rate'}
                    </div>
                </>
            )}
        </section>
    );
};
