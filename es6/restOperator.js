/** REST -> LISTA DE VALORES => [VALORES] **/
/** REST -> LISTA DE VALORES => {VALORES} **/

function printMessage(message, title, ...rest) {
  console.log(message);
  console.log(title);
  console.log(arguments);
  console.log(rest);
}

printMessage('ECMAScript', 'Javascript', 'ES6', 'New Horizons 2022');
