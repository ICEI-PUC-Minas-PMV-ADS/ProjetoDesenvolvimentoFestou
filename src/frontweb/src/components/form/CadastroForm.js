import { useState } from 'react'
import Input from '../form/Input'
import SubmitButton from '../form/SubmitButton'
import {register} from '../service/auth.services';


import styles from './CadastroForm.module.css'

function CadastroForm({ handleSubmit, btnText,locadorData }) {
  const [locador, setLocador] = useState(locadorData || {})
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

  return (
    <form onSubmit={handleRegister} className={styles.form}>
      <Input
        type="text"
        text="Nome Completo"
        name="name"
        placeholder="Insira seu nome"
        onChange={setName}
        value={name}
      />
      <Input
        type="text"
        text="Email"
        name="email"
        placeholder="Insira seu Email"
        onChange={setEmail}
        value={email}
        
      />
      <Input
        type="password"
        text="Senha"
        name="Senha"
        placeholder="Insira sua senha"
        onChange={setPassword}
        value={password}
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
