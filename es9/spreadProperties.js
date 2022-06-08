const phone = {
  id: '41',
  model: 'S21',
  brand: 'SAMSUNG',
};

const watch = {
  id: 8,
  brand: 'SAMSUNG',
  model: 'S3 42MM',
};

const merge = { ...phone, ...watch };
console.log(merge);

const user = {
  id: '45',
  firstName: 'King',
  lastName: 'Kong',
  gender: 'male',
};

const form = {
  firstName: 'Luciano',
  lastName: 'Perez',
};

const merge = { ...user, ...form };
console.log(merge);
