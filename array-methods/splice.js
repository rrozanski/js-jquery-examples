const week = [
  'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday',
  'Saturday', 'Sunday'
];

week.splice(5);

console.log(week);

week.splice(2, 3, 'Friday', 'Friday', 'Friday');

console.log(week);
