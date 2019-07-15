class User {
  constructor(age) {
    this.age = age;
  }

  static isAdult(age) {
    return age >= 18;
  }
}

const newUser = new User(25);
console.log(User.isAdult(newUser.age));
console.log(User.isAdult(37));
