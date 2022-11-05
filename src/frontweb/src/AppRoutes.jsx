import React, {useContext} from "react";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Link
} from "react-router-dom";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import Saloes from "./pages/saloes";
import Perfil from "./pages/perfil";
import { AuthProvider, AuthContext } from "./contexts/auth";
import Container from "./layout/Container";
import "./layout/Container.module.css"

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
          <div>
          <Link to="/">Home </Link>
          <Link to="/saloes">Saloes </Link>
          <Link to="/perfil">Perfil</Link>
          </div>
          <Container className="min-height">
            <Routes>
              
                <Route exact path="/login" element={<LoginPage
                />} />
                <Route exact path="/" element={
                <Private><HomePage/></Private>
                } 
                />
                <Route exact path="/saloes" element={
                <Private><Saloes/></Private>
                }
                />
                <Route exact path="/perfil" element={
                <Private><Perfil/></Private>
                }
                />
              
            </Routes>
          </Container>
        </AuthProvider>
      <p>Footer</p>
    </Router>
  );
};

export default AppRoutes;
