function printMessage(message) {
  message = typeof message !== 'undefined' ? message : 'Default Value';
  console.log(message);
}

function printMessage(message = 'Default Value') {
  console.log(message);
}

printMessage();
