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
        <Link to="/">Home</Link>
        <h1>HomePage</h1>
        <p>{String()}</p>
        <button onClick={handleLogout}>Logout</button>
        <div>
        <button onClick={navigate("/saloes")}>Salões</button>
        </div>
     </>
    )
};
export default HomePage;