const users = [
  { id: 1, name: 'John', isActive: false },
  { id: 2, name: 'Jane', isActive: true },
  { id: 3, name: 'Thomas', isActive: true }
];

const selectedUser = users.filter(user => user.isActive);

console.log(selectedUser);
