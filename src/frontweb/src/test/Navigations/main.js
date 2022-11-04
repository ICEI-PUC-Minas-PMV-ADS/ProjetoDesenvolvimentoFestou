import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../pages/home';
import Cadastro from '../pages/Cadastro';
import Login from '../pages/Login';
import Exercicio from '../pages/exercicio'

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
          name="Cadastro" 
          component={Cadastro} 
        />
      <Stack.Screen 
          name="Login" 
          component={Login} 
      />
      <Stack.Screen 
          name="Exercicio" 
          component={Exercicio} 
      />

    </Stack.Navigator>
  );

}


export default Main;