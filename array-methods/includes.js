const fruits = ['kiwi', 'apple', 'banana', 'watermelon'];

console.log('Apple: ', fruits.includes('apple'));
console.log('Orange: ', fruits.includes('orange'));

// old way of checking if item is in the array
console.log('Apple: ', fruits.indexOf('apple') !== -1);
console.log('Orange: ', fruits.indexOf('orange') !== -1);
