import React, { useEffect, useState } from 'react';
import { List, Item, Text, FAB, Checkbox } from 'react-native-paper';
import { FlatList, StyleSheet,View } from 'react-native';

import Header from '../components/Header';
import Container from '../components/Container';
import Body from '../components/Body';

import { useNavigation } from '@react-navigation/native';
import {getLocal} from '../services/ficha.services';
import { useIsFocused } from '@react-navigation/native';

const Locais = () => {
 
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [locais, setLocais] = useState([])
  const [localMessage, setLocalMessage] = useState('')


  useEffect(() => {

    getLocal().then(dados => {
      console.log(dados);
      setLocais(dados);
    });
  }, [isFocused]);

  const renderItem = ({ item }) => (
    <>
      <List.Item
        title={'Local: ' + item.name}
        description={
          'Preço: ' + item.cost + (' - Descrição: ' + item.descricao)
        }
        onPress={() => navigation.navigate('Local', { item })}
      />
    </>
  );
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);

  return (
    <Container>
      <Header title={'Meus Locais'} />
      <Body>
        <FlatList
          data={locais}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
        <List.Section title="Accordions">
          <List.Accordion
            title="Uncontrolled Accordion"
            left={props => <List.Icon {...props} icon="folder" />}>
            <List.Item title="First item" />
            <List.Item title="Second item" />
          </List.Accordion>

          <List.Accordion
            title="Controlled Accordion"
            left={props => <List.Icon {...props} icon="folder" />}
            expanded={expanded}
            onPress={handlePress}>
            <List.Item title="First item" />
            <List.Item title="Second item" />
          </List.Accordion>
        </List.Section>
        
        <FAB
          style={styles.fab}
          small
          icon="plus"
          onPress={() => navigation.navigate('Local')}
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
    backgroundColor: '#ffbb33',
  },
});

export default Locais;
