import React, { useState, useEffect } from "react";
import "./TicketStyles/TicketList.css";
import { Ticket } from "./Ticket.jsx";
import { getAllTickets } from "../../services/ticketService.jsx";
import { getAllEmployees } from "../../services/employeeServices.jsx";
import { TicketFilterBar } from "./TicketFilterBar";

export const TicketList = ({ currentUser }) => {
    const [allTickets, setAllTickets] = useState([]);
    const [allEmployees, setAllEmployees] = useState([]);
    const [showEmergencyOnly, setShowEmergencyOnly] = useState(false);
    const [filteredTickets, setFilteredTickets] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    // # Checks if the current user is staff or customer, filters and sets tickets that based on currentUser
    const getAndSetTickets = () => {
        getAllTickets().then((ticketsArray) => {
            // Ternary to determine what state to set to the tickets array
            const ticketsToSet = (currentUser.isStaff) 
                ? ticketsArray 
                : ticketsArray.filter(ticket => ticket.userId === currentUser.id);
            
            setAllTickets(ticketsToSet);
        });
        getAllEmployees().then((employeesArray) => {
            setAllEmployees(employeesArray);
        });
    }
    
    useEffect(() => {
        getAndSetTickets()
    }, [currentUser]);

    useEffect(() => {
        let tickets = allTickets;
        if (showEmergencyOnly) {
            tickets = tickets.filter(ticket => ticket.emergency === true);
        }
        if (searchTerm) {
            tickets = tickets.filter(ticket => {    // * Expanded search to be able to search by ticket # and/or employee name!
                const ticketDescMatch = ticket.description.toLowerCase().includes(searchTerm.toLowerCase());
                const employee = allEmployees.find(emp => emp.id === ticket.employeeTickets[0]?.employeeId);
                const employeeNameMatch = employee ? employee.user.fullName.toLowerCase().includes(searchTerm.toLowerCase()) : false;
                const ticketIdMatch = ticket.id.toString().includes(searchTerm);  
                return ticketDescMatch || employeeNameMatch || ticketIdMatch;
            });
        }
        setFilteredTickets(tickets);
    }, [showEmergencyOnly, allTickets, allEmployees, searchTerm]);
    return (
        <div className="tickets-container">
            <h2>Tickets</h2>
            <div className="filter-bar">
                <button 
                    className={`filter-btn ${showEmergencyOnly ? 'btn-info' : 'btn-primary'}`} 
                    onClick={() => setShowEmergencyOnly(!showEmergencyOnly)}>
                    {showEmergencyOnly ? 'Show All' : 'Emergency'}
                </button>
                <TicketFilterBar setSearchTerm={setSearchTerm} />
            </div>
            <article className="tickets">
                {filteredTickets.map(ticket => (
                    <Ticket key={ticket.id} currentUser={currentUser} getAndSetTickets={getAndSetTickets} ticket={ticket} />
                ))}
            </article>
        </div>
    );
};
