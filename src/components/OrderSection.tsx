import { Utensils, ShoppingBag, ArrowRight } from 'lucide-react';
import { ASSETS } from '../data/assets';
import { useRestaurant } from '../context/RestaurantContext';

export default function OrderSection() {
  const { setIsOrderDrawerOpen, setIsReservationModalOpen, setActiveCursorMode } = useRestaurant();

  return (
    <section className="relative py-28 md:py-36 bg-[#0a0a0c] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-8 h-[1px] bg-[#c5a059]" />
            <span className="text-xs font-sans tracking-[0.25em] text-[#c5a059] uppercase">
              Dining Flexibility
            </span>
            <span className="w-8 h-[1px] bg-[#c5a059]" />
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#f5f2eb] font-normal tracking-tight mb-4">
            YOUR TABLE OR YOUR DOORSTEP.
          </h2>

          <p className="font-sans text-xs sm:text-sm text-[#b8ac9c] font-light leading-relaxed">
            Experience our freshly simmered curries and clay-oven rotis in our cozy Tajganj dining room, or savor them in the comfort of your stay.
          </p>
        </div>

        {/* Two Large Interactive Panels */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Panel 1: DINE WITH US / COME BY */}
          <div
            onClick={() => setIsReservationModalOpen(true)}
            onMouseEnter={() => setActiveCursorMode('VISIT')}
            onMouseLeave={() => setActiveCursorMode(null)}
            className="group relative rounded-2xl overflow-hidden border border-[#c5a059]/30 bg-[#121215] aspect-[4/3] sm:aspect-[16/11] cursor-pointer shadow-xl shadow-black/80 transition-all duration-500 hover:border-[#dfc27a]"
          >
            {/* Background Image */}
            <img
              src={ASSETS.thaliFeast}
              alt="Dine with us at D Cafe & Kitchen"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-105"
            />
            {/* Gradient Scrim */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-[#0a0a0c]/60 to-[#0a0a0c]/20" />

            {/* Content Lockup */}
            <div className="absolute inset-0 p-8 sm:p-10 flex flex-col justify-between z-10">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-full bg-[#18181d]/80 border border-[#c5a059]/50 flex items-center justify-center text-[#dfc27a] backdrop-blur-sm">
                  <Utensils className="w-4 h-4" />
                </div>
                <span className="font-devanagari text-xs text-[#c5a059]/80">
                  हमारे साथ भोजन करें
                </span>
              </div>

              <div>
                <span className="text-xs font-sans tracking-[0.2em] uppercase text-[#c5a059] block mb-1">
                  DINE WITH US
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl text-[#f5f2eb] font-normal mb-2">
                  COME BY
                </h3>
                <p className="font-sans text-xs sm:text-sm text-[#b8ac9c] font-light max-w-sm mb-6 leading-relaxed">
                  Relax in our air-cooled dining space in Tajganj. Warm hospitality, authentic brass-served thalis, and fresh tandoor breads.
                </p>

                <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gold-gradient text-[#0a0a0c] font-sans text-xs font-semibold tracking-widest uppercase rounded-full group-hover:brightness-110 transition-all">
                  <span>RESERVE TABLE / VISIT</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </div>

          {/* Panel 2: ORDER ONLINE / TAKE IT HOME */}
          <div
            onClick={() => setIsOrderDrawerOpen(true)}
            onMouseEnter={() => setActiveCursorMode('TASTE')}
            onMouseLeave={() => setActiveCursorMode(null)}
            className="group relative rounded-2xl overflow-hidden border border-[#c5a059]/30 bg-[#121215] aspect-[4/3] sm:aspect-[16/11] cursor-pointer shadow-xl shadow-black/80 transition-all duration-500 hover:border-[#dfc27a]"
          >
            {/* Background Image */}
            <img
              src={ASSETS.heroCurry}
              alt="Order online from D Cafe & Kitchen"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-105"
            />
            {/* Gradient Scrim */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-[#0a0a0c]/60 to-[#0a0a0c]/20" />

            {/* Content Lockup */}
            <div className="absolute inset-0 p-8 sm:p-10 flex flex-col justify-between z-10">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-full bg-[#18181d]/80 border border-[#c5a059]/50 flex items-center justify-center text-[#dfc27a] backdrop-blur-sm">
                  <ShoppingBag className="w-4 h-4" />
                </div>
                <span className="font-devanagari text-xs text-[#c5a059]/80">
                  घर पर आनंद लें
                </span>
              </div>

              <div>
                <span className="text-xs font-sans tracking-[0.2em] uppercase text-[#c5a059] block mb-1">
                  ORDER ONLINE
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl text-[#f5f2eb] font-normal mb-2">
                  TAKE IT HOME
                </h3>
                <p className="font-sans text-xs sm:text-sm text-[#b8ac9c] font-light max-w-sm mb-6 leading-relaxed">
                  Fast takeaway or no-contact delivery across Tajganj and Agra. Sealed packaging keeping your meals hot and fresh.
                </p>

                <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gold-gradient text-[#0a0a0c] font-sans text-xs font-semibold tracking-widest uppercase rounded-full group-hover:brightness-110 transition-all">
                  <span>START ONLINE ORDER</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
