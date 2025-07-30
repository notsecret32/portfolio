'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';

import { Button } from './ui/button';

const routes = [
  {
    title: '_hello',
    href: '/',
    className: 'border-t-0 border-b-0',
  },
  {
    title: '_about-me',
    href: '/about-me',
    className: 'border-l-0 border-t-0 border-b-0',
  },
  {
    title: '_projects',
    href: '/projects',
    className: 'border-l-0 border-t-0 border-b-0',
  },
  {
    title: '_contact-me',
    href: '/contact-me',
    className: 'ml-auto border-r-0 border-t-0 border-b-0',
  },
];

export const Header = () => {
  const pathname = usePathname();

  return (
    <div className="flex items-center justify-start border-b border-border gap-32">
      <p className="px-4">alexander-skvorchevsky</p>
      <div className="flex grow h-14">
        {routes.map(({ title, href, className }) => (
          <Button
            key={title}
            className={cn(className, {
              ['text-primary-foreground after:scale-x-100']: pathname === href,
            })}
            asChild
          >
            <Link href={href}>{title}</Link>
          </Button>
        ))}
      </div>
    </div>
  );
};
