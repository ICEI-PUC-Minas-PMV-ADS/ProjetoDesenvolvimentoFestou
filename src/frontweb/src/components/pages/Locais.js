import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import Container from '../layout/Container'
import Loading from '../layout/Loading'

import LinkButton from '../layout/LinkButton'
import LocalCard from '../local/LocalCard'
import Message from '../layout/Message'

import styles from './Locais.module.css'

function Locais() {
  const [locais, setLocais] = useState([])
  const [removeLoading, setRemoveLoading] = useState(false)
  const [localMessage, setLocalMessage] = useState('')

  const location = useLocation()
  let message = ''
  if (location.state) {
    message = location.state.message
  }

  useEffect(() => {
    // Para ver o loading
    setTimeout(
      () =>
        fetch('http://localhost:5000/locais', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then((resp) => resp.json())
          .then((data) => {
            setLocais(data)
            setRemoveLoading(true)
          }),
      100,
    )
  }, [])

  function removeLocal(id) {
    fetch(`http://localhost:5000/locais/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setLocais(locais.filter((local) => local.id !== id))
        setLocalMessage('Local removido com sucesso!')
      })
  }

  return (
    <div className={styles.local_container}>
      <div className={styles.title_container}>
        <h1>Meus Locais</h1>
        <LinkButton to="/newlocal" text="Cadastrar local" />
      </div>
      {message && <Message type="success" msg={message} />}
      {localMessage && <Message type="success" msg={localMessage} />}
      <Container customClass="start">
        {locais.length > 0 &&
          locais.map((local) => (
            <LocalCard
              id={local.id}
              name={local.name}
              cost={local.cost}
              descricao={local.descricao}
              category={local.category.name}
              key={local.id}
              handleRemove={removeLocal}
            />
          ))}
        {!removeLoading && <Loading />}
        {removeLoading && locais.length === 0 && (
          <p>Não há locais cadastrados!</p>
        )}
      </Container>
    </div>
  )
}

export default Locais
