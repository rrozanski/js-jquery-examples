const user = {
  firstName: 'John',
  lastName: 'Doe'
};

// const getFullName = (user) => {
//   return user.firstName + ' ' + user.lastName;
// };

const getFullName = user => user.firstName + ' ' + user.lastName;

console.log(getFullName(user));

setTimeout(() => {
  console.log('It\'s working!');
}, 500);
