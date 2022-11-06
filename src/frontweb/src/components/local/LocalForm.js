import { useState, useEffect } from 'react'
import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'

import styles from './LocalForm.module.css'

function LocalForm({ handleSubmit, btnText, localData }) {
  const [local, setLocal] = useState(localData || {})
  const [categories, setCategories] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/categories', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setCategories(data)
      })
  }, [])

  const submit = (e) => {
    e.preventDefault()
    handleSubmit(local)
  }

  function handleChange(e) {
    setLocal({ ...local, [e.target.name]: e.target.value })
  }

  function handleCategory(e) {
    setLocal({
      ...local,
      category: {
        id: e.target.value,
        name: e.target.options[e.target.selectedIndex].text,
      },
    })
  }

  return (
    <form onSubmit={submit} className={styles.form}>
      <Input
        type="text"
        text="Nome do Local"
        name="name"
        placeholder="Insira o nome do local"
        handleOnChange={handleChange}
        value={local.name}
      />
      <Input
        type="number"
        text="Preço do local"
        name="cost"
        placeholder="Insira o preço total"
        handleOnChange={handleChange}
        value={local.cost}
      />
      <Input
        type="text"
        text="Descrição do local"
        name="decricao"
        placeholder="Insira a descrição"
        handleOnChange={handleChange}
        value={local.descricao}
      />
      <Select
        name="category_id"
        text="Selecione a categoria"
        options={categories}
        handleOnChange={handleCategory}
        value={local.category ? local.category.id : ''}
      />
      
      <SubmitButton text={btnText} />
    </form>
  )
}

export default LocalForm
