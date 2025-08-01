import Image from 'next/image';

import { HeroSection } from '@/components/home/hero-section';
import { SnakeGame } from '@/components/home/snake-game';

export default function HomePage() {
  return (
    <div className="relative flex flex-1 items-center justify-center overflow-hidden">
      <div className="w-full max-w-[1280px] mx-auto flex justify-center items-center gap-[146px]">
        <HeroSection />
        <SnakeGame />
      </div>

      <Image
        className="absolute right-0 !top-[15%] !translate-x-[20%] -z-10 pointer-events-none select-none -rotate-[20deg]"
        src="/images/blue-blur.png"
        alt="Blue Blur"
        fill
        priority
      />
      <Image
        className="absolute right-0 !top-0 !translate-x-[15%] -z-10 pointer-events-none select-none rotate-[220deg]"
        src="/images/green-blur.png"
        alt="Green Blur"
        fill
        priority
      />
    </div>
  );
}
