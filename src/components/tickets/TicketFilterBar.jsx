// src/components/TicketFilterBar.jsx
import React from 'react';

export const TicketFilterBar = ({ setSearchTerm }) => {
    return (
        <div className="filter-bar">
            <input
                type="text"
                className="ticket-search"
                placeholder="Search tickets"
                onChange={(e) => setSearchTerm(e.target.value)}  // Update search term on change
            />
        </div>
    );
};
