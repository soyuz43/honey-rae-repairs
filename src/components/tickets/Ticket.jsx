// src/components/Ticket.jsx

import { useEffect, useState } from "react";
import { getAllEmployees } from "../../services/employeeServices";


export const Ticket = ({ticket}) => {
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
      </footer>
    </section>
  );
};
