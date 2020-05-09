import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';

import Heading from './components/heading/heading';
import Body from './components/body/body';
import Footer from './components/footer/footer';

import { Card, Image } from 'semantic-ui-react';

function App() {
  return (
    <div className="App">
      <Heading />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
