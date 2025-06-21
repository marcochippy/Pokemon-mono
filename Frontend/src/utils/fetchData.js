function fetchPokemon() {
  const apiKey = 'https://pokeapi.co/api/v2/pokemon?limit=386';

  const fetchedPokemon = async searchPokemon => {
    if (searchPokemon) {
      const res = await fetch(apiKey + searchPokemon);
      if (!res.ok) {
        throw new Error(`HTTP Error! ${res.status}`);
      }
      const data = await res.json();
      return data;
    } else {
      try {
        const res = await fetch(apiKey);
        if (!res.ok) {
          throw new Error(`HTTP Error! ${res.status}`);
        }
        const data = await res.json();
        const pokemonArray = data.results;

        const pokemonData = await Promise.all(
          pokemonArray.map(async pokemon => {
            const pokemonUrl = pokemon.url;
            const res = await fetch(pokemonUrl);
            if (!res.ok) {
              throw new Error(`HTTP Error! ${res.status}`);
            }
            return await res.json();
          })
        );
        return pokemonData;
      } catch (err) {
        console.log('ERROR FETCHING POKEMON', err);
      }
    }
  };
  return fetchedPokemon();
}

export default fetchPokemon;
