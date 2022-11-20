import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../pages/home';
import Cadastro from '../pages/Cadastro';
import Login from '../pages/Login';
import Local from '../pages/Local.jsx'

const Stack = createNativeStackNavigator();

const Main = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ header:() => null }}>
      <Stack.Screen
          name="Home"
          component={Home}
        />
      <Stack.Screen 
          name="Local" 
          component={Local} 
      />

    </Stack.Navigator>
  );

}


export default Main;