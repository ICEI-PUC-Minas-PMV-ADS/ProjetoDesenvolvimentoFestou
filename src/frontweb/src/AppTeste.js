import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import Saloes from "./pages/saloes";
import Perfil from "./pages/perfil";

function App() {
    return (
        <Router>
            <div>
              <Link to="/">HomePage</Link>
              <Link to="/login">LoginPage</Link>
              <Link to="/saloes">Saloes</Link>
              <Link to="/perfil">Perfil</Link>
            </div>
            <Routes>
                <Route exact path="/">
                    <HomePage/>
                </Route>
                <Route exact path="/login">
                    <LoginPage/>
                </Route>
                <Route exact path="/saloes">
                    <Saloes/>
                </Route>
                <Route exact path="/perfil">
                    <Perfil/>
                </Route>
            </Routes>
        </Router>
    )
}
export default App;