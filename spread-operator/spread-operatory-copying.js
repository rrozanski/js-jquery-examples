const ids = [1, 2, 3, 4, 5];
const idsCopy = [...ids];

console.log('ids: ', ids);
console.log('idsCopy: ', idsCopy);

const user = {
  firstName: 'John',
  lastName: 'Doe'
};
const userCopy = { ...user };

console.log('user: ', user);
console.log('userCopy: ', userCopy);
