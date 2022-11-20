import React, {useState, useContext} from "react";

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

  return (
    <div className={styles.newcadastro_container}>
      <h1>Faça seu Cadastro</h1>
      <CadastroForm handleSubmit={createPost} btnText="Cadastrar" />
    </div>
  )
}

export default Cadastro
