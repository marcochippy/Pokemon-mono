import { useContext } from 'react';
import GameContext from '../../utils/Context';

const pokemonAnimation = myPokemonName => {
  const enemyUrl = `https://play.pokemonshowdown.com/sprites/gen5ani-back/${myPokemonName}.gif`;
  const enemyImg = <img src={enemyUrl} alt="" className="w-70 max-h-70 object-contain" />;
  return enemyImg;
};

function PokemonTrainer() {
  const myPokemonName = useContext(GameContext);
  return <div className="">{pokemonAnimation(myPokemonName)}</div>;
}

export default PokemonTrainer;
