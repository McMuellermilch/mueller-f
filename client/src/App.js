import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';

import Heading from './components/heading/heading';
import Body from './components/body/body';
import Login from './components/login/login';
import Footer from './components/footer/footer';

import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Heading />
      <Router>
        <div>
          <Route exact path="/" component={Body} />
          <Route exact path="/login" component={Login} />
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
