import React, {useContext} from "react";
import { AuthContext } from "../../contexts/auth";
import { useNavigate, Link } from "react-router-dom";
import Saloes from "../saloes";

const HomePage = () =>{
    const {logout} = useContext(AuthContext)
    const navigate = useNavigate();
    const handleLogout = () => {
      logout();
    }

    return (
     <>
        
        <h1>HomePage</h1>
        <p>{String()}</p>
        
        <div>
        <Link to="/">Home </Link>
        <Link to="/saloes">Saloes </Link>
        <Link to="/perfil">Perfil</Link>
        </div>
        <button onClick={handleLogout}>Logout</button>
     </>
    )
};
export default HomePage;