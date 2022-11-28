/*import React, {useState, useContext} from "react";

import { useHistory } from 'react-router-dom'
import CadastroForm from '../form/CadastroForm'

import styles from './Cadastro.module.css'

function Cadastro() {
  const history = useHistory()
  const [name, setName] = useState(null);
  const [password, setPassword] = useState(null);
  const [email, setEmail] = useState(null);

  function createPost(locador) {
    // initialize cost and services
    //locador.cost = 0
    //locador.services = []

    fetch('http://localhost:5000/locador', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(locador),
    })
      .then((resp) => resp.json())
      .then((data) => {
        history.push('/', { message: 'Cadastro realizado com Sucesso!' })
      })
  }
*/

import React, {useState} from 'react';
import { useHistory } from 'react-router-dom'

import CadastroForm from '../form/CadastroForm'

import styles from './Cadastro.module.css'

import {register} from '../service/auth.services';
import Input from '../form/Input'
import SubmitButton from '../form/SubmitButton'


const Cadastro = () => {
/*
  const history = useHistory();
  const [name, setName] = useState(null);
  const [password, setPassword] = useState(null);
  const [email, setEmail] = useState(null);

  const handleRegister = () => {

    register({
      name: name,
      email: email,
      password: password
    }).then( res => {
      console.log(res);

      if(res){

        console.log('Atenção', 'Usuário Cadastrado com sucesso!');

      }else{

         console.log('Atenção', 'Usuário não cadastrado! Tente novamente mais tarde =D');
      }

    });
    
  }


  function CadastroForm({ handleSubmit, btnText,locadorData }) {
    const [locador, setLocador] = useState(locadorData || {})
  
    const submit = (e) => {
      e.preventDefault()
      handleSubmit(locador)
    }
  
    function handleChange(e) {
      setLocador({ ...locador, [e.target.name]: e.target.value })
    }
*/
  
  return (
    <div className={styles.newcadastro_container}>
      <h1>Faça seu Cadastro</h1>
        <CadastroForm btnText="Cadastrar" />
        {/* <CadastroForm handleSubmit={handleRegister} btnText="Cadastrar" />*/}
      {/*<form onSubmit={handleRegister} className={styles.form}>
        <Input
          type="text"
          text="Nome Completo"
          name="name"
          placeholder="Insira seu nome"
          handleOnChange={setName}
          value={name}
        />
        <Input
          type="text"
          text="email"
          name="email"
          placeholder="Insira seu Email"
          handleOnChange={setEmail}
          value={email}
        />
        <Input
          type="password"
          text="Senha"
          name="Senha"
          placeholder="Insira sua senha"
          handleOnChange={setPassword}
          value={password}
        />
        <SubmitButton text="Cadastrar" />
  </form>*/}
    </div>
  )
}

export default Cadastro
