
import React from 'react';
import { Page } from '../types';

interface FooterProps {
  setPage: (page: Page) => void;
}

export const Footer: React.FC<FooterProps> = ({ setPage }) => {
  return (
    <footer className="bg-black border-t border-white/10 py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <button 
            onClick={() => setPage('home')}
            className="text-3xl font-black tracking-tighter flex items-center space-x-1 mb-6"
          >
            <span className="text-white text-4xl">KINGDOM</span>
            <span className="text-[#CE1141] text-4xl">CONSULTING</span>
          </button>
          <p className="text-gray-400 max-w-md leading-relaxed">
            Helping men build businesses with integrity, structure, and purpose. 
            Legally establish, structure, and launch in 90 days.
          </p>
        </div>
        
        <div>
          <h4 className="text-white font-bold uppercase tracking-widest mb-6 border-b border-[#CE1141] inline-block">Navigation</h4>
          <ul className="space-y-4">
            <li><button onClick={() => setPage('home')} className="text-gray-400 hover:text-white transition-colors uppercase text-sm font-semibold tracking-wider">Home</button></li>
            <li><button onClick={() => setPage('about')} className="text-gray-400 hover:text-white transition-colors uppercase text-sm font-semibold tracking-wider">About</button></li>
            <li><button onClick={() => setPage('services')} className="text-gray-400 hover:text-white transition-colors uppercase text-sm font-semibold tracking-wider">Program</button></li>
            <li><button onClick={() => setPage('how-it-works')} className="text-gray-400 hover:text-white transition-colors uppercase text-sm font-semibold tracking-wider">How It Works</button></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold uppercase tracking-widest mb-6 border-b border-[#CE1141] inline-block">Connect</h4>
          <ul className="space-y-4">
            <li><button onClick={() => setPage('contact')} className="text-gray-400 hover:text-white transition-colors uppercase text-sm font-semibold tracking-wider">Apply Now</button></li>
            <li><button onClick={() => setPage('contact')} className="text-gray-400 hover:text-white transition-colors uppercase text-sm font-semibold tracking-wider">Book Consultation</button></li>
            <li><span className="text-gray-500 uppercase text-xs font-bold tracking-widest">Privacy Policy</span></li>
            <li><span className="text-gray-500 uppercase text-xs font-bold tracking-widest">Terms of Service</span></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-gray-600 text-xs font-bold tracking-widest uppercase">
        <p>© ESTABLISHED 2025 KINGDOM CONSULTING. ALL RIGHTS RESERVED.</p>
        <p className="mt-4 md:mt-0">DESIGNED FOR OWNERSHIP.</p>
      </div>
    </footer>
  );
};
