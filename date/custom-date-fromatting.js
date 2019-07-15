const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const months = ['January', 'February', 'March', 'April', 'May',
  'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const now = new Date();

const dayName = weekDays[now.getDay()];
const dayOfMonth = now.getDate();
const monthName = months[now.getMonth()];
const year = now.getFullYear();

const formattedDate = `${dayName}, ${dayOfMonth} ${monthName} ${year}`;

console.log(formattedDate);
