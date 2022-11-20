import React, { useEffect, useState } from 'react';
import { List } from 'react-native-paper';
import { FlatList } from 'react-native';

import Header from '../components/Header';
import Container from '../components/Container';
import Body from '../components/Body';

import { useNavigation } from '@react-navigation/native';
import {getPerfil} from '../services/auth.services';
import { useIsFocused } from '@react-navigation/native';
import {useUser} from '../contexts/UserContext';

const Alunos = () => {
 
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [users, setUsers] = useState([]);
  const [checked, setChecked] = React.useState(false);

  useEffect(() => {

    getPerfil().then(dados => {
      console.log(dados);
      setUsers(dados);
    });
  }, [isFocused]);

  const renderItem = ({ item }) => (
    <>
      <List.Item
        title={'Nome: ' + item.name}
        description={
          'Email: ' + item.email
        }
      />
    </>
  );

  return (
    <Container>
      <Header title={'Lista de Alunos'} />
      <Body>
        <FlatList
          data={users}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </Body>
    </Container>
  );
};

export default Alunos;
