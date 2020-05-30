import React, { useState } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import axios from 'axios';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Heading from './components/heading/heading';
import Body from './components/body/body';
import MgmtLogin from './components/login/login';
import Footer from './components/footer/footer';
import ManagementConsole from './components/managementConsole/managementConsole';
import PrivateRoute from './components/PrivateRoute';

function App() {
  const [currentUser, setCurrentUser] = useState({
    username: 'muellefl',
    password: 'test1222',
    email: 'mueller.florian99@outlook.com',
  });

  return (
    <div className="App">
      <Heading />

      <Router>
        <Route exact path="/" component={Body} />
        <Route
          exact
          path="/management-login"
          component={() => <MgmtLogin setCurrentUser={setCurrentUser} />}
        />
        <PrivateRoute
          exact
          path="/management-console"
          component={ManagementConsole}
          currentUser={currentUser}
        />
      </Router>

      <Footer />
    </div>
  );
}

export default App;
