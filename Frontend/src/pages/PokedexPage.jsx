import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import fetchPokemon from '../utils/fetchData';
import { transformPokemonName } from '../utils/transformPokemonName';

function PokedexPage() {
  const [pokemonList, setPokemonList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchingPokemon = async () => {
      setPokemonList(await fetchPokemon());
    };
    fetchingPokemon();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-purple-200 p-6 text-black">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Pokédex</h1>
        <button
          onClick={() => navigate('/')}
          className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700"
        >
          Back to Home
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {pokemonList.map((pokemon, index) => (
          <div
            key={index}
            className="bg-white rounded-lg p-4 shadow-md hover:scale-105 transition transform text-center"
          >
            <img
              src={`https://play.pokemonshowdown.com/sprites/gen5ani/${transformPokemonName(pokemon.name)}.gif`}
              alt={pokemon.name}
              className="mx-auto w-17 h-17 mb-2 object-contain pixelated"
            />
            <h2 className="text-xl capitalize font-semibold mb-2">{pokemon.name}</h2>
            <p className="text-sm text-gray-600 mb-1"># {pokemon.id}</p>
            <p>
              <strong>HP:</strong> {pokemon.stats[0].base_stat}
            </p>
            <p>
              <strong>Speed:</strong> {pokemon.stats[1].base_stat}
            </p>
            <p>
              <strong>Attack:</strong> {pokemon.stats[2].base_stat}
            </p>
            <p>
              <strong>Defense:</strong> {pokemon.stats[3].base_stat}
            </p>
            <p>
              <strong>Special-Attack:</strong> {pokemon.stats[4].base_stat}
            </p>
            <p>
              <strong>Special-Defense:</strong> {pokemon.stats[5].base_stat}
            </p>
            <div className="flex justify-center gap-2 mt-3 flex-wrap">
              {pokemon.types.map((typeObj, i) => (
                <span key={i} className="px-2 py-1 text-sm rounded-full bg-indigo-200 text-indigo-800 capitalize">
                  {typeObj.type.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PokedexPage;
