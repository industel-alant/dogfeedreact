import React, { Component } from 'react';
import Header from './components/Header';
import {Calculator} from './components/Calculator';
import DogDetailsForm from './components/DogDetailsForm'

class App extends Component {

constructor(props) {
  super(props) 
    this.state = {
      NameText: " ",
      WeightValue: 0,
      AmountValue: 0,
      CostValue: 0
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

  AmountUpdate(value) {
    this.setState(
      {
        AmountValue: value
      }
    )
  }

  CostUpdate(value) {
    this.setState(
      {
        CostValue: value
      }
    )
  }


  render() {
    return (
      <div>
      
      <Header />
      <Calculator name = {this.state.NameText}
                  amount = {this.state.AmountValue}
                  cost = {this.state.CostValue}
                  age =  {13}
                  weight = {this.state.WeightValue}
                  />
      <DogDetailsForm
      NameUpdate={this.NameUpdate.bind(this)}
      WeightUpdate={this.WeightUpdate.bind(this)}
      TheAmountValue={this.AmountUpdate.bind(this)}
      CostValue={this.TheCostUpdate.bind(this)}
      />
      </div>
    );
  }
}

export default App;


