"use client"
import React from 'react';

function CoffeeItem({ coffee }) {
  return (
    <div>
      <h3>{coffee.title}</h3>
      <h5>{coffee.ingredients}</h5>
    </div>
  );
}

export default CoffeeItem;