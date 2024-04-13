// src/components/CustomerList.jsx
import { useEffect, useState } from "react";
import "./CustomerList.css";  // Make sure the path is correct based on your project structure
import { getNonStaffUsers } from "../../services/userServices";
import { User } from "../users/User";  // Make sure the path is correct based on your project structure

export const CustomerList = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    getNonStaffUsers().then((customerArray) => {
      setCustomers(customerArray);
    });
  }, []);

  return (
    <div className="customers">
      <h2>Who we're currently servicing</h2>
      {customers.map((customerObj) => (
        <User key={customerObj.id} user={customerObj} />  
      ))}
    </div>
  );
};

