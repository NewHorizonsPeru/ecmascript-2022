function moreSync() {
  console.log('INICIO'); //1
  setTimeout(function () {
    console.log('0 SEGUNDOS'); //5
  }, 0);
  Promise.resolve('Promesa 01').then((msg) => console.log(msg)); //3
  Promise.resolve('Promesa 02').then((msg) => console.log(msg)); //4
  console.log('FIN'); //2
}

moreSync();

/**
 * INICIO
 * PROMESA 02
 * PROMESA 01
 * 3 SEGUNDOS
 * FIN
 */
