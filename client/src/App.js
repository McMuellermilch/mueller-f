import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';

import Heading from './components/heading/heading';
import Body from './components/body/body';
import Login from './components/login/login';
import Footer from './components/footer/footer';
import { AuthProvider } from './components/Auth';

import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Heading />

      <Router>
        <Route exact path="/" component={Body} />
        <AuthProvider>
          <Route exact path="/login" component={Login} />
        </AuthProvider>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
