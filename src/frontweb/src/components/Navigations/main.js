import React, {useContext} from "react";
import { BrowserRouter as Router, Switch, Route, useHistory } from 'react-router-dom'
import Home from '../pages/Home';
import Local from '../pages/Local'

import Footer from '../layout/Footer'
import Navbar from '../layout/Navbar'
import Container from '../layout/Container'
import Locais from '../pages/Locais'
import NewLocal from '../pages/NewLocal'
import Company from '../pages/Company'
import Contact from '../pages/Contact'
import { AuthProvider, AuthContext } from "../contexts/auth";
import Perfil from "../pages/Perfil";

const Main = () => {
    return (
        <Router>
            <AuthProvider>
                <Navbar />
                <Switch>
                    <Container customClass="min-height">
                    <Route exact path="/">
                    <Home />
                    </Route>
                    <Route path="/locais">
                     <Locais />
                    </Route>
                    <Route path="/company">
                     <Company />
                    </Route>
                    <Route path="/contact">
                    <Contact />
                    </Route>
                    <Route path="/perfil"> 
                     <Perfil />
                    </Route>
                    <Route path="/newlocal">
                    <NewLocal />
                    </Route>
                    <Route path="/local/:id">
                    <Local />
                    </Route>
                    </Container>
                </Switch>
                <Footer />
            </AuthProvider>
        </Router>
      );

}


export default Main;