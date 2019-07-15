class User {
  constructor(name) { this.name = name; }
}

class Admin extends User {
  constructor(name) {
    super(name);
    this.status = 'admin';
  }

  isAdmin() { return this.status === 'admin'; }
}

const newAdmin = new Admin('John Admin');
console.log(newAdmin);
