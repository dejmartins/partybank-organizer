'use client'

import {
  RectangleGroupIcon,
  CalendarIcon,
  LinkIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx'

const links = [
    { 
        name: 'Dashboard', 
        href: '/dashboard', 
        icon: RectangleGroupIcon 
    },
    {
        name: 'Events',
        href: '/dashboard/events',
        icon: CalendarIcon ,
    },
    { 
        name: 'Series', href: 
        '/dashboard/series', 
        icon: LinkIcon 
    },
];

export default function NavLinks() {
  const pathName = usePathname()
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx('flex h-[40px] w-[170px] flex-grow rounded-md bg-[var(--pb-c-mid-red)] md:flex-none md:justify-start',
              {
                'bg-[#E91B41] text-white border border-black': pathName === link.href,
              }
            )}
          >
            <div className='flex gap-2 justify-center items-center w-full'>
              <LinkIcon 
                className={clsx('w-4 stroke-black stroke-2', 
                {
                  'stroke-white': pathName === link.href
                }
              )} />
              <p 
                className={clsx("hidden md:block text-[14px] font-[400]",
                {
                  'font-bold': pathName === link.href
                }
              )}>{link.name}</p>
            </div>
          </Link>
        );
      })}
    </>
  );
}