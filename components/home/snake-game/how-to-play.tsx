import { cn } from '@/lib/utils';

export const HowToPlay = () => {
  return (
    <div className="flex flex-col gap-2 w-full bg-slate-800 rounded-md p-2.5">
      <div>
        <p>// use keyboard</p>
        <p>// arrows to play</p>
      </div>
      <div className="grid grid-rows-2 grid-cols-3 gap-2">
        <ArrowButton direction="top" className="row-start-1 col-start-2" />
        <ArrowButton direction="left" className="row-start-2 col-start-1" />
        <ArrowButton direction="bottom" className="row-start-2 col-start-2" />
        <ArrowButton direction="right" className="row-start-2 col-start-3" />
      </div>
    </div>
  );
};

type ArrowDirection = 'top' | 'right' | 'bottom' | 'left';

interface ArrowButtonProps {
  direction: ArrowDirection;
  className?: string | undefined;
}

const ArrowButton = ({ className, direction }: ArrowButtonProps) => {
  return (
    <div
      className={cn(
        'px-4 py-1.5 bg-gray-950 border rounded-md flex justify-center items-center cursor-pointer',
        className
      )}
    >
      <i className={arrows[direction]} />
    </div>
  );
};

const arrows: Record<ArrowDirection, string> = {
  top: 'ri-arrow-up-s-fill',
  right: 'ri-arrow-right-s-fill',
  bottom: 'ri-arrow-down-s-fill',
  left: 'ri-arrow-left-s-fill',
};
