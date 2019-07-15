const ids = [1, 2, 3, 4];
[firstId, secondId] = ids;
[, , , lastId] = ids;

console.log('firstId: ', firstId);
console.log('secondId: ', secondId);
console.log('lastId: ', lastId);

const user = {
  firstName: 'John',
  lastName: 'Doe',
  phone: '123-456-789'
};
const { phone } = user;
const { phone: contactPhone } = user;

console.log('phone: ', phone);
console.log('contactPhone: ', contactPhone);
