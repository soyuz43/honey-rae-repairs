// src/components/forms/EmployeeForm.jsx

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getEmployeeByUserId, updateEmployee } from '../../../services/employeeServices';
import './Form.css';

export const EmployeeForm = ({ currentUser }) => {
  const [employee, setEmployee] = useState({ specialty: '', rate: 0 });
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser && currentUser.id) {
      getEmployeeByUserId(currentUser.id).then(data => {
        if (data && data.length > 0) {
          setEmployee(data[0]);
        }
      });
    }
  }, [currentUser]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEmployee(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = (event) => {
    event.preventDefault();
    updateEmployee(employee).then(() => {
      navigate(`/employees/${currentUser.id}`);
    });
  };

  return (
    <form className="profile" onSubmit={handleSave}>
      <h2>Update Profile</h2>
  
      {/* Display current specialty and rate */}
      <div className="current-info">
        <h3>Current Information</h3>
        <p><strong>Specialty:</strong> {employee.specialty}</p>
        <p><strong>Hourly Rate:</strong> ${employee.rate}</p>
      </div>
  
      <fieldset>
        <div className="form-group">
          <label htmlFor="specialty">Specialty</label>
          <input
            type="text"
            id="specialty"
            name="specialty"
            required
            className="form-control"
            value={employee.specialty}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="rate">Hourly Rate</label>
          <input
            type="number"
            id="rate"
            name="rate"
            required
            className="form-control"
            value={employee.rate}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="form-button">Save Profile</button>
      </fieldset>
    </form>
  );
  
};
