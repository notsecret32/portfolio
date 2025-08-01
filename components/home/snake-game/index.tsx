import { Board } from './board';
import { FoodCounter } from './food-counter';
import { HowToPlay } from './how-to-play';
import { PlayingField } from './playing-field';

export const SnakeGame = () => {
  return (
    <Board>
      <div className="w-full grid grid-cols-[55%_auto] gap-6">
        <PlayingField />
        <div className="flex flex-col gap-6">
          <HowToPlay />
          <FoodCounter />
        </div>
      </div>
    </Board>
  );
};
