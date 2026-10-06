import { Flame, Sparkles, HeartHandshake } from 'lucide-react';
import { useRestaurant } from '../context/RestaurantContext';

export default function DietarySection() {
  const { setIsOrderDrawerOpen } = useRestaurant();

  const options = [
    {
      title: 'VEGETARIAN OPTIONS',
      hindi: 'शुद्ध शाकाहारी',
      detail: 'A major portion of our kitchen celebrates rich vegetarian Indian classics: Paneer Butter Masala, overnight Dal Makhani, Dum Mushroom, and stuffed flatbreads.',
      icon: Sparkles,
    },
    {
      title: 'SPICE CUSTOMIZATION',
      hindi: 'मसाले का संतुलन',
      detail: 'Mild for traveling palates, medium homestyle, or authentic Indian spicy. We balance every curry to order rather than serving one-heat-fits-all.',
      icon: Flame,
    },
    {
      title: 'SPECIAL REQUESTS',
      hindi: 'विशेष पसंद',
      detail: 'No garlic/onion adjustments upon request, less oil, extra crispy parathas, or dairy modifications. Simply specify during order or table seating.',
      icon: HeartHandshake,
    },
  ];

  return (
    <section className="relative py-20 bg-[#0c0c0e] border-t border-b border-[#c5a059]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-6 h-[1px] bg-[#c5a059]" />
            <span className="text-xs font-sans tracking-[0.25em] text-[#c5a059] uppercase">
              Mindful Kitchen
            </span>
            <span className="w-6 h-[1px] bg-[#c5a059]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#f5f2eb] font-normal tracking-tight mb-4">
            GOOD FOOD, YOUR WAY.
          </h2>

          <p className="font-sans text-xs sm:text-sm text-[#b8ac9c] font-light leading-relaxed">
            Every dish is cooked from scratch upon your order, giving our kitchen the natural flexibility to accommodate your personal preferences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {options.map((opt) => {
            const Icon = opt.icon;
            return (
              <div
                key={opt.title}
                className="p-6 rounded-xl bg-[#121215] border border-white/5 hover:border-[#c5a059]/30 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-[#18181d] border border-[#c5a059]/30 flex items-center justify-center text-[#dfc27a] mb-4">
                    <Icon className="w-5 h-5 text-[#c5a059]" />
                  </div>

                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-serif text-lg tracking-wide text-[#f5f2eb]">
                      {opt.title}
                    </h3>
                    <span className="font-devanagari text-xs text-[#c5a059]/70">
                      {opt.hindi}
                    </span>
                  </div>

                  <p className="font-sans text-xs text-[#8c8275] leading-relaxed font-light">
                    {opt.detail}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[11px] font-sans text-[#dfc27a]">
                    Cooked Fresh to Request
                  </span>
                  <button
                    onClick={() => setIsOrderDrawerOpen(true)}
                    className="text-[11px] text-[#8c8275] hover:text-[#f5f2eb] underline"
                  >
                    Specify in Order
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
