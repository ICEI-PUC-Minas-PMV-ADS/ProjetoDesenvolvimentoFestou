import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Select } from 'react-native';
import {
  Text,
  RadioButton,
  TextInput,
  Button,
  Appbar,
  Checkbox,
  List,
} from 'react-native-paper';

import Header from '../components/Header';
import Container from '../components/Container';
import Body from '../components/Body';
import {deleteLocal,updateLocal,insertLocal} from '../services/local.services';


import { useNavigation } from '@react-navigation/native';


const Local = ({ route }) => {
  const navigation = useNavigation();
  const { item } = route.params ? route.params : {};

  const [nome, setNome] = useState('');
  const [cost, setCost] = useState('');
  const [descricao, setDescricao] = useState('');
  const [endereco, setEndereco] = useState('');
  const [checked, setChecked] = useState('');

  useEffect(() => {
    if (item) {
      setNome(item.name);
      setCost(item.cost);
      setDescricao(item.descricao);
      setEndereco(item.endereco);
      setChecked(item.checked);
    }
  }, [item]);

  const handleSalvar = () => {
    if (item) {
      updateLocal({
        category: category,
        nome: nome,
        cost:cost,
        descricao: descricao,
        endereco:endereco,
        id: item.id,
      }).then(res => {
        navigation.goBack();
      });
    } else {
      insertLocal({
        category: category,
        nome: nome,
        cost:cost,
        descricao: descricao,
        endereco:endereco,
      }).then(res =>{
        navigation.goBack();
      });
    }
  };

  const handleExcluir = () => {
    deleteLocal(item.id).then( res =>{
      navigation.goBack();
    });
  };

  return (
    <Container>
      <Header title={'Local'} goBack={() => navigation.goBack()}>
        {item && (
          <Appbar.Action
            icon="trash-can"
            onPress={handleExcluir}
          />
        )}
      </Header>
      <Body>

        <TextInput
          label="Nome do Local"
          value={nome}
          onChangeText={(text) => setNome(text)}
        />
        <TextInput
          label="Preço do local:"
          value={cost}
          onChangeText={(text) => setCost(text)}
        />
        <TextInput
          label="Descrição do local:"
          value={descricao}
          onChangeText={(text) => setDescricao(text)}
        />
        <TextInput
          label="Endereço"
          value={endereco}
          onChangeText={(text) => setEndereco(text)}
        />

        <Button
          mode="contained"
          style={{ marginTop: 30, backgroundColor: '#222', textColor: '#ffbb33' }}
          onPress={handleSalvar}>
          Salvar
        </Button>
      </Body>
    </Container>
  );
};

const styles = StyleSheet.create({
  tipo: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 1,
  },
  container: {
    flexDirection: 'column',
    alignSelf: 'left',
    margin: 1,
  },
});

export default Local;
