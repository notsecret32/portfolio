import { cn } from '@/lib/utils';
import Link from 'next/link';

const links = [
  {
    icon: 'ri-linkedin-fill',
    href: 'https://www.linkedin.com/in/alexander-skvorchevskiy',
  },
];

export const Footer = () => {
  return (
    <div className="w-full h-14 border-t-2 flex justify-start items-center">
      <div className="flex items-center justify-center px-6 border-r-2 h-full">
        <p>find me in:</p>
      </div>
      {links.map(({ icon, href }) => (
        <Link
          key={href}
          className="px-4 border-r-2"
          href={href}
          target="_blank"
        >
          <i className={cn(icon, 'ri-2x')} />
        </Link>
      ))}
      <Link
        className="flex justify-center items-center px-8 ml-auto border-l-2 h-full gap-2"
        href="https://github.com/notsecret32"
        target="_blank"
      >
        <p>@notsecret32</p>
        <i className="ri-github-fill ri-xl"></i>
      </Link>
    </div>
  );
};
