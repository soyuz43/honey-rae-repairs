// src/views/EmployeeViews.jsx

import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import { NavBar } from "../components/navBar/NavBar";
import { LandingPage } from "../components/landingPage/LandingPage";
import { TicketList } from "../components/tickets/TicketList";
import { EmployeeList } from "../components/employees/EmployeeList";
import { EmployeeDetails } from "../components/employees/EmployeeDetails";
import { EmployeeForm } from "../components/employees/forms/EmployeeForm";
import { CustomerList } from "../components/customers/CustomerList";
import { CustomerDetails } from "../components/customers/CustomerDetails";

export const EmployeeViews = ({ currentUser }) => {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<LandingPage />} />
        <Route
          path="tickets"
          element={<TicketList currentUser={currentUser} />}
        />
        <Route
          path="profile"
          element={<EmployeeForm currentUser={currentUser} />}
        />
        <Route path="employees" element={<EmployeeList />} />
        <Route path="employees/:employeeUserId" element={<EmployeeDetails />} />
        <Route path="customers" element={<CustomerList />} />
        <Route path="customers/:customerId" element={<CustomerDetails />} />
      </Route>
    </Routes>
  );
};
