const values = [1, 0.25, .5, 2.33333];

const prices = values.map((value) => {
  const parsedValue = value.toFixed(2);

  return '$' + parsedValue;
});


console.log(values);
console.log(prices);
