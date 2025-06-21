// import Grass from '../../assets/background-1.png';
import PokemonEnemy from './PokemonEnemy';
import PokemonTrainer from './PokemonTrainer';
import PokemonInfo from './PokemonInfo';
import EnemyInfo from './EnemyInfo';
import Prof from '../../assets/Spr-RS-Birch.png';

function GameVisual() {
  return (
    <div className="relative pixelated">
      <img src="/background-1.png" alt="" className="w-full " />
      <div className=" absolute bottom-52 right-47">
        <PokemonEnemy />
      </div>
      <div className="absolute -bottom-7 left-42">
        <PokemonTrainer />
      </div>
      <div className="absolute bottom-3 right-25">
        <PokemonInfo />
      </div>
      <div className="absolute top-20 left-25">
        <EnemyInfo />
      </div>
    </div>
  );
}

export default GameVisual;
