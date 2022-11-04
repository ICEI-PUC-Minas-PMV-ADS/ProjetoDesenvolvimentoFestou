import React, {useState} from 'react';
import {View, StyleSheet, Text, TextInput, Alert} from 'react-native';
import {Button } from 'react-native-paper';
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
        <Text style={styles.headerText}>Crie sua Conta</Text>

        <TextInput
        style={styles.textInputNome}
        label="Usuário"
        placeholder="Nome"
        value={name}
        keyboardType="string"
        onChangeText={text => setName(text)}
        />
        <TextInput
        style={styles.textInputEmail}
        label="Email"
        placeholder="Email"
        value={email}
        keyboardType="string"
        onChangeText={text => setEmail(text)}
        />
        <TextInput
        style={styles.textInputSenha}
        label="Senha"
        placeholder="senha"
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry={true}
        />  

        <Button mode="contained" style={{ marginTop: 30, backgroundColor: '#6974CF' }}onPress={handleRegister}>
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
    color: '#6974CF',
    alignSelf: 'center',
    marginTop: 28,
  },
});


export default Cadastro;






