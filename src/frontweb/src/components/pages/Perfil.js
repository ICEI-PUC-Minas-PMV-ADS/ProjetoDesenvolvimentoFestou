import React, {useContext} from "react";
import { AuthContext } from "../contexts/auth";

function Perfil() {
    const {logout} = useContext(AuthContext)
    const handleLogout = () => {
      logout();
    }
 return (
   <section>
    <h1>Perfil</h1>
    <button onClick={handleLogout}>Logout</button>
  </section>
 );
}
  
export default Perfil;
  