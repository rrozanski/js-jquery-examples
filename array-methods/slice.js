const week = [
  'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday',
  'Saturday', 'Sunday'
];

const weekend = week.slice(5);
const lastTwoDays = week.slice(-2);

const firstTwoDays = week.slice(0, 2); // not including last item!

console.log(weekend);
console.log(lastTwoDays);
console.log(firstTwoDays);
