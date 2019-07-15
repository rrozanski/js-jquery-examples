const getUserId = () => {
  return new Promise(((resolve, reject) => {
    setTimeout(() => {
      reject('User not found!');
    }, 500);
  }));
};

getUserId()
  .then(result => console.log('User ID: ', result))
  .catch(error => console.log(error));
console.log('User ID: ', 2);
console.log('User ID: ', 3);
