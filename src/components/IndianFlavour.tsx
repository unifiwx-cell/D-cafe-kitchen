import { ASSETS } from '../data/assets';

export default function IndianFlavour() {
  const sensoryPillars = [
    {
      label: 'SPICE',
      hindi: 'मसाला',
      desc: 'Sun-dried cumin, whole cloves, black cardamom and Kashmiri chili balanced for warmth, not burning heat.',
    },
    {
      label: 'AROMA',
      hindi: 'सुगंध',
      desc: 'Toasted fenugreek, desi ghee tadka, and saffron rose notes that greet you before your first bite.',
    },
    {
      label: 'TEXTURE',
      hindi: 'बनावट',
      desc: 'Crisp layered paratha contrasting with velvety dal makhani and succulent button mushrooms.',
    },
    {
      label: 'COMFORT',
      hindi: 'संतुष्टि',
      desc: 'Homestyle cooking that settles you, restores tired travelers, and leaves you truly content.',
    },
  ];

  return (
    <section className="relative py-28 md:py-36 bg-[#0c0c0e] border-t border-b border-[#c5a059]/15 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-8 h-[1px] bg-[#c5a059]" />
            <span className="text-xs font-sans tracking-[0.25em] text-[#c5a059] uppercase">
              The Sensory Tapestry
            </span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#f5f2eb] font-normal tracking-tight leading-[1.05]">
            INDIAN FLAVOUR.
            <br />
            <span className="italic text-gold-gradient font-light">
              WITHOUT THE FUSS.
            </span>
          </h2>

          <p className="font-sans text-sm md:text-base text-[#b8ac9c] font-light mt-6 leading-relaxed max-w-2xl">
            We strip away pretentious garnishes to let genuine Indian ingredients shine. Pure flavours, honest portions, and homestyle recipes served with pride in Agra.
          </p>
        </div>

        {/* Asymmetrical Collage & Sensory Labels Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Asymmetric Image Collage (Col 1-7) */}
          <div className="lg:col-span-7 grid grid-cols-2 gap-4 sm:gap-6 relative">
            {/* Top Left: Aloo Paratha */}
            <div className="relative rounded-xl overflow-hidden border border-[#c5a059]/25 aspect-square bg-[#121215] group">
              <img
                src={ASSETS.alooParatha}
                alt="Crisp Aloo Paratha with white butter"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c]/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3">
                <span className="text-[10px] font-sans tracking-widest text-[#c5a059] uppercase">
                  Indian Classic
                </span>
                <p className="font-serif text-sm text-[#f5f2eb]">Aloo Paratha</p>
              </div>
            </div>

            {/* Top Right: Thali Feast */}
            <div className="relative rounded-xl overflow-hidden border border-[#c5a059]/25 aspect-[4/5] -translate-y-4 sm:-translate-y-6 bg-[#121215] group">
              <img
                src={ASSETS.thaliFeast}
                alt="Royal Indian Thali Feast"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c]/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3">
                <span className="text-[10px] font-sans tracking-widest text-[#c5a059] uppercase">
                  Royal Serving
                </span>
                <p className="font-serif text-sm text-[#f5f2eb]">D Kitchen Thali</p>
              </div>
            </div>

            {/* Bottom Left: Mushroom Kadai */}
            <div className="relative rounded-xl overflow-hidden border border-[#c5a059]/25 aspect-[4/3] -translate-y-2 bg-[#121215] group">
              <img
                src={ASSETS.mushroomMasala}
                alt="Rich Mushroom Masala Kadai"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c]/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3">
                <span className="text-[10px] font-sans tracking-widest text-[#c5a059] uppercase">
                  Signature Kadai
                </span>
                <p className="font-serif text-sm text-[#f5f2eb]">Mushroom Masala</p>
              </div>
            </div>

            {/* Bottom Right: Curries & Roti */}
            <div className="relative rounded-xl overflow-hidden border border-[#c5a059]/25 aspect-square bg-[#121215] group">
              <img
                src={ASSETS.heroCurry}
                alt="Rich Butter Chicken and Curries"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c]/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3">
                <span className="text-[10px] font-sans tracking-widest text-[#c5a059] uppercase">
                  Clay Tandoor & Curries
                </span>
                <p className="font-serif text-sm text-[#f5f2eb]">Dal & Chicken Gravy</p>
              </div>
            </div>
          </div>

          {/* Sensory Pillars Right (Col 8-12) */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            {sensoryPillars.map((pillar) => (
              <div
                key={pillar.label}
                className="p-5 rounded-xl bg-[#121215] border border-white/5 hover:border-[#c5a059]/40 transition-colors"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-serif text-2xl tracking-wider text-[#dfc27a]">
                    {pillar.label}
                  </span>
                  <span className="font-devanagari text-xs text-[#c5a059]/70">
                    {pillar.hindi}
                  </span>
                </div>
                <p className="font-sans text-xs md:text-sm text-[#b8ac9c] font-light leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
