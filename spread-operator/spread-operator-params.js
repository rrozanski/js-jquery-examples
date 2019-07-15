function addUser(firstName, lastName, ...details) {
  console.log('First Name: ', firstName);
  console.log('Last Name: ', lastName);
  console.log('Details: ', details.join(', '));
}

addUser('John', 'Doe', 'Age: 19', 'City: Gdynia', 'Phone: 123-456-789');
