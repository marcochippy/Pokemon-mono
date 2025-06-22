import PokemonEnemy from './PokemonEnemy';
import PokemonTrainer from './PokemonTrainer';
import PokemonInfo from './PokemonInfo';
import EnemyInfo from './EnemyInfo';
import { useContext, useState } from 'react';
import Context from '../../utils/Context';
import { useEffect } from 'react';
import { useRef } from 'react';

function GameVisual() {
  const { winner } = useContext(Context);
  const [background, setBackground] = useState('background-1.png');
  // const timeoutRef = useRef(null);

  useEffect(() => {
    // const playerLevel = parseFloat(localStorage.getItem('playerLevel')) || 1;

    const backgroundNumber = `background-${Math.floor(Math.random() * 8) + 1}.png`;
    if (localStorage.getItem('winningStreak') > 1 && winner === 'player') {
      setTimeout(() => {
        setBackground(backgroundNumber);
        console.log(backgroundNumber, winner);
      }, 1500);
    }
  }, [winner]);

  return (
    <div className="relative pixelated">
      <img src={background} alt="" className="w-full transition-all duration-1000 ease-in-out" />
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
