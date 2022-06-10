const publish = {
  id: '24ADX72',
  title: 'Ecmascript 11',
  tag: 'es11',
  views: 0,
};

//const authorName = (publish.author ?? {}).name ?? 'Unknow';
//const authorName = (publish.author && publish.author.name) ?? 'Unkwnow';
const authorName = publish.authorName?.name ?? 'Unknow';
console.log(authorName);
