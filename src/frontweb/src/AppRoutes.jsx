import React, {Children, useContext} from "react";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import Saloes from "./pages/saloes";
import Perfil from "./pages/perfil";
import { AuthProvider, AuthContext } from "./contexts/auth";

const AppRoutes = () => {
  const Private = ({children}) => {
    const {authenticated, loading} = useContext(AuthContext);

    if (loading){
      return <div className="loading">loading..</div>;
    }

    if (!authenticated){
      return <Navigate to="/login"/>;
    }

    return children;
  }

  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route exact path="/login" element={<LoginPage
          />} />
          <Route exact path="/" element={
          <Private><HomePage/></Private>
          } 
          />
          <Route exact path="/saloes" element={
          <Saloes/>
          }
          />
          <Route exact path="/perfil" element={
          <Private><Perfil/></Private>
          }
          />
          </Routes>
      </AuthProvider>
    </Router>
  );
};

export default AppRoutes;
