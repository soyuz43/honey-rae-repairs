// src/components/navBar/user_specific/EmployeeNav.jsx

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../navBar.css';  

const EmployeeNav = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('honey_user');
        navigate('/login', { replace: true });
    };

    return (
        <ul className="navbar">
            <li className="navbar-item"><Link to="/">Home</Link></li>
            <li className="navbar-item"><Link to="/tickets">Tickets</Link></li>
            <li className="navbar-item"><Link to="/customers">Customers</Link></li>
            <li className="navbar-item"><Link to="/employees">Employees</Link></li>
            <li className="navbar-item"><Link to="/profile">Profile</Link></li>
            <li className="navbar-item navbar-logout">
                <button onClick={handleLogout}>Logout</button>
            </li>
        </ul>
    );
};

export default EmployeeNav;
