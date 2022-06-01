console.log(message);

var message = 'Hoisting';

/**
 *
 *
 *
 * HOISTING CON VARIABLES
 *
 *
 *
 *
 * **/
var message = undefined;
console.log(message);

message = 'Hoisting';

/**
 *
 *
 *
 * HOISTING CON FUNCIONES
 * SI -> VAR Y FUNCTION
 * NO -> CONST Y LET
 * NO -> FUNCIONES ANONIMA
 *
 * **/

function printMessage() {
  console.log('Hoisting');
}
printMessage();

/**
 *
 * HOISTING
 * FUNCTION & VAR
 *
 * **/

console.log(message);
function message() {
  console.log('Funcion');
}

var message = 'Variable';
