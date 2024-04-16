// src/components/CustomerList.jsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getNonStaffUsers } from "../../services/userServices";
import { User } from "../users/User";  
import "./CustomerList.css";  

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
        <Link key={customerObj.id} to={`/customers/${customerObj.id}`}>
          <User  user={customerObj} />
        </Link>  
      ))}
    </div>
  );
};

