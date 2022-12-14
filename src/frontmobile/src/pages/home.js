import React, { useState } from 'react';
import { BottomNavigation, Text } from 'react-native-paper';

import Perfil from './Perfil';
import Locais from './MeusLocais.jsx';

const Home = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'locais', focusedIcon: 'party-popper', unfocusedIcon: 'party-popper' },
    { key: 'perfil', focusedIcon: 'account' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    locais:Locais,
    perfil: Perfil,
  });

  return (
    <>
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
        activeColor="#ffbb33"
        inactiveColor='#ffbb33'
        shifting={true}
        sceneAnimationType={'opacity'}
        theme={{colors: {secondaryContainer: '#fff'}}}
        barStyle={{ backgroundColor: '#222'}}
      />
    </>
  );
};

export default Home;
