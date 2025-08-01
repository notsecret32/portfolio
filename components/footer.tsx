import { cn } from '@/lib/utils';
import Link from 'next/link';

const links = [
  {
    icon: 'ri-linkedin-box-fill',
    href: 'https://www.linkedin.com/in/alexander-skvorchevskiy',
  },
  {
    icon: 'ri-telegram-2-fill',
    href: 'https://t.me/notsecret32',
  },
];

export const Footer = () => {
  return (
    <div className="w-full h-14 border-t-1 flex justify-start items-center">
      <div className="flex items-center justify-center px-6 border-r-1 h-full">
        <p>find me in:</p>
      </div>
      {links.map(({ icon, href }) => (
        <Link
          key={href}
          className="px-4 border-r-1"
          href={href}
          target="_blank"
        >
          <i className={cn(icon, 'ri-2x')} />
        </Link>
      ))}
      <Link
        className="flex justify-center items-center px-8 ml-auto border-l-1 h-full gap-2"
        href="https://github.com/notsecret32/portfolio"
        target="_blank"
      >
        <p>source code</p>
        <i className="ri-github-fill ri-xl"></i>
      </Link>
    </div>
  );
};
