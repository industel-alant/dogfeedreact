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

    AmountUpdate() { 
        const val = this.refs.TheAmountValue.value
        this.props.TheAmountValue(val)
        console.log(val)
    }

    CostUpdate() { 
        const val = this.refs.TheCostValue.value
        this.props.TheCostValue(val)
        console.log(val)
    }

    AgeUpdate8() {
        const val = this.refs.AgeValue8.value
        console.log(val)
    }
    AgeUpdate7() {
        const val = this.refs.AgeValue7.value
        console.log(val)
    }

    AgeUpdate4() {
        const val = this.refs.AgeValue4.value
        console.log(val)
    }

    AgeUpdate3() {
        const val = this.refs.AgeValue3.value
        console.log(val)
    }

    AgeUpdate2() {
        const val = this.refs.AgeValue2.value
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
                {/* <label>Dog's Age: </label>
                    <p><input type="radio" Name="age" value="8" ref="AgeValue8" onClick={this.AgeUpdate8.bind(this)}/>Under 4 Months</p>
                    <p><input type="radio" Name="age" value="7" ref="AgeValue7" onClick={this.AgeUpdate7.bind(this)}/>4 - 6</p>
                    <p><input type="radio" Name="age" value="4" ref="AgeValue4" onClick={this.AgeUpdate4.bind(this)}/>6 - 10</p>
                    <p><input type="radio" Name="age" value="3" ref="AgeValue3" onClick={this.AgeUpdate3.bind(this)}/>10 - 12</p>
                    <p><input type="radio" Name="age" value="2" ref="AgeValue2" onClick={this.AgeUpdate2.bind(this)}/>12 Months & Over.</p> */}
                <label>Dog's Weight(kg): </label>
                    <input
                    type = "Number"
                    placeholder = "eg. 5.25"
                    ref="TheWeightValue"
                    onChange={this.WeightUpdate.bind(this)}
                    defaultValue="5000"
                />
                <label>Amount of Food(g): </label>
                    <input
                    type = "Number"
                    placeholder = "eg. 100"
                    ref="TheAmountValue"
                    onChange={this.AmountUpdate.bind(this)}
                />
                <label>Cost of Food(£x.xx): </label>
                    <input
                    type = "Number"
                    placeholder = "eg. 3.50"
                    ref="TheCostValue"
                    onChange={this.CostUpdate.bind(this)}
                />
            </form>
        )
    }
}

export default DogDetailsForm