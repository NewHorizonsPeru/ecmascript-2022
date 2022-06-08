const request = require('request');

// function getRequestApi(url, callback) {
//   request.get(url, function (error, response, body) {
//     callback(JSON.parse(body));
//   });
// }

// getRequestApi('https://rickandmortyapi.com/api/character', function (data) {
//   const idCharacter = data.results[0].id;
//   console.log(`EL ID DEL PERSONAJE ES: ${idCharacter}`);
//   getRequestApi(
//     `https://rickandmortyapi.com/api/character/${idCharacter}`,
//     function (result) {
//       console.log(`EL NOMBRE DEL PERSONAJE ES: ${result.name}`);
//     }
//   );
// });

function getRequestApi(url) {
  return new Promise((resolve, reject) => {
    request.get(url, function (error, response, body) {
      if (error) reject('500 - ERROR INTERNO');
      resolve(JSON.parse(body));
    });
  });
}

const callApiRaM = async () => {
  const data = await getRequestApi('https://rickandmortyapi.com/api/character');
  const idCharacter = data.results[1].id;
  const result = await getRequestApi(
    `https://rickandmortyapi.com/api/character/${idCharacter}`
  );
  console.log(`EL NOMBRE DEL PERSONAJE ES: ${result.name}`);
};

callApiRaM();
// getRequestApi('https://rickandmortyapi.com/api/character')
//   .then((data) => {
//     const idCharacter = data.results[1].id;
//     console.log(`EL ID DEL PERSONAJE ES: ${idCharacter}`);
//     return getRequestApi(
//       `https://rickandmortyapi.com/api/character/${idCharacter}`
//     );
//   })
//   .then((result) => {
//     console.log(`EL NOMBRE DEL PERSONAJE ES: ${result.name}`);
//   })
//   .catch((error) => console.log(error));
