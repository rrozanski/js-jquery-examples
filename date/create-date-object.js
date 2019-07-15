const noParams = new Date();
const dateString = new Date('2000-01-01');
const dateStringWithTime = new Date('2000-01-01T12:05:00.000');
const dateStringWithTimeUTC = new Date('2000-01-01T12:05:00.000Z');
const timestamp = new Date(1562747071550);
const withParams = new Date(2000, 0, 1, 12, 5);

console.log(`no params: ${noParams}`);
console.log(`date string without time: ${dateString}`);
console.log(`date string with time: ${dateStringWithTime}`);
console.log(`date string with time UTC: ${dateStringWithTimeUTC}`);
console.log(`timestamp: ${timestamp}`);
console.log(`with params: ${withParams}`);
