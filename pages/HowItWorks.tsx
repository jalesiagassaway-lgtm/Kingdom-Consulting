
import React from 'react';
import { ClipboardList, Hammer, Rocket, Key } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: "01",
      icon: <ClipboardList size={40} />,
      title: "APPLY",
      desc: "Submit an application so we can confirm you’re a good fit for the program and the culture."
    },
    {
      number: "02",
      icon: <Hammer size={40} />,
      title: "BUILD",
      desc: "We handle legal setup, systems, and infrastructure while guiding you through each critical decision."
    },
    {
      number: "03",
      icon: <Rocket size={40} />,
      title: "LAUNCH",
      desc: "Your business goes live with all systems tested, integrated, and fully operational."
    },
    {
      number: "04",
      icon: <Key size={40} />,
      title: "OWNERSHIP",
      desc: "We train you to run everything confidently — then fully hand over the keys to your legacy."
    }
  ];

  return (
    <div className="pt-20">
      <section className="py-24 px-4 bg-black min-h-screen">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-8xl font-black mb-6 uppercase">The Process</h1>
            <p className="text-2xl text-[#CE1141] font-black italic tracking-tighter uppercase italic">Phase by phase, brick by brick.</p>
          </div>

          <div className="relative">
            {/* Connector Line (Desktop) */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-zinc-900 -translate-y-1/2 z-0"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {steps.map((step, i) => (
                <div key={i} className="bg-zinc-950 p-10 border border-zinc-900 flex flex-col items-center text-center group hover:border-[#CE1141] transition-all">
                  <span className="text-6xl font-black text-white/5 mb-4 group-hover:text-[#CE1141]/20 transition-colors">{step.number}</span>
                  <div className="text-[#CE1141] mb-6 p-4 bg-black border border-zinc-800 transform group-hover:-rotate-6 transition-transform">
                    {step.icon}
                  </div>
                  <h3 className="text-2xl font-black mb-4 uppercase tracking-tighter">{step.title}</h3>
                  <p className="text-gray-500 font-bold uppercase text-xs tracking-widest leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-24 bg-zinc-900 p-12 flex flex-col md:flex-row items-center justify-between border-l-8 border-[#CE1141]">
            <div className="mb-8 md:mb-0 md:pr-12">
              <h2 className="text-3xl font-black mb-2 uppercase">NO GUESSWORK.</h2>
              <p className="text-gray-400 font-bold uppercase tracking-widest text-sm">We provide the blueprint. You provide the discipline.</p>
            </div>
            <button className="bg-white text-black font-black uppercase px-10 py-5 hover:bg-[#CE1141] hover:text-white transition-all whitespace-nowrap">
              See the Full Roadmap
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
