import { ArrowRight, ChevronDown, Sparkles, Clock, MapPin } from 'lucide-react';
import { ASSETS } from '../data/assets';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { useRestaurant } from '../context/RestaurantContext';

export default function Hero() {
  const { setIsOrderDrawerOpen, setActiveCursorMode } = useRestaurant();

  const handleScrollToMenu = () => {
    const el = document.getElementById('menu');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full overflow-hidden flex flex-col justify-between pt-24 md:pt-32 pb-12"
    >
      {/* Immersive Full-Bleed Background Image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src={ASSETS.heroCurry}
          alt="D Cafe & Kitchen luxury Indian culinary spread"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
        />

        {/* Multi-layered cinematic dark scrim to ensure pristine text contrast & atmosphere */}
        <div className="absolute inset-0 bg-[#0a0a0c]/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-[#0a0a0c]/60 to-[#0a0a0c]/85" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(10,10,12,0.85)_100%)]" />
        <div className="absolute inset-0 bg-texture-grid opacity-20" />
      </div>

      {/* Subtle decorative gold ambient glow in center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#c5a059]/10 rounded-full blur-[160px] pointer-events-none" />

      {/* Main Centered Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto text-center flex flex-col items-center">
        {/* Top Kicker & Location marker */}
        <div className="inline-flex items-center gap-3 mb-6">
          <span className="h-[1px] w-10 sm:w-16 bg-gradient-to-r from-transparent to-[#c5a059]" />
          <div className="flex items-center gap-2 text-xs font-sans uppercase tracking-[0.28em] text-[#dfc27a]">
            <MapPin className="w-3.5 h-3.5 text-[#c5a059]" />
            <span>Tajganj · Agra</span>
          </div>
          <span className="h-[1px] w-10 sm:w-16 bg-gradient-to-l from-transparent to-[#c5a059]" />
        </div>

        {/* Centered Cafe Hindi Name */}
        <div className="font-devanagari text-lg sm:text-2xl tracking-[0.2em] text-[#dfc27a] font-normal mb-2 drop-shadow-md">
          {RESTAURANT_INFO.hindiName}
        </div>

        {/* Prominent Centered Cafe Name */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-[0.16em] sm:tracking-[0.22em] text-[#f5f2eb] uppercase leading-tight mb-4 drop-shadow-2xl">
          {RESTAURANT_INFO.name}
        </h1>

        {/* Thin Gold Dividing Line */}
        <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-[#c5a059] to-transparent my-3" />

        {/* Secondary Editorial Headline */}
        <div className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#f5f2eb] font-light tracking-wide mb-4">
          <span>COME HUNGRY. </span>
          <span className="italic text-gold-gradient font-normal">
            LEAVE HAPPY.
          </span>
        </div>

        {/* Sub-descriptor copy */}
        <p className="font-sans text-xs sm:text-sm md:text-base text-[#eae4d5]/90 tracking-[0.15em] uppercase font-light max-w-2xl mb-8 leading-relaxed drop-shadow-sm">
          INDIAN FOOD · FRESHLY PREPARED · AGRA
          <span className="block text-xs font-normal text-[#b8ac9c] tracking-normal capitalize mt-1.5 font-sans">
            Homestyle rich curries, clay-tandoor rotis, and crisp aloo parathas with pure white butter.
          </span>
        </p>

        {/* Centered CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-6 mb-10">
          {/* Primary CTA with subtle rotating gold ring */}
          <div className="relative group">
            <div className="absolute -inset-1.5 rounded-full border border-[#c5a059]/40 group-hover:border-[#c5a059] transition-all duration-500 scale-95 group-hover:scale-105 pointer-events-none" />
            <button
              onClick={handleScrollToMenu}
              onMouseEnter={() => setActiveCursorMode('VIEW')}
              onMouseLeave={() => setActiveCursorMode(null)}
              className="relative inline-flex items-center gap-3 px-8 py-4 bg-gold-gradient text-[#0a0a0c] font-sans font-semibold text-xs tracking-[0.2em] uppercase rounded-full shadow-2xl shadow-black/80 hover:brightness-110 transition-all duration-300"
            >
              <span>EXPLORE MENU</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>

          {/* Secondary CTA */}
          <button
            onClick={() => setIsOrderDrawerOpen(true)}
            onMouseEnter={() => setActiveCursorMode('TASTE')}
            onMouseLeave={() => setActiveCursorMode(null)}
            className="inline-flex items-center gap-2 px-8 py-4 text-xs font-sans tracking-[0.2em] uppercase text-[#f5f2eb] border border-[#c5a059]/50 hover:border-[#dfc27a] hover:bg-[#c5a059]/15 backdrop-blur-md rounded-full bg-[#0a0a0c]/60 transition-all duration-300"
          >
            <span>ORDER ONLINE</span>
          </button>
        </div>

        {/* Centered Trust Markers & Highlights */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 pt-6 border-t border-white/10 text-xs text-[#eae4d5]/80">
          <div className="flex items-center gap-2">
            <span className="text-[#dfc27a] font-serif text-lg font-semibold tabular-nums">
              4.8 ★
            </span>
            <span className="text-[#b8ac9c]">(149 Google Reviews)</span>
          </div>

          <span className="hidden sm:inline text-white/20">•</span>

          <div className="flex items-center gap-2 text-[#b8ac9c]">
            <Clock className="w-3.5 h-3.5 text-[#c5a059]" />
            <span>Open Daily · Closes 11 PM</span>
          </div>

          <span className="hidden sm:inline text-white/20">•</span>

          <div className="flex items-center gap-2 text-[#b8ac9c]">
            <Sparkles className="w-3.5 h-3.5 text-[#c5a059]" />
            <span>Women-Owned & LGBTQ+ Welcoming</span>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="relative z-10 flex flex-col items-center justify-center pt-6">
        <button
          onClick={handleScrollToMenu}
          aria-label="Scroll down to explore"
          className="flex flex-col items-center gap-1.5 text-[#8c8275] hover:text-[#c5a059] transition-colors group"
        >
          <span className="text-[10px] font-sans tracking-[0.25em] uppercase text-[#b8ac9c] group-hover:text-[#dfc27a]">
            Scroll to Explore
          </span>
          <ChevronDown className="w-4 h-4 text-[#c5a059] animate-bounce" />
        </button>
      </div>
    </section>
  );
}
