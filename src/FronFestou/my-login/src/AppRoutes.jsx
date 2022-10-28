import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import HomePage from "./pages/HomePgae";
import LoginPage from "./pages/LoginPage";

import { AuthProvider } from "./contexts/auth";
import { useState } from "react";

const AppRoutes = () => {

  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route exact path="/login" element={<LoginPage
          />} />
          <Route exact path="/" element={<HomePage
          />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default AppRoutes;
