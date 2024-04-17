// src/views/ApplicationViews.jsx

import { Routes, Route, Outlet } from "react-router-dom";
import { TicketList } from "../components/tickets/TicketList";
import { CustomerList } from "../components/customers/CustomerList";
import { CustomerDetails } from "../components/customers/CustomerDetails";
import { EmployeeList } from "../components/employees/EmployeeList";
import { LandingPage } from "../components/landingPage/landingPage";
import { NavBar } from "../components/navBar/navBar";
import { EmployeeDetails } from "../components/employees/EmployeeDetails";
import { useEffect, useState } from "react";

export const ApplicationViews = () => {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const localHoneyUser = localStorage.getItem("honey_user");
    const honeyUserObject = JSON.parse(localHoneyUser);

    setCurrentUser(honeyUserObject);
  }, []);

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
        <Route path="/" element={<LandingPage />} />
        <Route
          path="tickets"
          element={<TicketList currentUser={currentUser} />}
        />
        <Route path="employees" element={<EmployeeList />} />
        <Route path="employees/:employeeUserId" element={<EmployeeDetails />} />
        <Route path="customers" element={<CustomerList />} />
        <Route path="customers/:customerId" element={<CustomerDetails />} />
      </Route>
    </Routes>
  );
};
