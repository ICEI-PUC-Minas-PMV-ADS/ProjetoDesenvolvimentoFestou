import React, {useContext} from "react";
import { BrowserRouter as Router, Switch, Route, useHistory } from 'react-router-dom'
import Footer from './components/layout/Footer'
import Navbar from './components/layout/Navbar'
import Container from './components/layout/Container'
import Home from './components/pages/Home'
import Locais from './components/pages/Locais'
import NewLocal from './components/pages/NewLocal'
import Company from './components/pages/Company'
import Contact from './components/pages/Contact'
import Local from './components/pages/Local'
import { AuthProvider, AuthContext } from "./components/contexts/auth";
import LoginPage from './components/pages/Login'
import Perfil from "./components/pages/Perfil";
import Cadastro from "./components/pages/Cadastro";

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
  )
}

export default Main
