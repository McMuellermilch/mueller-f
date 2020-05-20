import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Heading from './components/heading/heading';
import Body from './components/body/body';
import MgmtLogin from './components/login/login';
import Footer from './components/footer/footer';
import { AuthProvider } from './components/Auth';
import ManagementConsole from './components/managementConsole/managementConsole';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <div className="App">
      <Heading />

      <Router>
        <Route exact path="/" component={Body} />
        <AuthProvider>
          <Route exact path="/management-login" component={MgmtLogin} />
          <PrivateRoute
            exact
            path="/management-console"
            component={ManagementConsole}
          />
        </AuthProvider>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
