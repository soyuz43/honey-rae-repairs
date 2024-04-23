// src/views/EmployeeViews.jsx

import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import { NavBar } from "../components/navBar/navBar";
import { LandingPage } from "../components/landingPage/landingPage";
import { TicketList } from "../components/tickets/TicketList";
import { EmployeeList } from "../components/employees/EmployeeList";
import { EmployeeDetails } from "../components/employees/EmployeeDetails";
import { EmployeeForm } from "../components/employees/forms/Form";
import { CustomerList } from "../components/customers/CustomerList";
import { CustomerDetails } from "../components/customers/CustomerDetails";

export const EmployeeViews = ({ currentUser }) => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <NavBar />
            <Outlet />
          </>
        }
      >
        <Route index element={<LandingPage />} />
        <Route
          path="tickets"
          element={<TicketList currentUser={currentUser} />}
        />
        <Route path="employees">
          <Route index element={<EmployeeList />} />
          <Route path=":employeeUserId" element={<EmployeeDetails />} />
        </Route>
        {/* # End Nested Employee Route*/}

        <Route path="customers">
          <Route index element={<CustomerList />} />
          <Route path="customerId" element={<CustomerDetails />} />
        </Route>
        {/* # End Nested Customer Route*/}

        <Route
          path="profile"
          element={<EmployeeForm currentUser={currentUser} />}
        />
      </Route>
    </Routes>
  );
};
