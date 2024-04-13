// src/components/CustomerList.jsx
import { useEffect, useState } from "react";
import "./componentStyles/CustomerList.css";
import { getNonStaffUsers } from "../services/userServices"; 



export const CustomerList = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    getNonStaffUsers().then((customerArray) => {
      setCustomers(customerArray);
    });
  }, []);

  return (
    <div className="customers">
      {customers.map((customerObj) => (
        <div key={customerObj.id}>
          <div className="customer-info">
            <div>Name:</div>
            <div>{customerObj.fullName}</div>
            <div>Email:</div>
            <div>{customerObj.email}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
