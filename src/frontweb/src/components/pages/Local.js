import { parse, v4 as uuidv4 } from 'uuid'

import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

import styles from './Local.module.css'

import Loading from '../layout/Loading'
import Container from '../layout/Container'
import LocalForm from '../local/LocalForm'
import Message from '../layout/Message'
import ServiceForm from '../service/ServiceForm'
import ServiceCard from '../service/ServiceCard'

function Local() {
  let { id } = useParams()
  const [local, setLocal] = useState([])
  const [showLocalForm, setShowLocalForm] = useState(false)
  const [showServiceForm, setShowServiceForm] = useState(false)
  const [services, setServices] = useState([])
  const [message, setMessage] = useState('')
  const [type, setType] = useState('success')

  useEffect(() => {
    // Para ver o loading
    setTimeout(
      () =>
        fetch(`http://localhost:5000/locais/${id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then((resp) => resp.json())
          .then((data) => {
            setLocal(data)
            setServices(data.services)
          }),
      0,
    )
  }, [id])

  function editPost(local) {
    // budget validation
    if (local.budget < local.cost) {
      setMessage('O Orçamento não pode ser menor que o custo do local!')
      setType('error')
      return false
    }

    fetch(`http://localhost:5000/locais/${local.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(local),
    })
      .then((resp) => resp.json())
      .then((data) => {
        setLocal(data)
        setShowLocalForm(!showLocalForm)
        setMessage('Local atualizado!')
        setType('success')
      })
  }

  function createService(local) {
    // last service
    const lastService = local.services[local.services.length - 1]

    lastService.id = uuidv4()

    const lastServiceCost = lastService.cost

    const newCost = parseFloat(local.cost) + parseFloat(lastServiceCost)

    // maximum value validation
    if (newCost > parseFloat(local.budget)) {
      setMessage('Orçamento ultrapassado, verifique o valor do serviço!')
      setType('error')
      local.services.pop()
      return false
    }

    // add service cost to local cost total
    local.cost = newCost

    fetch(`http://localhost:5000/locais/${local.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(local),
    })
      .then((resp) => resp.json())
      .then((data) => {
        setServices(data.services)
        setShowServiceForm(!showServiceForm)
        setMessage('Serviço adicionado!')
        setType('success')
      })
  }

  function removeService(id, cost) {
    const servicesUpdated = local.services.filter(
      (service) => service.id !== id,
    )

    const localUpdated = local

    localUpdated.services = servicesUpdated
    localUpdated.cost = parseFloat(localUpdated.cost) - parseFloat(cost)

    fetch(`http://localhost:5000/locais/${localUpdated.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(localUpdated),
    })
      .then((resp) => resp.json())
      .then((data) => {
        setLocal(localUpdated)
        setServices(servicesUpdated)
        setMessage('Serviço removido com sucesso!')
      })
  }

  function toggleLocalForm() {
    setShowLocalForm(!showLocalForm)
  }

  function toggleServiceForm() {
    setShowServiceForm(!showServiceForm)
  }

  return (
    <>
      {local.name ? (
        <div className={styles.local_details}>
          <Container customClass="column">
            {message && <Message type={type} msg={message} />}
            <div className={styles.details_container}>
              <h1>Local: {local.name}</h1>
              <button className={styles.btn} onClick={toggleLocalForm}>
                {!showLocalForm ? 'Editar local' : 'Fechar'}
              </button>
              {!showLocalForm ? (
                <div className={styles.form}>
                  <p>
                    <span>Preço:</span> R${local.cost}
                  </p>
                  <p>
                    <span>Descrição:</span> {local.descricao}
                  </p>
                  <p>
                    <span>Endereço:</span> {local.endereco}
                  </p>
                </div>
              ) : (
                <div className={styles.form}>
                  <LocalForm
                    handleSubmit={editPost}
                    btnText="Concluir Edição"
                    localData={local}
                  />
                </div>
              )}
            </div>
          </Container>
        </div>
      ) : (
        <Loading />
      )}
    </>
  )
}

export default Local
