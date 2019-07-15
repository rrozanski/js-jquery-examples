const user = {
  fullName: "Jason Kowalski",
  age: 29,
  address: {
    country: "Poland",
    city: "Gdynia"
  },
  additionalInfo: null
};

const userAsAString = JSON.stringify(user);

console.log(userAsAString);
