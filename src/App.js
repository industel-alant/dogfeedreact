import React, { Component } from 'react';
import Header from './components/Header';
import {Calculator} from './components/Calculator';

class App extends Component {
  render() {
    return (
      <div>
      <Header />
      <Calculator name = "Snoop"
                  amount = {5000}
                  cost = {22.20}
                  age =  {5}
                  weight = {5} />
      </div>
    );
  }
}

export default App;


