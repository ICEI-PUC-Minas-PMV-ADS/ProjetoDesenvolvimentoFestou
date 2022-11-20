import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Route from './src/Navigations/Route';

import UserProvider from './src/contexts/UserContext';

const App = () => {
  return (
    <UserProvider>
      <NavigationContainer>
        <Route />
      </NavigationContainer>
    </UserProvider>
  );
};
export default App;
