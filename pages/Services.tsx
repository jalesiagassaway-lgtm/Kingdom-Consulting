import React from 'react';
import { CheckCircle, Zap, Box, BarChart } from 'lucide-react';

export const Services: React.FC = () => {
  const categories = [
    {
      icon: <Box />,
      title: "Legal & Business Setup",
      description: "Bulletproof legal foundations. We handle the complexity so you can focus on ownership.",
      items: [
        "LLC formation & state filings",
        "DBA setup (if needed)",
        "EIN acquisition",
        "Business bank account guidance",
        "Required permits & licenses audit",
        "Business insurance guidance",
        "Virtual office setup"
      ]
    },
    {
      icon: <Zap />,
      title: "Infrastructure & Systems",
      description: "High-performance digital engines. We build the systems that manage your clients and cash.",
      items: [
        "Professional website (built & launched)",
        "Business email setup",
        "Calendar & collaboration tools",
        "Client intake workflow design",
        "Invoicing & scheduling setup"
      ]
    },
    {
      icon: <BarChart />,
      title: "Strategy & Support",
      description: "Elite business intelligence. 90 days of aggressive coaching and operational discipline.",
      items: [
        "Business model clarity & mapping",
        "Pricing & service structure design",
        "Compliance basics education",
        "Weekly or biweekly support sessions",
        "1:1 or group options available"
      ]
    }
  ];

  return (
    <div className="pt-20">
      <section className="py-24 px-4 bg-black bg-texture">
        <div className="max-w-7xl mx-auto text-center mb-20">
          <span className="text-[#CE1141] font-black tracking-widest uppercase mb-4 block">The Program</span>
          <h1 className="text-5xl md:text-7xl font-black mb-6">THE KINGDOM BUILD</h1>
          <p className="text-2xl text-gray-400 max-w-3xl mx-auto font-bold uppercase tracking-tight">
            A guided 90-day experience taking you from idea to a fully operational, legally established business.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {categories.map((cat, i) => (
            <div key={i} className="bg-zinc-950 border-t-4 border-[#CE1141] p-10 shadow-2xl">
              <div className="text-[#CE1141] mb-6 flex justify-center">
                {React.cloneElement(cat.icon as React.ReactElement<any>, { size: 48 })}
              </div>
              <h3 className="text-2xl font-black mb-4 text-center uppercase tracking-tighter">{cat.title}</h3>
              <p className="text-gray-500 text-sm font-bold uppercase tracking-wider mb-8 text-center leading-relaxed">
                {cat.description}
              </p>
              <ul className="space-y-4">
                {cat.items.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-3 group">
                    <CheckCircle className="text-[#CE1141] shrink-0 mt-1 transition-transform group-hover:scale-110" size={18} />
                    <span className="text-gray-400 font-bold uppercase text-xs tracking-widest">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Program Callout */}
      <section className="py-24 px-4 bg-white text-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-8">90 DAYS TO LAUNCH.</h2>
          <p className="text-2xl font-bold mb-10 leading-relaxed uppercase tracking-tight">
            We don't just give you a checklist. We build the engine with you, then teach you how to drive it.
          </p>
          <div className="bg-black text-white p-12 inline-block">
            <p className="text-3xl font-black mb-4 tracking-tighter uppercase">Ready for the Build?</p>
            <p className="text-gray-400 font-bold mb-8 tracking-widest uppercase text-sm">Applications are currently open for next month's cohort.</p>
            <button className="bg-[#CE1141] hover:bg-[#B00E36] px-12 py-5 font-black uppercase text-xl transition-all">Apply Now</button>
          </div>
        </div>
      </section>
    </div>
  );
};