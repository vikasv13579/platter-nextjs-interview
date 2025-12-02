'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur shadow-sm h-[72px]">
      <nav className="container h-full flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-[#0f4c5c]">Platter</Link>
        
        <div className="hidden md:flex items-center gap-6">
          <Link href="/" className="hover:text-[#0f4c5c]">Home</Link>
          <Link href="/about" className="hover:text-[#0f4c5c]">About</Link>
          <Link href="/services" className="hover:text-[#0f4c5c]">Services</Link>
          <Link href="/contact" className="bg-[#0f4c5c] text-white px-5 py-2 rounded-full hover:bg-[#1a6b7c]">Contact</Link>
        </div>

        <button className="md:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? '✕' : '☰'}
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden bg-white border-t px-6 py-4">
          <Link href="/" className="block py-2" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/about" className="block py-2" onClick={() => setMenuOpen(false)}>About</Link>
          <Link href="/services" className="block py-2" onClick={() => setMenuOpen(false)}>Services</Link>
          <Link href="/contact" className="block py-2" onClick={() => setMenuOpen(false)}>Contact</Link>
        </div>
      )}
    </header>
  );
}
