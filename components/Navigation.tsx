
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Page } from '../types';

interface NavigationProps {
  currentPage: Page;
  setPage: (page: Page) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ currentPage, setPage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems: { label: string; value: Page }[] = [
    { label: 'Home', value: 'home' },
    { label: 'About', value: 'about' },
    { label: 'Program', value: 'services' },
    { label: 'How It Works', value: 'how-it-works' },
    { label: 'Apply', value: 'contact' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-black/95 border-b border-white/10 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center">
            <button 
              onClick={() => setPage('home')}
              className="text-2xl font-black tracking-tighter flex items-center space-x-1"
            >
              <span className="text-white">KINGDOM</span>
              <span className="text-[#CE1141]">CONSULTING</span>
            </button>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => setPage(item.value)}
                className={`text-sm font-bold uppercase tracking-widest transition-colors ${
                  currentPage === item.value ? 'text-[#CE1141]' : 'text-gray-400 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => setPage('contact')}
              className="bg-[#CE1141] text-white px-6 py-2 rounded-none font-bold uppercase tracking-tighter hover:bg-[#B00E36] transition-all transform hover:scale-105"
            >
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-black border-b border-white/10 animate-in slide-in-from-top duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => {
                  setPage(item.value);
                  setIsOpen(false);
                }}
                className={`block w-full text-left px-3 py-4 text-base font-bold uppercase tracking-widest ${
                  currentPage === item.value ? 'text-[#CE1141] bg-white/5' : 'text-gray-400'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
