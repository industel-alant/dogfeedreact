import React from 'react'
import '../stylesheets/container.css'

const percentOperator = (age) => {
    if (age < 4) {
       return 8
    }
    else if (age > 3 && age < 6) {
       return 7
    }
    else if (age > 5 && age < 9) {
       return 4
    }
    else if (age > 8 && age < 12) {
       return 3
    }
    else if (age > 11) {
       return 2
    }
}

const feedAmountOperator = (age) => {
    if (age < 12) {
       return 3
    }
    else if (age > 11) {
       return 2
    }
}

const dayFeedAmount = (weight , age) => {
    var num = percentOperator(age)/100 * (weight*1000) 
    var n = num.toFixed(0)
    return n
}

const perMealAmount = (weight , age) => {
    var num = dayFeedAmount(weight,age)/feedAmountOperator(age)
    var n = num.toFixed(0)
    return n
}

const howLong = (amount , weight ,age) => {
    return Math.floor(amount/dayFeedAmount(weight,age))
  }

const perMealCost = (cost , amount , weight , age) => {
    var num = cost / (amount / perMealAmount(weight,age))
    var n = num.toFixed(2)
    return n
}

export const Calculator = ( {age,
                  cost,
                  name,
                  weight,
                  amount
                  }) => ( 
  <div className="container">
        <h2>A Simple app to calculate the amount of raw dog food to feed your dog each day.
            Input the information and away you go.
        </h2>
        <table>
            <tbody>
                <tr>
                    <th>Name:</th>
                    <td>{name}</td>
                </tr>
                <tr>
                    <th>Age: </th>
                    <td>{age}</td>
                </tr>
                <tr>
                    <th>Cost: </th>
                    <td>£{cost}</td>
                </tr>
                <tr>
                    <th>Weight: </th>
                    <td>{weight}kg</td>
                </tr>
            </tbody>
        </table>    
    <h3>Results...</h3>
    <h4>Feeding Schedule...</h4>
    <p>
        According to {name}'s age and weight, it is recommended that you feed {name} {feedAmountOperator(age)} times a day,
        each meal weighing {perMealAmount(weight,age)}g.  This will mean that {name} will
        be fed a total of {dayFeedAmount(weight,age)+'g'} per day. 
    </p>
    <h4>Raw Feed Cost...</h4>
    <p>
        Using this feeding schedule should mean that {amount}g of raw dog food
        should last {name} around {howLong(amount,weight,age)} days.
        Costing you £{perMealCost(cost , amount , weight,age)} per meal.
    </p>
    <h5>Bought to you in conjunction with Snoop & Dexter</h5>
    </div>
)
    
