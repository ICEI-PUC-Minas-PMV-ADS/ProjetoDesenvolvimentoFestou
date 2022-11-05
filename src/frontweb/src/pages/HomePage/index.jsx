import React, {useContext} from "react";
import { AuthContext } from "../../contexts/auth";
import "./styles.css"

const HomePage = () =>{
    const {logout} = useContext(AuthContext)
    const handleLogout = () => {
      logout();
    }

    return (
     <div id="home">
        
        <h1>HomePage</h1>
        <p>{String()}</p>
        <button onClick={handleLogout}>Logout</button>
     </div>
    )
};
export default HomePage;