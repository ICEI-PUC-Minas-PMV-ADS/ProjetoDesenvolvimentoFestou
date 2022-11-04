import React from 'react';
import {StyleSheet} from 'react-native';
import {View, Text, Button} from 'react-native';

import Container from '../components/Container';
import Header from '../components/Header';
import Body from '../components/Body';

import {useUser} from '../contexts/UserContext';


const Perfil = () => {

  const {name, useremail} = useUser();

  return (
    <>    
    <Container>
      <Header title={'Perfil'} subtitle ={'Veja seu Perfil'}/>    
      <Body> 
          <Text style = {styles.text}> {'Nome: '+ name}</Text>
          <Text style = {styles.text}> {'E-mail: '+ useremail} </Text>
          

      <View style={styles.fixToText}>
        <Button
          color = '#6974CF'
          title="Alterar Senha"
          onPress={() => console.log('Left button pressed')}
        />
        <Button
          color = '#6974CF'
          title="Editar Informações"
          onPress={() => console.log('Right button pressed')}
        />
      </View>
   
      </Body>
    </Container>
    </>
  );
};

export default Perfil;

const styles = StyleSheet.create({
  text :{
    textAlign: 'center',
    margin: 8,
    fontSize: 16,
    marginBottom: 8,
    marginTop: 15,
    color: '#696969',
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    color: '#A020F0',
  },
});