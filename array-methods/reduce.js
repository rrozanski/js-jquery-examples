const fruits = [
  { type: 'apple', quantity: 4, price: 2 },
  { type: 'orange', quantity: 3, price: 1.5 }
];

const totalCost = fruits.reduce((totalValue, currentItem) => {
  return totalValue + (currentItem.quantity * currentItem.price)
}, 0);

console.log(totalCost);
