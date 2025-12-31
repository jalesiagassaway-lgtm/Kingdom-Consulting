import React, { useState } from 'react';
import { Calendar, Send, CheckCircle } from 'lucide-react';

export const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real app, this would send data to a backend
  };

  return (
    <div className="pt-20">
      <section className="py-24 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h1 className="text-5xl md:text-7xl font-black mb-8 uppercase leading-none">READY TO<br /><span className="text-[#CE1141]">BUILD IT RIGHT?</span></h1>
              <p className="text-2xl text-gray-400 mb-12 font-bold uppercase tracking-tight leading-relaxed">
                If you’re ready to stop guessing and start building with structure and purpose, apply below or book a consultation.
              </p>
              
              <div className="space-y-8">
                <a 
                  href="#" 
                  className="flex items-center space-x-6 p-8 bg-zinc-950 border-l-4 border-white hover:border-[#CE1141] transition-all cursor-pointer group block"
                >
                  <Calendar size={40} className="text-[#CE1141]" />
                  <div>
                    <h3 className="text-xl font-black uppercase tracking-tighter text-white">Book a Call</h3>
                    <p className="text-gray-500 font-bold uppercase text-xs tracking-widest">15-minute discovery session</p>
                  </div>
                </a>
                
                <div className="p-8 bg-zinc-900 border border-zinc-800">
                  <h4 className="text-[#CE1141] font-black uppercase mb-4 tracking-widest text-xs">OFFICE HOURS</h4>
                  <p className="text-white font-bold uppercase text-sm tracking-widest">MON — FRI: 0900 - 1700</p>
                  <p className="text-gray-500 font-bold uppercase text-xs tracking-widest mt-1">Grounded in Excellence.</p>
                </div>
              </div>
            </div>

            <div className="bg-zinc-950 p-10 border border-zinc-900 relative">
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full text-center space-y-6 py-20">
                  <CheckCircle size={80} className="text-[#CE1141] animate-bounce" />
                  <h2 className="text-3xl font-black uppercase">Application Received</h2>
                  <p className="text-gray-400 font-bold uppercase text-sm tracking-widest">We will review your vision and contact you within 48 hours.</p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="text-[#CE1141] font-black uppercase text-xs border-b border-[#CE1141] pb-1"
                  >
                    Submit another application
                  </button>
                </div>
              ) : (
                <>
                  <div className="absolute top-0 right-0 p-4 opacity-5">
                    <Send size={100} />
                  </div>
                  <h2 className="text-3xl font-black mb-8 uppercase tracking-tighter">Application Form</h2>
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                      <label className="block text-[#CE1141] font-black uppercase text-xs tracking-[0.2em] mb-2">Full Name</label>
                      <input 
                        required
                        type="text" 
                        className="w-full bg-black border border-zinc-800 p-4 text-white focus:outline-none focus:border-[#CE1141] transition-colors"
                        placeholder="ENTER NAME"
                      />
                    </div>
                    <div>
                      <label className="block text-[#CE1141] font-black uppercase text-xs tracking-[0.2em] mb-2">Business Email</label>
                      <input 
                        required
                        type="email" 
                        className="w-full bg-black border border-zinc-800 p-4 text-white focus:outline-none focus:border-[#CE1141] transition-colors"
                        placeholder="ENTER EMAIL"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-[#CE1141] font-black uppercase text-xs tracking-[0.2em] mb-2">Business Stage</label>
                        <select className="w-full bg-black border border-zinc-800 p-4 text-white focus:outline-none focus:border-[#CE1141] transition-colors appearance-none">
                          <option>IDEA ONLY</option>
                          <option>SIDE HUSTLE / INFORMAL</option>
                          <option>REGISTERED BUT NOT STRUCTURED</option>
                          <option>OPERATING BUT DISORGANIZED</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-[#CE1141] font-black uppercase text-xs tracking-[0.2em] mb-2">When are you looking to start?</label>
                        <select className="w-full bg-black border border-zinc-800 p-4 text-white focus:outline-none focus:border-[#CE1141] transition-colors appearance-none">
                          <option>IMMEDIATELY</option>
                          <option>WITHIN 30 DAYS</option>
                          <option>1–3 MONTHS</option>
                          <option>JUST EXPLORING</option>
                        </select>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-[#CE1141] font-black uppercase text-xs tracking-[0.2em] mb-2">Support Preference</label>
                        <select className="w-full bg-black border border-zinc-800 p-4 text-white focus:outline-none focus:border-[#CE1141] transition-colors appearance-none">
                          <option>1:1 SUPPORT</option>
                          <option>GROUP PROGRAM</option>
                          <option>NOT SURE YET</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-[#CE1141] font-black uppercase text-xs tracking-[0.2em] mb-2">Ready to invest time/resources?</label>
                        <select className="w-full bg-black border border-zinc-800 p-4 text-white focus:outline-none focus:border-[#CE1141] transition-colors appearance-none">
                          <option>YES</option>
                          <option>NOT YET</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-[#CE1141] font-black uppercase text-xs tracking-[0.2em] mb-2">Primary Goal / Vision</label>
                      <textarea 
                        required
                        rows={3}
                        className="w-full bg-black border border-zinc-800 p-4 text-white focus:outline-none focus:border-[#CE1141] transition-colors"
                        placeholder="DESCRIBE YOUR VISION"
                      ></textarea>
                    </div>
                    <button type="submit" className="w-full bg-[#CE1141] text-white font-black uppercase py-6 text-xl tracking-tighter hover:bg-[#B00E36] transition-all transform hover:scale-[1.02]">
                      Submit Application
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};