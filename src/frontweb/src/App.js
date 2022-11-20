import React from 'react';
import { BrowserRouter as Router, Switch, useHistory } from 'react-router-dom'


import Route from './components/Navigations/Route';

import UserProvider from './components/contexts/UserContext';

const App = () => {
  return (
    <Router>
      <UserProvider>
          <Route />
      </UserProvider>
    </Router>
  );
};
export default App;
