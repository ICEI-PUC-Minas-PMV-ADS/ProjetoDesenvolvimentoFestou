import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import {
  Text,
  RadioButton,
  TextInput,
  Button,
  Appbar,
  Checkbox,
} from 'react-native-paper';

import Header from '../components/Header';
import Container from '../components/Container';
import Body from '../components/Body';
import {deleteExercicio,updateExercicio,insertExercicio} from '../services/ficha.services';


import { useNavigation } from '@react-navigation/native';


const Exercicio = ({ route }) => {
  const navigation = useNavigation();
  const { item } = route.params ? route.params : {};

  const [tipo, setTipo] = useState('');
  const [nome, setNome] = useState('');
  const [series, setSeries] = useState('');
  const [repeticao, setRepeticao] = useState('');
  const [carga, setCarga] = useState('');
  const [instrucoes, setInstrucoes] = useState('');
  const [checked, setChecked] = useState('');

  useEffect(() => {
    if (item) {
      setTipo(item.tipo == "A"? "A": item.tipo == "B" ? "B" : "C");
      setNome(item.nome);
      setSeries(item.series);
      setRepeticao(item.repeticao);
      setCarga(item.carga);
      setInstrucoes(item.instrucoes);
      setChecked(item.checked);
    }
  }, [item, tipo]);

  const handleSalvar = () => {
    if (item) {
      updateExercicio({
        tipo: tipo == "A"? "A" : tipo == "B" ? "B" : "C",
        nome: nome,
        series: series,
        repeticao: repeticao,
        carga: carga,
        instrucoes: instrucoes,
        id: item.id,
      }).then(res => {
        navigation.goBack();
      });
    } else {
      insertExercicio({
        tipo: tipo,
        nome: nome,
        series: series,
        repeticao: repeticao,
        carga: carga,
        instrucoes: instrucoes,
      }).then(res =>{
        navigation.goBack();
      });
    }
  };

  const handleExcluir = () => {
    deleteExercicio(item.id).then( res =>{
      navigation.goBack();
    });
  };

  return (
    <Container>
      <Header title={'Exercício'} goBack={() => navigation.goBack()}>
        {item && (
          <Appbar.Action
            icon="trash-can"
            onPress={handleExcluir}
          />
        )}
      </Header>
      <Body>
        <RadioButton.Group
          onValueChange={(newValue) => setTipo(newValue)}
          value={tipo}>
          <View style={styles.container}>
            <View style={styles.tipo}>
              <RadioButton value='A' color="gold" />
              <Text>A</Text>
            </View>
            <View style={styles.tipo}>
              <RadioButton value='B' color="green" />
              <Text>B</Text>
            </View>
            <View style={styles.tipo}>
              <RadioButton value='C' color="blue" />
              <Text>C</Text>
            </View>
          </View>
        </RadioButton.Group>

        <TextInput
          label="Nome do Exercício"
          value={nome}
          onChangeText={(text) => setNome(text)}
        />
        <TextInput
          label="Series"
          value={series}
          onChangeText={(text) => setSeries(text)}
        />
        <TextInput
          label="Repetições"
          value={repeticao}
          onChangeText={(text) => setRepeticao(text)}
        />
        <TextInput
          label="Carga"
          value={carga}
          onChangeText={(text) => setCarga(text)}
        />
        <TextInput
          label="Instruções"
          value={instrucoes}
          onChangeText={(text) => setInstrucoes(text)}
        />

        <Button
          mode="contained"
          style={{ marginTop: 30, backgroundColor: '#6974CF' }}
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
    margin: 8,
  },
  container: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
});

export default Exercicio;
