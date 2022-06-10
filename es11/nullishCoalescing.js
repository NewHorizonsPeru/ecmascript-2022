/**
 * || -> VALIDAR QUE NO SEA UNDEFINED, NULL, FALSE O ZERO
 * ?? -> VALIDAR QUE NO SEA UNDEFINED  O NULL
 * **/

const publish = {
  id: '24ADX72',
  title: 'Ecmascript 11',
  tag: 'es11',
  views: 0,
};

//const views = publish.views || 'No existen visualizaciones aún.';
const views = publish.views ?? 'No existen visualizaciones aún.';
console.log(views);
