var user = 'John Scope';
var userId = 157;

function showUserName() {
  user = 'John Function';
  console.log(`User: ${user}, ID: ${userId}`);
}

console.log(`User: ${user}, ID: ${userId}`);
showUserName();
