// src/views/CustomerViews.jsx
import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import CustomerNav from "../components/navBar/user_specific/CustomerNav"; // Ensure the import matches the actual file location
import { LandingPage} from "../components/landingPage/landingPage";
import { TicketList } from "../components/tickets/TicketList";

// import CreateTicketForm from "../components/tickets/CreateTicketForm";

export const CustomerViews = ({ currentUser }) => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <CustomerNav />
            <Outlet />
          </>
        }
      >
        
        <Route index element={<LandingPage />} />
        <Route path="tickets" element={<TicketList currentUser={currentUser} />} />
        {/* Additional routes can be added here as needed */}
      </Route>
    </Routes>
  );
};
