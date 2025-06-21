import MenubarBackground from '../../assets/MenuBarBackground.png';
import MenubarOverlay from '../../assets/MenuBarOverlay.png';
import MoveSelector from './MoveSelector';
import { useContext } from 'react';
import GameContext from '../../utils/Context';

function BattleMenu() {
  const playerPokemon = useContext(GameContext);
  return (
    <div className="pixelated">
      <div className="relative">
        <img src={MenubarBackground} alt="" className="w-full" />
        <div className="absolute text-white top-15 left-16 text-[2.9rem]">What will </div>
        <div className="absolute text-white top-30 left-16 text-[2.9rem]">{playerPokemon.name} do?</div>
        <div className="absolute bottom-0 right-0">
          <img src={MenubarOverlay} alt="" className="h-[240px]" />
        </div>
        {/* <div className="p-4 bg-white rounded shadow mt-2">
          <h2>Choose Your Move!</h2>
          <MoveSelector moves={moves} onSelectMove={onSelectMove} isLocked={isLocked} />
        </div> */}
      </div>
    </div>
  );
}

export default BattleMenu;
