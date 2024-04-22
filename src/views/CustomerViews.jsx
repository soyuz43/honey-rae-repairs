// src/views/CustomerViews.jsx
import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import { CustomerNav } from "../components/navBar/CustomerNav";
import { LandingPage } from "../components/landingPage/LandingPage";
import { TicketList } from "../components/tickets/TicketList"; // Adjust import paths as necessary

// Assuming you have components for CustomerProfileForm, CreateTicketForm, etc.
import { CustomerProfileForm } from "../components/customers/CustomerProfileForm";
import { CreateTicketForm } from "../components/tickets/CreateTicketForm";

export const CustomerViews = ({ currentUser }) => {
  return (
    <Routes>
      <Route path="/" element={<CustomerNav />}>
        <Route index element={<LandingPage />} />
        <Route path="tickets" element={<TicketList currentUser={currentUser} />} />
        <Route path="profile" element={<CustomerProfileForm currentUser={currentUser} />} />
        <Route path="tickets/new" element={<CreateTicketForm />} />
        {/* More customer-specific routes here as needed */}
      </Route>
    </Routes>
  );
};
