import React from 'react';
import { useEffect, useState } from 'react';
import GameVisual from './gameassets/GameVisual';
import BattleMenu from './gameassets/BattleMenu';
import fetchPokemon from '../utils/fetchData';
import GameContext from '../utils/Context';

function Game() {
  const [playerPokemon, setPlayerPokemon] = useState(null);
  const [aiPokemon, setAiPokemon] = useState(null);

  const [playerMove, setPlayerMove] = useState(null);
  const [aiMove, setAiMove] = useState(null);

  const [isPlayerMoveLocked, setIsPlayerMoveLocked] = useState(false);
  const [isAiMoveLocked, setIsAiMoveLocked] = useState(false);

  const [winner, setWinner] = useState(null);

  // Initial, hardcoded w/ placeholder
  useEffect(() => {
    const loadPokemon = async () => {
      const data = await fetchPokemon();
      if (!data) return;
      console.log(data);
      const playerEntry = 'pikachu';
      // const playerEntry = data.results.find(p => p.name === myPokemonName);
      // const aiEntry = data.results.find(p => p.name === enemyName);
      const aiEntry = 'pikachu';

      const dataFromApi = async url => {
        const res = await fetch(url);
        const fullData = await res.json();

        const statMap = Object.fromEntries(fullData.stats.map(s => [s.stat.name, s.base_stat]));

        const types = fullData.types.map(t => t.type.name);

        return {
          name: fullData.name,
          hp: statMap['hp'],
          attack: statMap['attack'],
          defense: statMap['defense'],
          specialAttack: statMap['special-attack'],
          specialDefense: statMap['special-defense'],
          speed: statMap['speed'],
          types
        };
      };

      if (playerEntry && aiEntry) {
        const [playerFull, aiFull] = await Promise.all([dataFromApi(playerEntry.url), dataFromApi(aiEntry.url)]);

        setPlayerPokemon(playerFull);
        setAiPokemon(aiFull);
      }
    };

    loadPokemon();
    // setPlayerPokemon(getPlaceholderPokemon('pikachu'));
    // setAiPokemon(getPlaceholderPokemon('charmander'));
  }, []);

  // If player selected move, AI selects automatically (moves later from fetch, not mock)
  useEffect(() => {
    if (isPlayerMoveLocked && !isAiMoveLocked && aiPokemon) {
      const randomIndex = Math.floor(Math.random() * aiPokemon.moves.length);
      setAiMove(aiPokemon.moves[randomIndex]);
      setIsAiMoveLocked(true);
    }
  }, [isPlayerMoveLocked, isAiMoveLocked, aiPokemon]);

  // Lock player move
  const handlePlayerMoveSelect = move => {
    if (!isPlayerMoveLocked) {
      setPlayerMove(move);
      setIsPlayerMoveLocked(true);
    }
  };
  return (
    <GameContext.Provider value={[playerPokemon, setPlayerPokemon, aiPokemon, setAiPokemon]}>
      <div
        style={{ fontFamily: 'PokemonFont, sans-serif' }}
        className="w-[1200px] h-[800px] mx-auto mt-10 relative tracking-wider "
      >
        <GameVisual />
        <BattleMenu />
      </div>
    </GameContext.Provider>
  );
}

export default Game;
