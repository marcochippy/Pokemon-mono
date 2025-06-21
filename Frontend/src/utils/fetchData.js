const fetchPokemon = async () => {
  try {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=300');
    if (!res.ok) throw new Error(`HTTP error,${res.status}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Error fetching data', error);
  }
};

export { fetchPokemon };
