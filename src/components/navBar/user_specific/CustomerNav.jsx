// src/components/navBar/user_specific/CustomerNav.jsx

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../navBar.css';  // Adjusted path to the shared CSS file

const CustomerNav = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('honey_user');
        navigate('/login', { replace: true });
    };

    return (
        <ul className="navbar">
            <li className="navbar-item"><Link to="/">Home</Link></li>
            <li className="navbar-item"><Link to="/tickets">My Tickets</Link></li>
            <li className="navbar-item"><Link to="/profile">Profile</Link></li>
            <li className="navbar-item navbar-logout">
                <button onClick={handleLogout}>Logout</button>
            </li>
        </ul>
    );
};

export default CustomerNav;
