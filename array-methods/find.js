const users = [
  { id: 1, name: 'John', isActive: false },
  { id: 2, name: 'Jane', isActive: true },
  { id: 3, name: 'Thomas', isActive: true }
];

const selectedUser = users.find(user => user.id === 3);

console.log(selectedUser);
