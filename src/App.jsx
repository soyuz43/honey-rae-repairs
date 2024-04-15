// src/App.jsx
import React from "react";
import { Routes, Route, } from "react-router-dom";
import { TicketList } from "./components/tickets/TicketList";
import { CustomerList } from "./components/customers/CustomerList";
import { CustomerDetails } from "./components/customers/CustomerDetails";
import { EmployeeList } from "./components/employees/EmployeeList";
import { Layout } from "./components/Layout";  
import { LandingPage } from "./components/landingPage/landingPage";

export const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                {/* Define nested routes here */}
                <Route index element={<LandingPage />} />
                <Route path="tickets" element={<TicketList />} />
                <Route path="employees" element={<EmployeeList />} />
                <Route path="customers" element={<CustomerList />} />
                <Route path="customers/:customerId" element={<CustomerDetails />} />
            </Route>
        </Routes>
    );
};










// export const App = () => {
//     return (
//         <Routes>
//             <Route path="/" element={<Layout />}>
//                 {/* Define nested routes here */}
//                 <Route index element={<LandingPage />} />  
//                 <Route path="/tickets" element={<TicketList />} />
//                 <Route path="/employees" element={<EmployeeList />} />
//                 <Route path="/customers" element={<CustomerList />}>
//                 <Route path="customers/:customerId" element={<CustomerDetails />} />
//                 </Route>
//             </Route>
//         </Routes>
//     );
// };



