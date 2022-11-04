import React, { useState } from 'react';
import { BottomNavigation } from 'react-native-paper';

import ListaAlunos from './ListaAlunos';
import Ficha from './Ficha';
import Perfil from './Perfil';

const Home = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'ficha', icon: 'dumbbell' },
    { key: 'listaAlunos', icon: 'format-list-bulleted' },
    { key: 'perfil', icon: 'account' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    listaAlunos: ListaAlunos,
    ficha: Ficha,
    perfil: Perfil,
  });

  return (
    <>
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
        barStyle={{ backgroundColor: '#6974CF' }}
      />
    </>
  );
};
export default Home;
