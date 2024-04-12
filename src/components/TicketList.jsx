// src/components/TicketList.js
import "./componentStyles/TicketList.css"
import { Ticket } from "./Ticket.jsx"
import { getAllTickets } from "../services/ticketService.jsx"
import { useEffect, useState } from "react";


export const TicketList = () => {
    const [allTickets, setAllTickets] = useState([]);
    const [showEmergencyOnly, setShowEmergencyOnly] = useState(false);
    const [filteredTickets, setFilteredTickets] = useState([]);
  
    useEffect(() => {
      getAllTickets().then((ticketsArray) => {
        setAllTickets(ticketsArray);
        console.log("tickets set!");
      });
    }, []); // * useEffect Runs on initial render of component
  
    useEffect(() => {
      if (showEmergencyOnly) {
        const emergencyTickets = allTickets.filter(ticket => ticket.emergency === true);
        setFilteredTickets(emergencyTickets);
      } else {
        setFilteredTickets(allTickets);
      }
    }, [showEmergencyOnly, allTickets]); 
  
    return (
      <div className="tickets-container">
        <h2>Tickets</h2>
        <div>
          <button className="filter-btn btn-primary" onClick={() => setShowEmergencyOnly(true)}>Emergency</button>
          <button className="filter-btn btn-info" onClick={() => setShowEmergencyOnly(false)}>Show All</button>
        </div>
        <article className="tickets">
          {filteredTickets.map((ticketObj) => { // Use filteredTickets here
            return (
              <Ticket ticket={ticketObj} name="Joe" key={ticketObj.id}/>
            )
          })}
        </article>
      </div>
    );
  };
  