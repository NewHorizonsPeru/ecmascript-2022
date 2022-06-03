const printMessage = (messsage) => {
  const name = 'Javascript';
  console.log(`${name} - ${messsage}`);
};

printMessage('Mensaje');

/** THIS **/

function Person() {
  this.name = 'Emely';
  this.lastName = 'Moreno';
  this.age = 31;
  this.printMessage = function () {
    var that = this;
    setTimeout(function () {
      console.log(this);
      console.log(that.name);
    }, 1000);
  };
}

function Person() {
  this.name = 'Emely';
  this.lastName = 'Moreno';
  this.age = 31;
  this.printMessage = function () {
    setTimeout(() => {
      console.log(this);
      console.log(this.name);
    }, 1000);
  };
}

const person = new Person();
person.printMessage();
