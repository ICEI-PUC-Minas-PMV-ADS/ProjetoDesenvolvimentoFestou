import React, {useContext} from "react";

import { BrowserRouter as Router, Switch, Route, useHistory } from 'react-router-dom'
import Footer from '../layout/Footer'
import Navbar from '../layout/Navbar'
import NavbarLogout from '../layout/NavbarLogout'
import Container from '../layout/Container'
import { AuthProvider, AuthContext } from "../contexts/auth";
import LoginPage from '../pages/Login'
import Cadastro from "../pages/Cadastro";
import Company from '../pages/Company'
import Contact from '../pages/Contact'

const Auth = () => {
  return (
    <Router>
        <AuthProvider>
            <NavbarLogout/>
            <Switch>
                <Container customClass="min-height">
                <Route exact path="/">
                    <LoginPage/>
                </Route>
                <Route path="/login">
                    <LoginPage/>
                </Route>
                <Route path="/cadastro">
                    <Cadastro/>
                </Route>
                <Route path="/company">
                     <Company />
                </Route>
                <Route path="/contact">
                    <Contact />
                </Route>
                </Container>
            </Switch>
            <Footer />
        </AuthProvider>
    </Router>
  );
};

export default Auth;