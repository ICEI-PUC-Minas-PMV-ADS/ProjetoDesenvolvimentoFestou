import React, {createContext, useState, useEffect} from "react";
import { useHistory  } from "react-router-dom";
import { API, userLogin } from "../service/api";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const history  = useHistory ();
    const [user,setUser] = useState(true);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const recoveredUser = localStorage.getItem("user");

      if(recoveredUser){
        setUser(JSON.parse(recoveredUser));
      }

      setLoading(false);
    }, []);

    const login = async (email, password) => {      
           
      const response = await userLogin(email, password);
      console.log("login", response.data);
      const loggedUser = response.data.user;
      

      localStorage.setItem("user", JSON.stringify(loggedUser));

      setUser(loggedUser);
      history.push("/");
      

      setUser({id: "123", email})
    };
  
    const logout = () => {
      console.log("logout");
      localStorage.removeItem("user");
      setUser(null);
      history.push("/login");
    };

  return(
    <AuthContext.Provider value={{ authenticated: !!user, user, loading, login, logout}}>
        {children}
    </AuthContext.Provider>
  );
};