import { MapPin, Navigation, Clock } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export default function AgraSection() {
  return (
    <section className="relative py-28 md:py-36 bg-[#0a0a0c] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl border border-[#c5a059]/30 bg-gradient-to-br from-[#121215] to-[#0a0a0c] p-8 sm:p-12 md:p-16 overflow-hidden">
          {/* Subtle antique gold corner border flourishes */}
          <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-[#c5a059]/40" />
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-[#c5a059]/40" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Textual Storytelling (Col 1-7) */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-8 h-[1px] bg-[#c5a059]" />
                <span className="text-xs font-sans tracking-[0.25em] text-[#c5a059] uppercase">
                  Tajganj Sanctuary
                </span>
              </div>

              <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#f5f2eb] font-normal tracking-tight mb-6">
                A TASTE OF AGRA.
              </h2>

              <p className="font-serif italic text-lg sm:text-xl text-[#dfc27a] mb-6 leading-relaxed">
                Located in Tajganj, D Cafe & Kitchen offers a welcoming place to enjoy freshly prepared Indian food while exploring Agra.
              </p>

              <p className="font-sans text-sm md:text-base text-[#b8ac9c] leading-relaxed font-light mb-8">
                Whether you have spent your morning wandering the monumental marble courtyards of the Taj Mahal or arriving in the city for business and leisure, our doors on Dhandhupura Road are open with soothing cups of masala chai, hot stuffed parathas, and rich, simmering gravies.
              </p>

              {/* Location Highlights Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/5">
                <div className="flex items-start gap-3 text-left">
                  <MapPin className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-sans font-medium text-[#f5f2eb] block">Tajganj, Agra</span>
                    <span className="text-[11px] text-[#8c8275]">Basai / Dhandhupura Rd</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-left">
                  <Clock className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-sans font-medium text-[#f5f2eb] block">Open Daily</span>
                    <span className="text-[11px] text-[#8c8275]">Closes 11:00 PM</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-left">
                  <Navigation className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-sans font-medium text-[#f5f2eb] block">Ground Floor</span>
                    <span className="text-[11px] text-[#8c8275]">At The Hosteller (618/619)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual & Map Hint Right (Col 8-12) */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center text-center p-8 rounded-xl bg-[#0a0a0c]/80 border border-[#c5a059]/20">
              <span className="font-devanagari text-2xl text-[#c5a059] mb-2">
                आगरा का स्वागत
              </span>
              <h3 className="font-serif text-2xl text-[#f5f2eb] font-normal mb-3">
                Rest & Replenish
              </h3>
              <p className="font-sans text-xs text-[#8c8275] mb-6 max-w-xs leading-relaxed">
                Step away from the street bustle into a serene, air-cooled haven designed for quiet dining and soulful conversation.
              </p>

              <a
                href={RESTAURANT_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1c1c22] hover:bg-[#c5a059] text-[#eae4d5] hover:text-[#0a0a0c] border border-[#c5a059]/40 rounded-full text-xs font-sans tracking-widest uppercase transition-all duration-300"
              >
                <span>OPEN IN GOOGLE MAPS</span>
                <Navigation className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
