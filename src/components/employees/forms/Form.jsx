// src/components/forms/EmployeeForm.jsx

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllEmployees, updateEmployee } from '../../../services/employeeServices';
import './Form.css';

export const EmployeeForm = ({ currentUser }) => {
  const [employee, setEmployee] = useState({});
  const navigate = useNavigate();

  useEffect(() => { 
      getAllEmployees(currentUser.id).then(data => {
        const employeeObj = data[0]
        setEmployee(employeeObj)
      });
  }, [currentUser]);



  const handleSave = (event) => {
    event.preventDefault();
    const editedEmployee = {
      id: employee.id,
      specialty: employee.specialty,
      rate: employee.rate,
      userId: employee.userId,
    }
    updateEmployee(editedEmployee).then(() => {
      navigate(`/employees/${currentUser.id}`)
    })
  };

  return (
    <form className="profile" onSubmit={handleSave}>
      <h2>Update Profile</h2>
  
     
      <fieldset>
        <div className="form-group">
          <label>Specialty</label>
          <input
            type="text"
            name="specialty"
            value={employee.specialty ? employee.specialty : ''}          // * Using a ternary to keep .specialty defined
              required
              onChange={(event) =>{
                const copy = { ...employee }
                copy.specialty = event.target.value
                  setEmployee(copy)
              }}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="rate">Hourly Rate</label>
          <input
            type="number"
            name="rate"
            value={employee.rate ? employee.rate : 0}                      // * Using a ternary to keep .rate defined
                required
                onChange={(event) =>{
                const copy = { ...employee }
                copy.rate = event.target.value
                  setEmployee(copy)
              }}
            className="form-control"
          />
        </div>
      </fieldset>
      <fieldset>
        <div>
         <button className="form-button btn-primary" onClick={handleSave}>Save Profile</button>
        </div>
      </fieldset>
    </form>
  );
  
};
