import { useState } from 'react';
import HPBarEnemy from '../../assets/EnemyInfo.png';
import { capitalizePokemonName } from '../../utils/transformPokemonName';
import { useContext } from 'react';
import GameContext from '../../utils/Context';

function EnemyInfo() {
  const aiPokemon = useContext(GameContext);
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="relative" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <img src={HPBarEnemy} alt="" className="w-120" />
      <div className="absolute text-[2.05rem] tracking-normal text-black bottom-17 left-8">
        {aiPokemon.name}
        {/* {capitalizePokemonName(aiPokemon.name)} */}
      </div>
      <div
        className={`
        absolute top-30 left-0 w-110 bg-blue-100 border-2 border-blue-300 rounded-b-lg
        overflow-hidden transition-all duration-300 ease-in-out
        ${isHovered ? 'max-h-56 opacity-100' : 'max-h-0 opacity-0'}
      `}
      >
        <div className="p-4">
          <h3 className="font-bold text-lg">Additional Info</h3>
          <p>Base HP: 20</p>
          <p>Type: Normal</p>
          <p>Speed: 0</p>
          <p>Attack: 0</p>
          <p>Defense: 0</p>
          <p>Special-Attack: 0</p>
          <p>Special-Defense: 0</p>
        </div>
      </div>
    </div>
  );
}

export default EnemyInfo;
