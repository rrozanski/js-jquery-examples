const getUserId = () => {
  return new Promise(((resolve, reject) => {
    setTimeout(() => resolve(1), 500);
  }));
};

const showAllIds = async () => {
  const firstUserId = await getUserId();
  console.log(firstUserId);
  console.log(2);
  console.log(3);
};

showAllIds();
