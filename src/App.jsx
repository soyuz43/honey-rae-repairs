// src/App.jsx
import { useEffect, useState } from "react";
import { getAllTickets } from "./services/ticketService";
import "./styles/App.css";
import { TicketList } from "./components/TicketList";

export const App = () => {
  return (
    <>
      <TicketList />
    </>
  );
};
