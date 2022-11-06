import React, {useState, useContext} from "react";

import './Login.module.css';
import { AuthContext } from "../contexts/auth";
import Input from "../form/Input";
import SubmitButton from "../form/SubmitButton";
import styles from '../local/LocalForm.module.css'


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
        <div id="login">
            <h1 className="title">Login do Sistema</h1>
            <p>logado? {String(authenticated)}</p>
            <form className={styles.form} onSubmit={handleSubmit}>
                <div className="field">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="field">
                    <label htmlFor="Password">Senha</label>
                    <input type="Password" name="Password" id="Password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="actions">
                    <button className="submit">Entrar</button>
                </div>
                <Input
                    type="text"
                    text="email"
                    name="name"
                    placeholder="Insira seu email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
                <Input
                    type="Password"
                    text="senha"
                    name="Password"
                    placeholder="Insira sua senha"
                    id="Password" 
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
                <SubmitButton text={"Entrar"} />
            </form>
        </div>
    );
};
export default LoginPage;