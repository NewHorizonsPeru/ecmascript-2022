const country = {
  id: 27,
  iso: 'PE',
  name: 'PERU',
  coin: 'PEN',
};

//const {heroes, setHeroes} = useState({});

const { id, coin, ...rest } = country;
console.log(rest);
