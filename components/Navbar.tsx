'use client';

import { useState } from 'react';
import Image from 'next/image';

const navLinks = [
  { href: '#problem', label: 'The Problem' },
  { href: '#solution', label: 'Our Solution' },
  { href: '#products', label: 'Products' },
  { href: '#team', label: 'Team' },
  { href: '#partners', label: 'Partners' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full text-gray-700 bg-cream">
      <div className="max-w-screen-xl px-6 mx-auto">
        {/* Desktop */}
        <div className="hidden md:grid grid-cols-[auto_1fr_auto] items-center gap-4 py-3">
          <a href="#" className="flex items-center focus:outline-none">
            <Image
              src="/images/logo.png"
              alt="Zelaki Logo"
              width={88}
              height={88}
              className="w-20 h-20 object-contain"
              priority
            />
          </a>

          <nav className="flex items-center justify-center gap-1 lg:gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-2 lg:px-3 py-1.5 text-sm whitespace-nowrap rounded-lg hover:text-gray-900 focus:outline-none"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="#get-involved"
            className="px-8 py-2.5 text-sm text-center bg-lime-500 text-white rounded-full font-semibold hover:bg-lime-600 transition whitespace-nowrap"
          >
            Donate
          </a>
        </div>

        {/* Mobile */}
        <div className="md:hidden">
          <div className="flex items-center justify-between py-3">
            <a href="#" className="flex items-center focus:outline-none">
              <Image
                src="/images/logo.png"
                alt="Zelaki Logo"
                width={72}
                height={72}
                className="w-16 h-16 object-contain"
                priority
              />
            </a>
            <button
              className="rounded-lg p-1 focus:outline-none"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
                {!open ? (
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                )}
              </svg>
            </button>
          </div>

          <nav
            className={`flex flex-col items-center gap-1 overflow-hidden transition-all duration-300 ${
              open ? 'max-h-96 pb-4' : 'max-h-0'
            }`}
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="w-full text-center px-4 py-2 text-sm rounded-lg hover:text-gray-900 focus:outline-none"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#get-involved"
              className="mt-2 px-10 py-2.5 text-sm text-center bg-lime-500 text-white rounded-full font-semibold hover:bg-lime-600 transition"
              onClick={() => setOpen(false)}
            >
              Donate
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
