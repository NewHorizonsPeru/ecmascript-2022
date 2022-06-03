/** SPREAD -> [VALORES] => LISTA DE VALORES **/

function printMessage(a) {
  console.log(a);
  console.log(arguments);
}

printMessage('Spread', 'Javascript', 'ES6', 'New Horizons 2022');

function printMessage(a, b, c) {
  console.log(a);
  console.log(b);
  console.log(c);
}

var arrayValues = ['Pablo', 'Javascript', 'ES6'];
//printMessage(arrayValues[0], arrayValues[1], arrayValues[2]);
//printMessage(...arrayValues);

var arrayX = ['Pablo', 1, true, ...arrayValues];
console.log(arrayX);

var userData = {
  username: 'mmoreno',
  password: '123456',
  active: true,
  firstName: 'Marcial',
};

var changePassword = {
  username: 'anonymous',
  password: 'P4$$w0rd',
};

var userUpdate = {
  ...userData,
  ...changePassword,
};

console.log(userUpdate);
