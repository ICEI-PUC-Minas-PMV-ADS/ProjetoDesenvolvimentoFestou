import { useHistory } from 'react-router-dom'

import LocalForm from '../local/LocalForm'

import styles from './NewLocal.module.css'

function NewLocal() {
  const history = useHistory()

  function createPost(local) {
    // initialize cost and services


    fetch('http://localhost:5000/locais', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(local),
    })
      .then((resp) => resp.json())
      .then((data) => {
        history.push('/locais', { message: 'Local cadastrado com sucesso!' })
      })
  }

  return (
    <div className={styles.newlocal_container}>
      <h1>Cadastrar Local</h1>
      <p>Cadastre seu local para depois adicionar os serviços</p>
      <LocalForm handleSubmit={createPost} btnText="Cadastrar Local" />
    </div>
  )
}

export default NewLocal
