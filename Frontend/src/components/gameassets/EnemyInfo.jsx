import { useState } from 'react';
import HPBarEnemy from '../../assets/EnemyInfo.png';
import { useContext } from 'react';
import Context from '../../utils/Context';

function EnemyInfo() {
  const { aiPokemon } = useContext(Context);
  const [isHovered, setIsHovered] = useState(false);

  const aiHpPercentage = aiPokemon ? (aiPokemon.hp / aiPokemon.maxHp) * 100 : 100;

  const getHpBarColor = percentage => {
    if (percentage > 60) return 'bg-green-500';
    if (percentage > 20) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <div className="relative z-3" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <img src={HPBarEnemy} alt="" className="w-120" />
      <div className="absolute text-[2.05rem] tracking-normal text-black bottom-17 left-8  ">
        <p className="capitalize"> {aiPokemon.name}</p>
      </div>
      <div className="absolute top-16 right-15 w-59 -z-1">
        <div className="w-full bg-gray-300 h-10">
          <div
            className={`h-10 ${getHpBarColor(aiHpPercentage)} transition-all duration-500`}
            style={{ width: `${aiHpPercentage}%` }}
          ></div>
        </div>
      </div>
      <div
        className={`
        absolute top-30 left-5 w-[82%] bg-[#F8F8D8] border-5 border-[#506860] rounded-b-2xl
        overflow-hidden transition-all duration-300 ease-in-out
        ${isHovered ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}
      `}
      >
        <div className="text-[1.2rem] p-4">
          <p>
            HP: {aiPokemon.hp} / {aiPokemon.maxHp}
          </p>
          <p>Type: {aiPokemon.types.join(', ')}</p>
          <p>Speed: {aiPokemon.speed}</p>
          <p>Attack: {aiPokemon.attack}</p>
          <p>Defense: {aiPokemon.defense}</p>
          <p>Special-Attack: {aiPokemon.specialAttack}</p>
          <p>Special-Defense: {aiPokemon.specialDefense}</p>
        </div>
      </div>
    </div>
  );
}

export default EnemyInfo;
