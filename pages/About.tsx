import React from 'react';
import { Shield, Hammer, Scale, History, ArrowRight } from 'lucide-react';
import { Page } from '../types';

interface AboutProps {
  setPage?: (page: Page) => void;
}

export const About: React.FC<AboutProps> = ({ setPage }) => {
  return (
    <div className="pt-20">
      <section className="py-24 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#CE1141] font-black tracking-widest uppercase mb-4 block">Our Story</span>
              <h1 className="text-5xl md:text-7xl font-black mb-8 uppercase leading-none">INTEGRITY.<br />STRUCTURE.<br />PURPOSE.</h1>
              <div className="space-y-6 text-xl text-gray-400 leading-relaxed font-medium">
                <p>
                  Kingdom Consulting was created to help men build businesses with integrity, structure, and purpose. Too many men start businesses without proper guidance, leaving them exposed, overwhelmed, or stuck.
                </p>
                <p className="text-white border-l-4 border-[#CE1141] pl-6 italic">
                  We exist to change that.
                </p>
                <p>
                  Our approach focuses on ownership, responsibility, and sustainability — not shortcuts or hype. By the end of our process, clients don’t just have a business. They know how to operate it.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=2070&auto=format&fit=crop" 
                className="w-full h-auto grayscale border-t-8 border-r-8 border-[#CE1141] shadow-2xl"
                alt="Black professionals collaborating in a modern office environment"
              />
              <div className="absolute -bottom-8 -left-8 bg-zinc-900 p-8 border border-zinc-800 hidden md:block shadow-xl">
                <p className="text-4xl font-black text-[#CE1141]">ESTABLISHED 2025</p>
                <p className="text-white uppercase font-bold tracking-widest text-xs">A New Era of Business</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 px-4 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black text-center mb-16 uppercase tracking-tighter">Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Hammer />, title: "Ownership over hustle", desc: "Building assets, not just grinding hours." },
              { icon: <Scale />, title: "Order creates freedom", desc: "Structure is the only path to sustainable growth." },
              { icon: <Shield />, title: "Accountability builds confidence", desc: "We hold the line so you can grow." },
              { icon: <History />, title: "Legacy matters", desc: "Build something that lasts beyond your own lifetime." }
            ].map((v, i) => (
              <div key={i} className="bg-black p-10 border border-zinc-900 hover:border-[#CE1141] transition-all group">
                <div className="text-[#CE1141] mb-6 transform group-hover:scale-110 transition-transform">{v.icon}</div>
                <h3 className="text-xl font-black mb-4 uppercase text-white tracking-tighter">{v.title}</h3>
                <p className="text-gray-500 font-bold uppercase text-xs tracking-widest leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="py-24 px-4 bg-zinc-900 border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-8 uppercase tracking-tighter">READY TO BECOME A BUSINESS OWNER?</h2>
          <p className="text-gray-400 font-bold uppercase tracking-widest text-sm mb-12">No more guessing. No more playing small. It's time to build.</p>
          <button 
            onClick={() => setPage && setPage('contact')}
            className="bg-[#CE1141] text-white px-12 py-5 text-xl font-black uppercase tracking-tighter hover:bg-[#B00E36] transition-all flex items-center mx-auto"
          >
            Apply for the Next Cohort <ArrowRight className="ml-3" />
          </button>
        </div>
      </section>
    </div>
  );
};