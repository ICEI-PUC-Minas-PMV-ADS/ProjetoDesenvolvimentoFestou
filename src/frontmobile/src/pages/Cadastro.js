import React, {useState} from 'react';
import {View, StyleSheet, Text, Pressable, Alert} from 'react-native';
import {Button, TextInput } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import Header from '../components/Header';
import Container from '../components/Container'

import {register} from '../services/auth.services';

const Cadastro = () => {
  const navigation = useNavigation();
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

        Alert.alert('Atenção', 'Usuário Cadastrado com sucesso!',[
          { text: "OK", onPress: () => navigation.goBack() }
        ]);

      }else{

         Alert.alert('Atenção', 'Usuário não cadastrado! Tente novamente mais tarde =D');
      }

    });
    
  }

  return (
    <Container>
      <View style={styles.container}>

        <Header title={'Cadastre-se'} goBack={() => navigation.goBack()}/>
        <Text style={styles.headerText}>Crie sua conta para utilizar o Festou!</Text>

        <TextInput
        style={styles.textInputNome}
        theme={{colors: {primary: '#222'}}}
        label=""
        placeholder="Nome"
        value={name}
        keyboardType="string"
        onChangeText={text => setName(text)}
        />
        <TextInput
        style={styles.textInputEmail}
        theme={{colors: {primary: '#222'}}}
        label=""
        placeholder="Email"
        value={email}
        keyboardType="string"
        onChangeText={text => setEmail(text)}
        />
        <TextInput
        style={styles.textInputSenha}
        theme={{colors: {primary: '#222'}}}
        label=""
        placeholder="Senha"
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry={true}
        />  

        <Button mode="contained" style = {styles.buttonStyle} onPress={handleRegister}>
          Cadastrar
        </Button>

      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgraundColor: '#55555',
    alignContent: 'center'
  },
  textInputNome:{
    height: 48,
    margin: 12,
    marginTop: 100 ,
    borderWidth: 0,
    padding: 15,
    borderRadius: 14 ,
    backgroundColor: '#F7F8F8',
    alignContent: 'center'
  },
  textInputEmail:{
    height: 48,
    margin: 12,
    marginTop: 5 ,
    borderWidth: 0,
    padding: 15,
    borderRadius: 14 ,
    backgroundColor: '#F7F8F8',
    alignContent: 'center'
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
  }
});


export default Cadastro;






