import React, {useState} from 'react';
import {StyleSheet, Alert} from 'react-native';
import {Button, TextInput,Text} from 'react-native-paper';

import { useNavigation } from '@react-navigation/native';
import {useUser} from '../contexts/UserContext';

import Cadastro from './Cadastro';
import Locais from './MeusLocais.jsx'
import Header from '../components/Header';
import Container from '../components/Container';
import Body from '../components/Body';

import {login} from '../services/auth.services';

const Login = () => {
  
  const navigation = useNavigation();
  const {setSigned, setName, useremail, setUseremail} = useUser();

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const handleLogin = () => {

    login({
      email: email,
      password: password
    }).then(res => {
      console.log(res);

      if (res && res.user) {
        setSigned(true);
        setName(res.user.name);
        setUseremail(res.user.email);
        navigation.navigate(Locais);

      } else {
        
        Alert('Atenção', 'usuário ou senha incorretos');
      }

    });

  }


  return (
    <Container>
      <Header title={'Login'} goBack={() => navigation.goBack()}/>
      <Body>
        <Text style={styles.headerText}>Bem Vindo de Volta!</Text>

        <TextInput
        theme={{colors: {primary: '#222'}}}
        style={styles.textInputLogin}
        label=""
        placeholder="Email"
        value={email}
        keyboardType="string"
        onChangeText={text => setEmail(text)}
        />
        <TextInput
        theme={{colors: {primary: '#222'}}}
        style={styles.textInputSenha}
        label=""
        placeholder="Senha"
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry={true}
        />  

        <Button mode = 'contained' style = {styles.buttonStyle} onPress={handleLogin} >
          Login
        </Button>


        <Button 
          mode = 'contained'
          textColor = "#ffbb33"
          style = {styles.buttonStyle}
          onPress={() => navigation.navigate(Cadastro)}
          >
          Registrar
        </Button>
        


      </Body>
    </Container>
  );
};

const styles = StyleSheet.create({
  textInputLogin:{
    height: 48,
    margin: 12,
    marginTop: 100 ,
    borderWidth: 0,
    padding: 15,
    borderRadius: 14 ,
    backgroundColor: '#F7F8F8',
    alignContent: 'center',
    overflow: 'hidden'
  },
  textInputSenha:{
    height: 48,
    margin: 12,
    marginTop: 5,
    borderWidth: 0,
    padding: 15,
    borderRadius: 14 ,
    backgroundColor: '#F7F8F8',
    alignContent: 'center'
  },
  headerText: {
    fontSize: 18,
    lineHeight: 30,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#ffbb33',
    alignSelf: 'center',
    marginTop: 28,
  },
  buttonStyle: {
    backgroundColor: '#222',
    color: '#ffbb33',
    marginLeft: 50,
    marginRight: 50,
    marginTop: 5,
    marginBottom: 5,
  },
});


export default Login;


