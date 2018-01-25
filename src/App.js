import React, { Component } from 'react';
import Header from './components/Header';
import {Calculator} from './components/Calculator';
import DogDetailsForm from './components/DogDetailsForm'

class App extends Component {

constructor(props) {
  super(props) 
    this.state = {
      NameText: " ",
      WeightValue: 0
    }
  }

  NameUpdate(value) {
    this.setState({
      NameText: value
    })
  }

  WeightUpdate(value) {
    this.setState({
      WeightValue: value
    })
  }


  render() {
    return (
      <div>
      
      <Header />
      <Calculator name = {this.state.NameText}
                  amount = {5000}
                  cost = {22.20}
                  age =  {5}
                  weight = {this.state.WeightValue}
                  />
      <DogDetailsForm
      NameUpdate={this.NameUpdate.bind(this)}
      WeightUpdate={this.WeightUpdate.bind(this)}
      />
      </div>
    );
  }
}

export default App;


