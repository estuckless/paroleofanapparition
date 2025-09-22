'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const tabs = [
    { name: 'home', href: '/' },
    { name: 'info', href: '/info' },
    { name: 'pt 1', href: '/pt1' },
    { name: 'pt 2', href: '/pt2' },
    { name: 'pt 3', href: '/pt3' },
    { name: 'pt 4', href: '/pt4' },
    { name: 'artists', href: '/artists' },
    { name: 'parole', href: '/parole' },
    { name: 'contact', href: '/contact' }
  ];

  return (
    <nav className="fixed md:right-4 md:top-6 bottom-4 left-4 right-4 md:left-auto md:bottom-auto">
      {/* Desktop layout - vertical */}
      <div className="hidden md:flex flex-col space-y-0.5">
        {tabs.map((tab) => (
          <Link
            key={tab.name}
            href={tab.href}
            className={`text-base font-mono ${
              pathname === tab.href 
                ? 'text-black underline' 
                : 'text-gray-500 hover:text-black'
            }`}
          >
            {tab.name}
          </Link>
        ))}
      </div>
      
      {/* Mobile layout - floating hamburger */}
      <div className="md:hidden">
        {/* Hamburger button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="fixed top-6 right-6 w-12 h-12 flex flex-col justify-center items-center space-y-1 z-20"
        >
          <div className="w-5 h-0.5 bg-black"></div>
          <div className="w-5 h-0.5 bg-black"></div>
          <div className="w-5 h-0.5 bg-black"></div>
        </button>

        {/* Expandable menu */}
        <div className={`fixed top-20 right-6 transition-all duration-300 ease-in-out z-10 ${
          isOpen ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4 pointer-events-none'
        }`}>
          <div className="bg-white bg-opacity-95 backdrop-blur-sm border border-gray-200 rounded-lg shadow-lg p-3 min-w-[120px]">
            <div className="space-y-2">
              {tabs.map((tab) => (
                <Link
                  key={tab.name}
                  href={tab.href}
                  onClick={() => setIsOpen(false)}
                  className={`block text-xs font-mono text-center py-1 px-2 rounded transition-colors ${
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
        </div>
      </div>
    </nav>
  );
}