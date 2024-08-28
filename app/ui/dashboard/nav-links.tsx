'use client';

import {
  RectangleGroupIcon,
  CalendarIcon,
  LinkIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

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
        name: 'Series', 
        href: '/dashboard/series', 
        icon: LinkIcon 
    },
];

export default function NavLinks() {
  const pathName = usePathname();

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;

        const isActive = 
          pathName === link.href || 
          (link.href !== '/dashboard' && pathName.startsWith(link.href + '/'));

        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[40px] w-[170px] flex-grow rounded-md bg-[var(--pb-c-mid-red)] md:flex-none md:justify-start transition-all duration-300 ease-in-out hover:bg-[#ed4161] hover:shadow-lg',
              {
                'bg-[var(--pb-c-red)] text-white border border-black hover:bg-[var(--pb-c-red)]': isActive,
              }
            )}
          >
            <div className='flex gap-2 justify-center items-center w-full'>
              <LinkIcon 
                className={clsx('w-4 stroke-black stroke-2 transition-all duration-300 ease-in-out', 
                {
                  'stroke-white': isActive
                }
              )} />
              <p 
                className={clsx("hidden md:block text-[14px] font-[400] transition-all duration-300 ease-in-out",
                {
                  'font-bold': isActive
                }
              )}>{link.name}</p>
            </div>
          </Link>
        );
      })}
    </>
  );
}
