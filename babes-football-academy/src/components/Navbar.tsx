// components/Navbar.tsx
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-green-700 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">⚽ Babes FA</Link>

        {/* Desktop menu (hidden on mobile) */}
        <div className="space-x-6 hidden md:block">
          <Link href="/" className="hover:text-green-200 transition">Home</Link>
          <Link href="/about" className="hover:text-green-200 transition">About</Link>
          <Link href="/programs" className="hover:text-green-200 transition">Programs</Link>
          <Link href="/contact" className="hover:text-green-200 transition">Contact</Link>
        </div>

        {/* Hamburger button (visible only on mobile) */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              // X icon when menu is open
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              // Hamburger icon when menu is closed
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu (shown only when isOpen is true) */}
      {isOpen && (
        <div className="md:hidden container mx-auto mt-4 space-y-2">
          <Link href="/" className="block hover:text-green-200 transition">Home</Link>
          <Link href="/about" className="block hover:text-green-200 transition">About</Link>
          <Link href="/programs" className="block hover:text-green-200 transition">Programs</Link>
          <Link href="/contact" className="block hover:text-green-200 transition">Contact</Link>
        </div>
      )}
    </nav>
  );
}