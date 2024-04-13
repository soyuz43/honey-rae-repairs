// src/components/TicketList.js
import React, { useState, useEffect } from "react";
import "./componentStyles/TicketList.css";
import { Ticket } from "./Ticket.jsx";
import { getAllTickets } from "../services/ticketService.jsx";
import { TicketFilterBar } from "./TicketFilterBar"; 
export const TicketList = () => {
    const [allTickets, setAllTickets] = useState([]);
    const [showEmergencyOnly, setShowEmergencyOnly] = useState(false);
    const [filteredTickets, setFilteredTickets] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");                         // # State for handling the search term

    useEffect(() => {
        getAllTickets().then((ticketsArray) => {
            setAllTickets(ticketsArray);
        });
    }, []);

    
    useEffect(() => {                                                         // # Filter tickets based on emergency status and search term
        let tickets = allTickets;
        if (showEmergencyOnly) {
            tickets = tickets.filter(ticket => ticket.emergency === true);
        }
        if (searchTerm) {
            tickets = tickets.filter(ticket =>
                ticket.description.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }
        setFilteredTickets(tickets);
    }, [showEmergencyOnly, allTickets, searchTerm]);                          // # Add searchTerm to dependency array

    return (
        <div className="tickets-container">
            <h2>Tickets</h2>
            <div className="filter-bar">
                <button className="filter-btn btn-primary" onClick={() => setShowEmergencyOnly(true)}>Emergency</button>
                <button className="filter-btn btn-info" onClick={() => setShowEmergencyOnly(false)}>Show All</button>
                <TicketFilterBar setSearchTerm={setSearchTerm} />
            </div>
            <article className="tickets">
                {filteredTickets.map(ticket => (
                    <Ticket key={ticket.id} ticket={ticket} />
                ))}
            </article>
        </div>
    );
};
