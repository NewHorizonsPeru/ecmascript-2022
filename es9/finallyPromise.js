const printMessage = () => {
  return new Promise((resolve, reject) => {
    true ? resolve('OK 😁') : reject('ERROR 😔');
  });
};

printMessage()
  .then((data) => console.log(data))
  .catch((error) => console.log(error))
  .finally(() => console.log('Finally Promise'));
