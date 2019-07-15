const user = {
  firstName: 'John',
  lastName: 'Doe'
};

function getFullName(user) {
  return user.firstName + ' ' + user.lastName;
}

console.log(getFullName(user));
