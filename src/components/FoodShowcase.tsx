import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { ASSETS } from '../data/assets';
import { useRestaurant } from '../context/RestaurantContext';

export default function FoodShowcase() {
  const { setActiveCursorMode } = useRestaurant();

  const showcaseItems = [
    {
      id: 'curries',
      title: 'INDIAN CURRIES',
      hindi: 'भारतीय करी',
      tagline: 'Rich, comforting and freshly prepared.',
      description: 'Slow-simmered onion and cashew reductions infused with roasted coriander, green cardamom and Kashmiri chilies. Each bowl balances deep spice notes with velvety texture.',
      image: ASSETS.heroCurry,
      notes: ['Hand-pounded Garam Masala', 'Slow Cooked Gravies', 'Fresh Cream & Butter'],
    },
    {
      id: 'paratha',
      title: 'ALOO PARATHA',
      hindi: 'आलू पराठा',
      tagline: 'A comforting Indian classic.',
      description: 'Handmade flaky flatbread stuffed generously with spiced mashed potatoes, crushed roasted cumin, and pomegranate seed. Served steaming hot with artisanal melting white butter.',
      image: ASSETS.alooParatha,
      notes: ['Melting Desi Makhan', 'Spiced Potato Core', 'Crisp Golden Crust'],
    },
    {
      id: 'thali',
      title: 'THALI',
      hindi: 'थाली',
      tagline: 'A complete Indian meal experience.',
      description: 'The quintessential Indian dining ceremony presented in polished antique brass bowls. Dal Makhani, paneer preparation, seasonal greens, fragrant cumin rice, and handmade flatbreads.',
      image: ASSETS.thaliFeast,
      notes: ['Balanced Nutrition', 'Multiple Aromas', 'Authentic Royal Service'],
    },
    {
      id: 'mushroom',
      title: 'MUSHROOM DISHES',
      hindi: 'मशरूम स्पेशल',
      tagline: 'Fresh and flavorful options.',
      description: 'Plump farm-fresh button mushrooms seared with ginger juliennes, bell peppers, and crushed coriander in a traditional heavy-bottom kadai. One of our most celebrated dishes.',
      image: ASSETS.mushroomMasala,
      notes: ['Farm Button Mushrooms', 'Earthen Dum Cooking', 'Signature Guest Favourite'],
    },
    {
      id: 'roti',
      title: 'ROTI & NAAN',
      hindi: 'तंदूरी रोटियां',
      tagline: 'Freshly prepared Indian breads.',
      description: 'Clay tandoor blistered breads pulled hot and brushed with pure garlic butter or churned ghee. The essential companion to our rich curries.',
      image: ASSETS.heroCurry,
      notes: ['Clay Oven Blistered', 'Whole Wheat Atta', 'Garlic Butter Glaze'],
    },
    {
      id: 'tikka',
      title: 'CHICKEN TIKKA MASALA',
      hindi: 'चिकन टिक्का मसाला',
      tagline: 'A visually dramatic signature dish.',
      description: 'Succulent chicken morsels charred in the live charcoal oven before being tossed in a smoky, rich tomato and butter masala infused with toasted fenugreek.',
      image: ASSETS.heroCurry,
      notes: ['Smoky Charcoal Char', 'Velvet Tomato Gravy', 'Tender Marinated Morsels'],
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = showcaseItems[activeIndex];

  const handleScrollToMenu = () => {
    const el = document.getElementById('menu');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="showcase" className="relative py-28 md:py-36 bg-[#0a0a0c] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-8 h-[1px] bg-[#c5a059]" />
              <span className="text-xs font-sans tracking-[0.25em] text-[#c5a059] uppercase">
                Culinary Focus
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#f5f2eb] font-normal tracking-tight">
              FROM OUR KITCHEN
            </h2>
          </div>

          <button
            onClick={handleScrollToMenu}
            onMouseEnter={() => setActiveCursorMode('VIEW')}
            onMouseLeave={() => setActiveCursorMode(null)}
            className="group inline-flex items-center gap-2 text-xs font-sans tracking-[0.2em] uppercase text-[#dfc27a] hover:text-[#f5f2eb] transition-colors pb-1 border-b border-[#c5a059]/40 hover:border-[#dfc27a]"
          >
            <span>VIEW FULL MENU</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* Dynamic Dual-Column Presentation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Interactive Categories List (Col 1-5) */}
          <div className="lg:col-span-5 flex flex-col space-y-3">
            {showcaseItems.map((item, idx) => {
              const isSelected = activeIndex === idx;
              return (
                <div
                  key={item.id}
                  onClick={() => setActiveIndex(idx)}
                  onMouseEnter={() => setActiveCursorMode('VIEW')}
                  onMouseLeave={() => setActiveCursorMode(null)}
                  className={`p-5 rounded-lg border transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? 'bg-[#18181d] border-[#c5a059] shadow-lg shadow-black/50'
                      : 'bg-[#101014]/60 border-white/5 hover:border-[#c5a059]/30 hover:bg-[#121217]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-3">
                      <span
                        className={`text-xs font-sans tracking-widest tabular-nums ${
                          isSelected ? 'text-[#c5a059]' : 'text-[#8c8275]'
                        }`}
                      >
                        0{idx + 1}
                      </span>
                      <h3
                        className={`font-serif text-xl sm:text-2xl tracking-wide font-normal ${
                          isSelected ? 'text-[#f5e4b8]' : 'text-[#eae4d5]'
                        }`}
                      >
                        {item.title}
                      </h3>
                    </div>
                    <span className="font-devanagari text-xs text-[#c5a059]/60">
                      {item.hindi}
                    </span>
                  </div>
                  <p
                    className={`text-xs font-sans tracking-wide mt-1 line-clamp-1 ${
                      isSelected ? 'text-[#dfc27a]' : 'text-[#8c8275]'
                    }`}
                  >
                    {item.tagline}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right Column: Heroic Photographic Spotlight (Col 6-12) */}
          <div className="lg:col-span-7">
            <div
              className="relative rounded-2xl overflow-hidden border border-[#c5a059]/30 bg-[#121215] shadow-2xl shadow-black/90 group"
              onMouseEnter={() => setActiveCursorMode('TASTE')}
              onMouseLeave={() => setActiveCursorMode(null)}
            >
              {/* Image Frame */}
              <div className="relative aspect-[16/10] sm:aspect-[16/11] overflow-hidden">
                <img
                  src={activeItem.image}
                  alt={activeItem.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transform transition-all duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-[#0a0a0c]/40 to-transparent" />
              </div>

              {/* Textual Overlay info */}
              <div className="p-6 sm:p-8 bg-[#121215] border-t border-white/5 relative z-10">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-sans uppercase tracking-[0.2em] text-[#c5a059]">
                    {activeItem.tagline}
                  </span>
                  <span className="font-devanagari text-sm text-[#8c8275]">
                    {activeItem.hindi}
                  </span>
                </div>

                <h3 className="font-serif text-3xl sm:text-4xl text-[#f5f2eb] font-normal mb-3">
                  {activeItem.title}
                </h3>

                <p className="text-sm font-sans text-[#b8ac9c] leading-relaxed font-light mb-6">
                  {activeItem.description}
                </p>

                {/* Micro tasting notes */}
                <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-[#c5a059]/15">
                  {activeItem.notes.map((note, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-[#eae4d5]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059]" />
                      <span>{note}</span>
                    </div>
                  ))}

                  <button
                    onClick={handleScrollToMenu}
                    className="ml-auto inline-flex items-center gap-1.5 text-xs font-sans tracking-widest uppercase text-[#dfc27a] hover:text-[#f5f2eb] transition-colors"
                  >
                    <span>VIEW MENU →</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
