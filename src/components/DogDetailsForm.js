import React, { Component } from 'react'

class DogDetailsForm extends Component {
   
    NameUpdate() { 
       const val = this.refs.NameValue.value
       this.props.NameUpdate(val)
    }

    WeightUpdate() { 
        const val = this.refs.TheWeightValue.value
        this.props.WeightUpdate(val)
        console.log(val)
    }


   
    render() {
        return (
            <form>
                <label>Dog's Name: </label>
                    <input
                    type = "text"
                    placeholder = "eg. Snoop"
                    ref="NameValue"
                    onChange={this.NameUpdate.bind(this)}          
                />
                <label>Dog's Age: </label>
                    <input type="radio" Name="age" value="8" onClick={console.log("Clicked it ay he")}/><p>Under 4 Months</p>
                <label>Dog's Weight: </label>
                    <input
                    type = "Number"
                    placeholder = "eg. 5.25"
                    ref="TheWeightValue"
                    onChange={this.WeightUpdate.bind(this)}
                />
            </form>
        )
    }
}

export default DogDetailsForm