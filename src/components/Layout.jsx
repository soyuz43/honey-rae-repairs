// src/components/Layout.jsx

import React from "react";
import { Outlet } from "react-router-dom";
import { NavBar } from "./navBar/navBar"; 

export const Layout = () => {
    return (
        <div>
            <NavBar />
            <Outlet />  
        </div>
    );
};
