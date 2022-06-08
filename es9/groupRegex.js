// const regexDate = /([0-9]{2})-([0-9]{2})-([0-9]{4})/;
// const match = regexDate.exec('27-05-1992');
// console.log(match[0]);
// console.log(match[1]);
// console.log(match[2]);
// console.log(match[3]);

const regexDate = /(?<dia>[0-9]{2})-(?<mes>[0-9]{2})-(?<anio>[0-9]{4})/;
const match = regexDate.exec('27-05-1992');
const { dia, mes, anio } = match.groups;
console.log(dia);
