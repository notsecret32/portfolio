import Link from 'next/link';

const githubLink = 'https://github.com/notsecret32';

export const HeroSection = () => {
  return (
    <div className="w-full flex flex-col gap-[75px] max-w-1/2">
      <div className="flex flex-col gap-1">
        <p>Hi, all. I am</p>
        <div className="flex flex-col gap-2">
          <h1 className="text-primary-foreground">Alexander Skvorchevsky</h1>
          <h4 className="text-indigo-500">&gt; Frontend Developer</h4>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <p>// complete the game to continue</p>
        <p>// find my profile in GitHub:</p>
        <p>
          <span className="text-indigo-500">const</span>{' '}
          <span className="text-teal-400">githubLink</span>{' '}
          <span className="text-primary-foreground">=</span>{' '}
          <Link
            className="underline underline-offset-4 text-pink-300"
            href={githubLink}
            target="_blank"
          >
            &quot;{githubLink}&quot;
          </Link>
          <span className="text-primary-foreground">;</span>
        </p>
      </div>
    </div>
  );
};
