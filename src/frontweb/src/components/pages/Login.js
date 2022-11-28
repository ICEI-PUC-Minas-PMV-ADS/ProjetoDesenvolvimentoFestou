import React, {useState, useContext} from "react";

import './Login.module.css';
import { AuthContext } from "../contexts/auth";
import SubmitButton from "../form/SubmitButton";
import styles from './Login.module.css';
import { Link } from "react-router-dom";
import {login} from '../service/auth.services';
import Locais from '../pages/Locais';
import Cadastro from '../pages/Cadastro';
import { useHistory  } from "react-router-dom";


import {useUser} from '../contexts/UserContext';
import { BsChevronCompactLeft } from "react-icons/bs";


const LoginPage = () => {
    const {authenticated, login} = useContext(AuthContext);
    const {setSigned, setName, useremail, setUseremail} = useUser();


    const [email, setEmail] = useState ("");
    const [password, setPassword] = useState ("");
    const history  = useHistory ();
    const handleLogin = () => {

        login({
          email: email,
          password: password
        }).then(res => {
          console.log(res);
    
          if (res && res.user) {
            setSigned(true);
            setName(res.locador.LocadorNome);
            setUseremail(res.locador.LocadorEmail);
            history.push(Locais);
            console.log("certo")
    
          } else {
            //<Alert severity="warning">Usuário ou senha incorretos!</Alert>
            alert("Hello! I am an alert box!!");
            console.log("erro")
            history.push(Cadastro)
          }
    
        });
    
      }

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("submit", {email,password});
        login(email, password); //integração com o meu context/api
        /*login({
            email: usuario,
            password: senha
          }).then( res => {
            console.log('res: ',res);
      
            if(res && res.user){
              setSigned(true);
              setName(res.user.name);
              AsyncStorage.setItem('@TOKEN_KEY', res.accessToken).then();
            }else{
              console.log('Error: ');
              Alert.alert('Atenção', 'Usuário ou senha inválidos!');
            }
      
          });*/
    };


    return (
        <div className={styles.login_container}>
           <h1 className="title">Faça Seu Login</h1>
            {/*<p>logado? {String(authenticated)}</p>*/}
            <form className={styles.form} onSubmit={handleLogin}>
                <div className={styles.form_control}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className={styles.form_control}>
                    <label htmlFor="Password">Senha</label>
                    <input type="Password" name="Password" id="Password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
{/*                <div className="actions">
                    <button className="submit">Entrar</button>
    </div>*/}
                <SubmitButton text={"Entrar"} />
            </form>
            <div><span>Não tem Cadastro? </span><Link to="Cadastro">Clique Aqui</Link></div>

        </div>
        


    );
};
export default LoginPage;