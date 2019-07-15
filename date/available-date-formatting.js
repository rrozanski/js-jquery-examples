const now = new Date();

const toString = now.toString();
const toDateString = now.toDateString();
const toLocaleString = now.toLocaleString();
const toLocaleDateString = now.toLocaleDateString();
const toUTCString = now.toUTCString();
const toISOString = now.toISOString();

console.log(`"toString": ${toString}`);
console.log(`"toDateString": ${toDateString}`);
console.log(`"toLocaleString": ${toLocaleString}`);
console.log(`"toLocaleDateString": ${toLocaleDateString}`);
console.log(`"toUTCString": ${toUTCString}`);
console.log(`"toISOString": ${toISOString}`);
