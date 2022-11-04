import React, { useEffect, useState } from 'react';
import { List, Item, Text, FAB, Checkbox } from 'react-native-paper';
import { FlatList, StyleSheet,View } from 'react-native';

import Header from '../components/Header';
import Container from '../components/Container';
import Body from '../components/Body';
import {updateExercicio} from '../services/ficha.services';

import { useNavigation } from '@react-navigation/native';
import {getExercicio} from '../services/ficha.services';
import { useIsFocused } from '@react-navigation/native';

const Ficha = () => {
 
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [exercicios, setExercicios] = useState([]);
  const [checked, setChecked] = useState();


  useEffect(() => {

    getExercicio().then(dados => {
      console.log(dados);
      setExercicios(dados);
      setChecked(dados.checked);
    });
  }, [isFocused]);

  const renderItem = ({ item }) => (
    <>
      <List.Item
        title={'Exercício: ' + item.nome}
        description={
          'Séries: ' + item.series + (' - Repetições: ' + item.repeticao) + (' - Carga: ' + item.carga + 'KG')
        }
        onPress={() => navigation.navigate('Exercicio', { item })}
      />
    </>
  );

  return (
    <Container>
      <Header title={'Lista de Exercícios'} />
      <Body>
        <FlatList
          data={exercicios}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
        
        <FAB
          style={styles.fab}
          small
          icon="plus"
          onPress={() => navigation.navigate('Exercicio')}
        />
      </Body>
    </Container>
  );
};

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: '#6974CF',
  },
});

export default Ficha;
