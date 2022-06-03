/** ES5 **/
var arrayCountries = ['Perú', 'Chile', 'Colombia', 'Argentina', 'Brasil'];
var peru = arrayCountries[0];
var chile = arrayCountries[1];
var colombia = arrayCountries[2];
var argentina = arrayCountries[3];
var brasil = arrayCountries[4];
console.log(peru, chile, argentina);

/** ES6 **/
const arrayCountries = ['Perú', 'Chile', 'Colombia', 'Argentina', 'Brasil'];
const [country_01, country_02, country_03, country_04, country_05] =
  arrayCountries;
console.log(country_01, country_02, country_03);

const user = {
  username: 'jwt',
  role: 'ADMIN',
  firstName: 'Juan',
};

const { username, role, firstName: nombre } = user;
console.log(username, role, nombre);
