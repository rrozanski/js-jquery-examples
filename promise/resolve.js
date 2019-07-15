const getUserId = () => {
  return new Promise(((resolve, reject) => {
    setTimeout(() => {
      resolve(1);
    }, 500);
  }));
};

getUserId().then(result => console.log(result));
console.log(2);
console.log(3);

// getUserId()
//   .then(result => {
//     console.log(result);
//     console.log(2);
//     console.log(3);
//   });
