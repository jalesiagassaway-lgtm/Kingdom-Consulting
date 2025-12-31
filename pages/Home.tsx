import React from 'react';
import { Page } from '../types';
import { ShieldCheck, Rocket, Landmark, Users, CheckCircle2, ArrowRight } from 'lucide-react';

interface HomeProps {
  setPage: (page: Page) => void;
}

export const Home: React.FC<HomeProps> = ({ setPage }) => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Background Image/Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop" 
            className="w-full h-full object-cover opacity-30 grayscale"
            alt="Business collaboration"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <span className="text-[#CE1141] font-black tracking-[0.2em] uppercase mb-4 block">Founded 2025</span>
          <h1 className="text-5xl md:text-8xl font-black mb-6 leading-tight">
            BUILD IT RIGHT.<br />
            OWN IT FULLY.<br />
            <span className="text-[#CE1141] block animate-legacy">LEAVE A LEGACY.</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed font-medium">
            Kingdom Consulting helps men legally establish, structure, and launch their businesses in 90 days — with everything from formation to website included.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={() => setPage('contact')}
              className="bg-[#CE1141] text-white px-10 py-5 text-xl font-black uppercase tracking-tighter hover:bg-[#B00E36] transition-all transform hover:scale-105 shadow-2xl flex items-center justify-center"
            >
              Apply Now <ArrowRight className="ml-2" />
            </button>
            <button 
              onClick={() => setPage('contact')}
              className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-5 text-xl font-black uppercase tracking-tighter hover:bg-white/20 transition-all transform hover:scale-105"
            >
              Book Consultation
            </button>
          </div>
        </div>
        
        {/* Decorative Bulls Stripe */}
        <div className="absolute bottom-0 left-0 w-full h-2 bg-[#CE1141]"></div>
      </section>

      {/* Who We Help */}
      <section className="py-24 bg-zinc-950 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2">
            <h2 className="text-4xl md:text-6xl font-black mb-8 border-l-8 border-[#CE1141] pl-6">
              BUILT FOR MEN<br />READY TO BUILD<br />SOMETHING REAL
            </h2>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed font-medium">
              Kingdom Consulting is for men who are tired of hustling without structure and are ready to operate as legitimate business owners. Whether you’re starting from scratch or making an existing business official, we provide the clarity, systems, and support to do it right.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="text-[#CE1141] mt-1 shrink-0" size={24} />
                <span className="text-white font-bold uppercase text-sm tracking-widest">No Shortcuts</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="text-[#CE1141] mt-1 shrink-0" size={24} />
                <span className="text-white font-bold uppercase text-sm tracking-widest">Grounded Systems</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="text-[#CE1141] mt-1 shrink-0" size={24} />
                <span className="text-white font-bold uppercase text-sm tracking-widest">Full Ownership</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="text-[#CE1141] mt-1 shrink-0" size={24} />
                <span className="text-white font-bold uppercase text-sm tracking-widest">Legitimacy First</span>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="aspect-[3/4] bg-zinc-900 border-2 border-zinc-800 p-8 flex flex-col justify-end overflow-hidden group">
               <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" 
                className="absolute inset-0 w-full h-full object-cover grayscale contrast-125 brightness-75 group-hover:scale-105 transition-transform duration-700"
                alt="Clean, minimal modern boardroom representing a structured and professional business environment"
              />
              <div className="relative z-10">
                <span className="text-8xl font-black text-white/5 absolute -top-12 -left-4">BUILD</span>
                <p className="text-white text-2xl font-black uppercase tracking-tighter leading-none italic">"Integrity is the foundation of legacy."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-24 bg-black px-4 bg-texture">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-4 uppercase">WE HANDLE THE SETUP.<br />WE TEACH THE OWNERSHIP.</h2>
          <div className="w-24 h-2 bg-[#CE1141] mx-auto"></div>
        </div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              icon: <ShieldCheck size={40} />, 
              title: "LEGAL FORMATION", 
              desc: "Bulletproof legal foundations. We handle the paperwork, filings, and permits so your business starts on solid ground." 
            },
            { 
              icon: <Landmark size={40} />, 
              title: "COMPLIANCE & PERMITS", 
              desc: "Professional guidance on required permits, liability insurance, and banking essentials to protect your assets." 
            },
            { 
              icon: <Rocket size={40} />, 
              title: "DIGITAL INFRASTRUCTURE", 
              desc: "High-performance digital engines. Custom website, email, and automated workflows designed to capture growth." 
            },
            { 
              icon: <Users size={40} />, 
              title: "OPERATIONAL SYSTEMS", 
              desc: "Battle-tested workflows for client intake, payment processing, and calendar management." 
            },
            { 
              icon: <CheckCircle2 size={40} />, 
              title: "90-DAY SUPPORT", 
              desc: "Aggressive structured accountability and tactical support to ensure your business survives the launch." 
            },
            { 
              icon: <CheckCircle2 size={40} />, 
              title: "KNOWLEDGE TRANSFER", 
              desc: "Elite business intelligence. We train you to master your systems. You own the keys to the kingdom." 
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-zinc-900/50 p-10 border-l border-zinc-800 hover:border-[#CE1141] transition-all group">
              <div className="text-[#CE1141] mb-6 group-hover:scale-110 transition-transform">{item.icon}</div>
              <h3 className="text-2xl font-black mb-4 group-hover:text-[#CE1141] transition-colors uppercase tracking-tighter">{item.title}</h3>
              <p className="text-gray-400 font-medium leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Us / CTA */}
      <section className="py-24 bg-zinc-950 px-4 border-y border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-8 uppercase tracking-tighter">THIS ISN’T DIY. THIS IS OWNERSHIP.</h2>
          <p className="text-xl text-gray-400 mb-12 leading-relaxed font-medium">
            Most people file paperwork and disappear. We stay long enough to ensure your business is operational, compliant, and understood — then we hand it over so you’re confident running it yourself.
          </p>
          <button 
            onClick={() => setPage('contact')}
            className="bg-white text-black px-12 py-6 text-2xl font-black uppercase tracking-tighter hover:bg-[#CE1141] hover:text-white transition-all transform hover:scale-105 active:scale-95 shadow-xl"
          >
            Apply for your build
          </button>
        </div>
      </section>
    </div>
  );
};