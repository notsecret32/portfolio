import { SNAKE_GAME_FOOD_COUNT } from '@/config/snake-game';
import { cn } from '@/lib/utils';

export const FoodCounter = () => {
  return (
    <div className="px-2.5">
      <p>// food count</p>
      <div className="flex flex-wrap items-center justify-center gap-2 mt-2 mx-4">
        {Array.from({ length: SNAKE_GAME_FOOD_COUNT }).map((_, index) => (
          <Food key={index} />
        ))}
      </div>
    </div>
  );
};

interface FoodProps {
  eaten?: boolean;
}

export const Food = ({ eaten = false }: FoodProps) => {
  return (
    <div
      className={cn('relative w-5 h-5 flex items-center justify-center', {
        ['opacity-30']: eaten,
      })}
    >
      <div className="absolute w-5 h-5 bg-teal-300 opacity-10 rounded-full" />
      <div className="absolute w-3.5 h-3.5 bg-teal-300 opacity-20 rounded-full" />
      <div className="absolute w-2 h-2 bg-teal-300 rounded-full " />
    </div>
  );
};
