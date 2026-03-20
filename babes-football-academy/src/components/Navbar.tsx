 "use client";
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu when a link is clicked
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-green-700 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">⚽ Babes FA</Link>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-green-200 transition">Home</Link>
          <Link href="/about" className="hover:text-green-200 transition">About</Link>
          <Link href="/programs" className="hover:text-green-200 transition">Programs</Link>
          <Link href="/contact" className="hover:text-green-200 transition">Contact</Link>
        </div>

        {/* Hamburger button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-green-700 mt-4 py-2">
          <div className="container mx-auto flex flex-col space-y-2">
            <Link href="/" className="block py-2 hover:text-green-200 transition" onClick={closeMenu}>Home</Link>
            <Link href="/about" className="block py-2 hover:text-green-200 transition" onClick={closeMenu}>About</Link>
            <Link href="/programs" className="block py-2 hover:text-green-200 transition" onClick={closeMenu}>Programs</Link>
            <Link href="/contact" className="block py-2 hover:text-green-200 transition" onClick={closeMenu}>Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
}