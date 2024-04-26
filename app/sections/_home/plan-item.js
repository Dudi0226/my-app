import React, { useState } from 'react'


export default function PlanItem({plan}) {

    const [unit, setUnit] = useState(1);

const addPlan = () => {
    setUnit(unit + 1);
    console.log("add");
};

const minusPlan = () => {
    if (unit > 1){
    setUnit(unit - 1);
    }
    console.log("minus");
};

const getPriceIncreaseFactor = () => {
    const priceIncreasePercentage = 0;
    return 1+(priceIncreasePercentage *(unit-1));
}

const totalPrice = (plan.retailPrice * unit * getPriceIncreaseFactor()).toFixed(1);
  return (
    <div>
    <h1>{plan.name}</h1>
    <h4>{plan.retailPrice}</h4>
    <button onClick={addPlan}>+</button>
    {unit}
    <button onClick={minusPlan}>-</button>
    <h4>{totalPrice}</h4>
    </div>
  )
}
