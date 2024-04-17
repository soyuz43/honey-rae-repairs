// src/components/Ticket.jsx

import { useEffect, useState } from "react";
import { getAllEmployees } from "../../services/employeeServices";
import { assignTicket } from "../../services/ticketService";


export const Ticket = ({ticket, currentUser, getAndSetTickets}) => {
  const [employees, setEmployees] = useState([])
  const [assignedEmployee, setAssignedEmployee] = useState({})

  useEffect(() =>{
    getAllEmployees().then((employeesArray) => {
        setEmployees(employeesArray)
    })
  }, [])

  useEffect(() => {
    const foundEmployee = employees.find(employee => employee.id === ticket.employeeTickets[0]?.employeeId
    )
    setAssignedEmployee(foundEmployee)
  }, [employees, ticket])

  const handleClaim = () => {
    const currentEmployee = employees.find(employee => employee.userId === currentUser.id);
    const newEmployeeTicket = {
      employeeId: currentEmployee.id,
      serviceTicketId: ticket.id
    };
    assignTicket(newEmployeeTicket).then(() => getAndSetTickets());
  };

  return (
    <section key={ticket.id} className="ticket">
      <header className="ticket-info">#{ticket.id}</header>
      <div>{ticket.description}</div>
      <footer>
        <div> 
          <div className="ticket-info">assigned to</div>
          <div>{assignedEmployee ? assignedEmployee.user?.fullName : "None"}</div>
        </div>
        <div>
          <div className="ticket-info">emergency</div>
          <div>{ticket.emergency ? "yes" : "no"}</div>
        </div>
        <div className="btn-container">
          {/* Conditionally render Claim button if there is no assigned employee and user is staff */}
          {currentUser.isStaff && !assignedEmployee && (
            <button className="btn btn-secondary" onClick={handleClaim}>
              Claim
            </button>
          )}
          {/* Conditionally render Close button if the logged-in user is the assigned employee and the ticket is not completed */}
          {assignedEmployee?.userId === currentUser.id && !ticket.dateCompleted && (
            <button className="btn btn-warning" onClick={() => closeTicket(ticket.id)}>
              Close
            </button>
          )}
        </div>
      </footer>
    </section>
  )};  