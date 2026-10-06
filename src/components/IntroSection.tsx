export default function IntroSection() {
  const pillars = [
    {
      word: 'FRESH',
      hindi: 'ताज़ा',
      description: 'Cooked to order every single day. No premade mass gravies; whole spices toasted as you arrive.',
    },
    {
      word: 'QUALITY',
      hindi: 'शुद्ध',
      description: 'Pure cow ghee, fresh artisanal white butter, farm vegetables, and premium long-grain basmati.',
    },
    {
      word: 'WARMTH',
      hindi: 'स्नेह',
      description: 'Personal attention where every guest in Tajganj is received with cooperative, familial care.',
    },
    {
      word: 'VALUE',
      hindi: 'सार्थक',
      description: 'Honest dining at ₹200–₹400 per person. Hearty portions made for travelers and locals alike.',
    },
  ];

  return (
    <section id="intro" className="relative py-28 md:py-36 bg-[#0c0c0e] border-t border-b border-[#c5a059]/15 overflow-hidden">
      {/* Decorative antique gold hairlines and background accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-[1px] bg-gradient-to-r from-transparent via-[#c5a059] to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Heading Lockup */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[1px] bg-[#c5a059]" />
            <span className="font-sans text-xs tracking-[0.25em] text-[#c5a059] uppercase">
              Our Guiding Standard
            </span>
            <span className="w-6 h-[1px] bg-[#c5a059]" />
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#f5f2eb] font-normal tracking-tight mb-6">
            MORE THAN A MEAL.
          </h2>

          <p className="font-serif italic text-lg sm:text-xl text-[#dfc27a] mb-6 max-w-2xl mx-auto leading-relaxed">
            Freshly prepared Indian food, thoughtful service and a comfortable atmosphere come together at D Cafe & Kitchen.
          </p>

          <p className="font-sans text-sm md:text-base text-[#b8ac9c] leading-relaxed max-w-2xl mx-auto font-light">
            Founded in the heart of Tajganj, Agra, our kitchen honors the timeless tradition of authentic Indian hospitality. We believe that true hospitality is not about cold pretense, but about hot fresh rotis, aromatic simmering curries, and people who treat you like family.
          </p>
        </div>

        {/* Four Gold Typography Blocks (Zero generic icons, pure editorial gold typographic craft) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {pillars.map((pillar, idx) => (
            <div
              key={pillar.word}
              className="relative p-8 rounded-lg bg-[#121215] border border-[#c5a059]/25 hover:border-[#dfc27a]/60 transition-all duration-300 group flex flex-col justify-between"
            >
              {/* Subtle gold corner accent */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-[#c5a059]/40 group-hover:border-[#dfc27a] transition-colors" />

              <div>
                <div className="flex items-baseline justify-between mb-2">
                  <span className="text-[11px] font-sans tracking-widest text-[#8c8275] uppercase tabular-nums">
                    0{idx + 1}
                  </span>
                  <span className="font-devanagari text-xs text-[#c5a059]/70">
                    {pillar.hindi}
                  </span>
                </div>

                <h3 className="font-serif text-2xl md:text-3xl tracking-[0.08em] font-medium text-[#dfc27a] group-hover:text-[#f5e4b8] transition-colors mt-2 mb-4">
                  {pillar.word}
                </h3>
              </div>

              <p className="font-sans text-xs md:text-sm text-[#b8ac9c] leading-relaxed font-light">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
