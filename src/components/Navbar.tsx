'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const tabs = [
    { name: 'home', href: '/' },
    { name: 'info', href: '/info' },
    { name: 'pt 1', href: '/pt1' },
    { name: 'pt 2', href: '/pt2' },
    { name: 'pt 3', href: '/pt3' },
    { name: 'pt 4', href: '/pt4' },
    { name: 'artists', href: '/artists' },
    { name: 'parole', href: '/manifesto' },
    { name: 'contact', href: '/contact' }
  ];

  return (
    <nav className="fixed md:right-4 md:top-1/2 md:transform md:-translate-y-1/2 bottom-4 left-4 right-4 md:left-auto md:bottom-auto">
      {/* Desktop layout - vertical */}
      <div className="hidden md:flex flex-col space-y-4">
        {tabs.map((tab) => (
          <Link
            key={tab.name}
            href={tab.href}
            className={`text-lg font-mono ${
              pathname === tab.href 
                ? 'text-black underline' 
                : 'text-gray-500 hover:text-black'
            }`}
          >
            {tab.name}
          </Link>
        ))}
      </div>
      
      {/* Mobile layout - 2 rows at bottom */}
      <div className="md:hidden bg-white bg-opacity-90 backdrop-blur-sm border border-gray-200 rounded-lg p-3">
        <div className="grid grid-cols-3 gap-3">
          {tabs.map((tab) => (
            <Link
              key={tab.name}
              href={tab.href}
              className={`text-sm font-mono text-center py-2 px-3 rounded ${
                pathname === tab.href 
                  ? 'text-black bg-gray-100 underline' 
                  : 'text-gray-500 hover:text-black hover:bg-gray-50'
              }`}
            >
              {tab.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}