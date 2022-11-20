import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Cadastro from '../pages/Cadastro';
import Login from '../pages/Login';

const Stack = createNativeStackNavigator();

const Auth = () => {
  return (
    <Stack.Navigator initialRouteName="" screenOptions={{ header: () => null }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Cadastro" component={Cadastro} />
    </Stack.Navigator>
  );
};

export default Auth;
