import { ArrowRight, Flame, Sparkles, Clock } from 'lucide-react';
import { ASSETS } from '../data/assets';

export default function FreshSection() {
  const steps = [
    {
      label: 'FRESH',
      hindi: 'ताज़ा सामग्री',
      detail: 'Farm-sourced vegetables, whole ground spices, and cultured butter delivered each morning.',
      icon: Sparkles,
    },
    {
      label: 'PREPARED',
      hindi: 'हाथों से तैयार',
      detail: 'No bulk premade bases. Each curry is stirred and simmered upon your order placement.',
      icon: Flame,
    },
    {
      label: 'SERVED',
      hindi: 'गरमागरम परोसा',
      detail: 'Brought straight from the tandoor and cast iron kadai to your table steaming hot.',
      icon: Clock,
    },
  ];

  return (
    <section className="relative py-28 md:py-36 bg-[#0a0a0c] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Storytelling (Col 1-6) */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#c5a059]/30 shadow-2xl shadow-black/80 aspect-[4/3] bg-[#121215]">
              <img
                src={ASSETS.cafeInterior}
                alt="D Cafe & Kitchen warm interior and freshly prepared cuisine"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c]/90 via-transparent to-transparent" />

              {/* Overlaid Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#0c0c0e]/90 border border-[#c5a059]/20 backdrop-blur-md flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-sans tracking-[0.2em] text-[#c5a059] uppercase block">
                    Zero Pre-cooked Bases
                  </span>
                  <span className="font-serif text-lg text-[#f5f2eb]">
                    100% Prepared From Scratch
                  </span>
                </div>
                <span className="font-devanagari text-xs text-[#dfc27a]">
                  ताज़ा स्वाद
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Philosophy & Connecting Flow (Col 7-12) */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-[1px] bg-[#c5a059]" />
              <span className="text-xs font-sans tracking-[0.25em] text-[#c5a059] uppercase">
                Kitchen Creed
              </span>
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#f5f2eb] font-normal tracking-tight mb-6 leading-[1.05]">
              MADE FRESH.
              <br />
              <span className="italic text-gold-gradient font-light">
                EVERY DAY.
              </span>
            </h2>

            <p className="font-sans text-sm md:text-base text-[#b8ac9c] leading-relaxed font-light mb-12">
              At D Cafe & Kitchen, our reputation has been built on an uncompromising truth: authentic Indian food cannot be rushed. We grind whole coriander, cardamom, and cumin in small batches, roasting spices slowly to release their natural oils before each dish touches the fire.
            </p>

            {/* Step Sequence: FRESH → PREPARED → SERVED connected with subtle gold line */}
            <div className="relative w-full">
              {/* Subtle gold connecting line for desktop */}
              <div className="hidden sm:block absolute top-6 left-8 right-8 h-[1px] bg-gradient-to-r from-[#c5a059]/20 via-[#c5a059] to-[#c5a059]/20 z-0" />

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 relative z-10">
                {steps.map((step, idx) => (
                  <div
                    key={step.label}
                    className="flex flex-col items-start bg-[#121215] sm:bg-transparent p-5 sm:p-0 rounded-xl sm:rounded-none border sm:border-none border-white/5"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#18181d] border border-[#c5a059] flex items-center justify-center text-[#dfc27a] font-serif text-sm font-semibold mb-4 shadow-md">
                      0{idx + 1}
                    </div>

                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-serif text-xl tracking-wider text-[#f5f2eb]">
                        {step.label}
                      </h3>
                      {idx < steps.length - 1 && (
                        <ArrowRight className="w-3.5 h-3.5 text-[#c5a059] hidden sm:block ml-auto" />
                      )}
                    </div>

                    <span className="font-devanagari text-[11px] text-[#c5a059]/80 mb-2">
                      {step.hindi}
                    </span>

                    <p className="font-sans text-xs text-[#8c8275] leading-relaxed">
                      {step.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
