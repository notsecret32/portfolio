import { cn } from '@/lib/utils';

interface BoardProps {
  children: React.ReactNode;
}

export const Board = ({ children }: BoardProps) => {
  return (
    <div className="w-full max-w-1/2 aspect-square border rounded-md p-16 flex gap-6 inner-shadow backdrop-blur-3xl bg-[linear-gradient(145deg,rgba(23,85,83,0.7)_65%,rgba(67,217,173,0.091)_100%)] relative">
      <Bolt className="top-3 left-3 bg-gradient-to-b from-[#196C6A] from-15% to-[#114B4A] inset-shadow-[0px_1px_2px_rgba(26,130,119,1)] shadow-[2px_2px_4px_rgba(13,67,65,1)]" />
      <Bolt className="top-3 right-3 bg-gradient-to-b from-[#217D7A] from-15% to-[#114B4A] inset-shadow-[0px_1px_2px_rgba(31,129,119,1)] shadow-[2px_2px_4px_rgba(13,67,65,1)]" />
      <Bolt
        className="bottom-3 left-3 bg-gradient-to-b from-[#164C51] from-15% to-[#0D3A40] inset-shadow-[0px_1px_2px_rgba(22,100,92,1)] shadow-[2px_2px_4px_rgba(9,45,50,1)]"
        crossColor="bg-teal-950"
      />
      <Bolt
        className="bottom-3 right-3 bg-gradient-to-b from-[#234B7C] from-15% to-[#122E4F] inset-shadow-[0px_1px_2px_rgba(44,88,141,1)] shadow-[2px_2px_4px_rgba(18,44,78,1)]"
        crossColor="bg-[#163355]"
      />
      {children}
    </div>
  );
};

interface BoltProps {
  className?: string | undefined;
  crossColor?: string | undefined;
}

const Bolt = ({ className, crossColor = 'bg-teal-900' }: BoltProps) => {
  return (
    <div
      className={cn(
        'absolute w-3.5 h-3.5 rounded-full flex items-center justify-center',
        className
      )}
    >
      <div
        className={cn('absolute w-2 h-0.5 rotate-45 rounded-full', crossColor)}
      />
      <div
        className={cn('absolute w-2 h-0.5 -rotate-45 rounded-full', crossColor)}
      />
    </div>
  );
};
