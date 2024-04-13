// src/App.jsx
import { useEffect, useState } from "react";
import "./styles/App.css";
import { TicketList } from "./components/TicketList";
import { CustomerList } from "./components/CustomerList"; // Import the CustomerList component

export const App = () => {
  return (
    <>
      <TicketList />   
      <CustomerList /> 
    </>
  );
};
