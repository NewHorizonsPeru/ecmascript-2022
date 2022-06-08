import axios from 'axios';

async function getRequestApi(url) {
  try {
    /** RESOLVE **/
    const response = await axios.get(url);
    const data = response.data;
    return data;
  } catch (error) {
    /** REJECT **/
    console.log(error);
  }
}

(async () => {
  const pokemon = await getRequestApi(
    'https://pokeapi.co/api/v2/pokemon/ditto'
  );
  console.log(pokemon);
})();
