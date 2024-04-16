// src/App.jsx
import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";

import { Register } from "./components/auth/Register";
import { Login } from "./components/auth/Login";
import { ApplicationViews } from "./views/ApplicationViews";
import { Authorized } from "./views/Authorized";

export const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route
        path="*"
        element={
          <Authorized>
            <ApplicationViews />
          </Authorized>
        }
      />
    </Routes>
  );
};
