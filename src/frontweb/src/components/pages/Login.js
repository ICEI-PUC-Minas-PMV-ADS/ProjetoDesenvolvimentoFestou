import React, {useState, useContext} from "react";

import './Login.module.css';
import { AuthContext } from "../contexts/auth";
import SubmitButton from "../form/SubmitButton";
import styles from './Login.module.css';


const LoginPage = () => {
    const {authenticated, login} = useContext(AuthContext);

    const [email, setEmail] = useState ("");
    const [password, setPassword] = useState ("");

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("submit", {email,password});
        login(email, password); //integração com o meu context/api
    };


    return (
        <div className={styles.login_container}>
            <h1 className="title">Faça Seu Login</h1>
            <p>logado? {String(authenticated)}</p>
            <form className={styles.form} onSubmit={handleSubmit}>
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
                {/*<div className="actions">
                    <button className="submit">Entrar</button>
    </div>*/}
                <SubmitButton text={"Entrar"} />
            </form>
        </div>
    );
};
export default LoginPage;