import { Heart, Users, ShieldCheck, Sparkles } from 'lucide-react';
import { ASSETS } from '../data/assets';

export default function HospitalitySection() {
  const values = [
    {
      title: 'WARM SERVICE',
      hindi: 'सहयोगी भाव',
      desc: 'Our staff takes genuine pride in answering questions, recommending curries to your exact taste, and checking in with care.',
      icon: Users,
    },
    {
      title: 'PERSONAL ATTENTION',
      hindi: 'व्यक्तिगत ध्यान',
      desc: 'Whether you prefer extra crisped roti, milder chilies, or a quiet reading corner, we listen to your every request.',
      icon: Heart,
    },
    {
      title: 'COMFORTABLE SPACE',
      hindi: 'शांत वातावरण',
      desc: 'Clean tables, ambient low lighting, subtle background acoustic tunes, and spotless hygiene standards.',
      icon: ShieldCheck,
    },
    {
      title: 'GOOD FOOD',
      hindi: 'शुद्ध भोजन',
      desc: 'Wholesome recipes, honest ingredients, uncompromised taste, and meals prepared with devotion.',
      icon: Sparkles,
    },
  ];

  return (
    <section id="hospitality" className="relative py-28 md:py-36 bg-[#0c0c0e] border-t border-b border-[#c5a059]/15 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Hospitality Editorial Copy (Col 1-6) */}
          <div className="lg:col-span-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-[1px] bg-[#c5a059]" />
              <span className="text-xs font-sans tracking-[0.25em] text-[#c5a059] uppercase">
                The Human Touch
              </span>
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#f5f2eb] font-normal tracking-tight mb-6">
              FEEL AT HOME.
            </h2>

            <p className="font-serif italic text-lg sm:text-xl text-[#dfc27a] mb-6 leading-relaxed">
              Guests frequently tell us: "It feels less like a commercial dining room, and more like visiting old friends."
            </p>

            <p className="font-sans text-sm md:text-base text-[#b8ac9c] leading-relaxed font-light mb-10">
              We are a women-owned and LGBTQ+ welcoming kitchen where every traveler, local diner, family, and solitary guest is greeted with equal respect, radiant smiles, and warm attentiveness.
            </p>

            {/* 4 Core Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {values.map((val) => (
                <div
                  key={val.title}
                  className="p-5 rounded-xl bg-[#121215] border border-white/5 hover:border-[#c5a059]/30 transition-all group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-serif text-lg tracking-wider text-[#f5f2eb] group-hover:text-[#dfc27a] transition-colors">
                      {val.title}
                    </h3>
                    <span className="font-devanagari text-[11px] text-[#c5a059]/70">
                      {val.hindi}
                    </span>
                  </div>
                  <p className="font-sans text-xs text-[#8c8275] leading-relaxed font-light">
                    {val.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Badges */}
            <div className="flex flex-wrap items-center gap-4 mt-8 pt-6 border-t border-white/5 text-xs text-[#b8ac9c]">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-[#18181d] border border-[#c5a059]/20">
                <span className="w-2 h-2 rounded-full bg-[#c5a059]" />
                <span>Women-Owned Establishment</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-[#18181d] border border-[#c5a059]/20">
                <span className="w-2 h-2 rounded-full bg-[#dfc27a]" />
                <span>LGBTQ+ Friendly Safe Space</span>
              </div>
            </div>
          </div>

          {/* Right Column: Welcoming Atmosphere Image (Col 7-12) */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-[#c5a059]/30 shadow-2xl shadow-black/80 aspect-[4/3] bg-[#121215] group">
              <img
                src={ASSETS.cafeInterior}
                alt="Welcoming and comfortable hospitality at D Cafe & Kitchen"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c]/90 via-[#0a0a0c]/20 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-left">
                <div>
                  <span className="text-[10px] font-sans tracking-[0.2em] uppercase text-[#c5a059] block mb-1">
                    Sanctuary in Tajganj
                  </span>
                  <h4 className="font-serif text-xl text-[#f5f2eb]">
                    A Peaceful, Welcoming Dining Room
                  </h4>
                </div>
                <span className="font-serif italic text-xs text-[#dfc27a] px-3 py-1 bg-[#0a0a0c]/80 rounded border border-[#c5a059]/30 backdrop-blur-sm">
                  Always Welcoming
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
