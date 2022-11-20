import { useState } from 'react'
import Input from '../form/Input'
import SubmitButton from '../form/SubmitButton'

import styles from './CadastroForm.module.css'

function CadastroForm({ handleSubmit, btnText,locadorData }) {
  const [locador, setLocador] = useState(locadorData || {})

  const submit = (e) => {
    e.preventDefault()
    handleSubmit(locador)
  }

  function handleChange(e) {
    setLocador({ ...locador, [e.target.name]: e.target.value })
  }

  return (
    <form onSubmit={submit} className={styles.form}>
      <Input
        type="text"
        text="Nome Completo"
        name="name"
        placeholder="Insira seu nome"
        handleOnChange={handleChange}
        value={locador.LocadorNome}
      />
      <Input
        type="number"
        text="CPF"
        name="CPF"
        placeholder="Insira seu CPF"
        handleOnChange={handleChange}
        value={locador.LocadorCPF}
      />
      <Input
        type="password"
        text="Senha"
        name="Senha"
        placeholder="Insira sua senha"
        handleOnChange={handleChange}
        value={locador.password}
      />
{ /*     <Select
        name="category_id"
        text="Selecione a categoria"
        options={categories}
        handleOnChange={handleCategory}
        value={locador.category ? locador.category.id : ''}
  />*/}
      <SubmitButton text={btnText} />
    </form>
  )
}

export default CadastroForm
