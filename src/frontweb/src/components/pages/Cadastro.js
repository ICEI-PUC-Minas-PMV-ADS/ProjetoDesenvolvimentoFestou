import { useHistory } from 'react-router-dom'
import CadastroForm from '../form/CadastroForm'

import styles from './Cadastro.module.css'

function Cadastro() {
  const history = useHistory()

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
        history.push('/', { message: 'Local cadastrado com sucesso!' })
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
