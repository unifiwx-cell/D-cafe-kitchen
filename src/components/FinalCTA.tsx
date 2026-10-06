import { ArrowRight } from 'lucide-react';
import { ASSETS } from '../data/assets';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { useRestaurant } from '../context/RestaurantContext';

export default function FinalCTA() {
  const { setIsOrderDrawerOpen, setIsReservationModalOpen, setActiveCursorMode } = useRestaurant();

  return (
    <section className="relative min-h-[90vh] bg-[#070709] overflow-hidden flex items-center justify-center py-24">
      {/* Background Image partially visible with moody vignetting */}
      <div className="absolute inset-0 z-0">
        <img
          src={ASSETS.heroCurry}
          alt="D Cafe & Kitchen cinematic food atmosphere"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center opacity-25 filter blur-[1px] scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070709] via-[#070709]/80 to-[#070709]" />
        <div className="absolute inset-0 bg-texture-grid opacity-30" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Brand identity subtext */}
        <span className="font-devanagari text-sm tracking-widest text-[#c5a059] mb-1">
          {RESTAURANT_INFO.hindiName}
        </span>
        <span className="text-xs font-sans tracking-[0.3em] uppercase text-[#b8ac9c] mb-6">
          {RESTAURANT_INFO.name}
        </span>

        {/* Thin Animated Gold Line */}
        <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#c5a059] to-transparent mb-8" />

        {/* Cinematic Headline */}
        <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#f5f2eb] font-normal tracking-tight leading-[1.0] mb-8 max-w-3xl">
          GOOD FOOD
          <br />
          <span className="italic font-light text-gold-gradient">
            BRINGS PEOPLE
          </span>
          <br />
          TOGETHER.
        </h2>

        <p className="font-sans text-xs sm:text-sm text-[#8c8275] tracking-widest uppercase mb-10 max-w-md">
          FRESH FOOD · WARM PEOPLE · AUTHENTIC FLAVOUR
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-5">
          <button
            onClick={() => setIsReservationModalOpen(true)}
            onMouseEnter={() => setActiveCursorMode('VISIT')}
            onMouseLeave={() => setActiveCursorMode(null)}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gold-gradient text-[#0a0a0c] font-sans text-xs font-semibold tracking-[0.2em] uppercase rounded-full shadow-2xl hover:brightness-110 transition-all duration-300 group"
          >
            <span>VISIT US</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>

          <button
            onClick={() => setIsOrderDrawerOpen(true)}
            onMouseEnter={() => setActiveCursorMode('TASTE')}
            onMouseLeave={() => setActiveCursorMode(null)}
            className="inline-flex items-center gap-2 px-8 py-4 border border-[#c5a059]/40 hover:border-[#dfc27a] text-[#f5f2eb] font-sans text-xs tracking-[0.2em] uppercase rounded-full bg-[#0a0a0c]/60 hover:bg-[#c5a059]/10 transition-all duration-300"
          >
            <span>ORDER ONLINE</span>
          </button>
        </div>
      </div>
    </section>
  );
}
