import { useState } from 'react';
import { MapPin, Phone, Navigation, Copy, Check, Clock, Car, ShieldCheck } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { useRestaurant } from '../context/RestaurantContext';

export default function LocationSection() {
  const [copied, setCopied] = useState(false);
  const { setIsOrderDrawerOpen, setIsReservationModalOpen, setActiveCursorMode } = useRestaurant();

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(RESTAURANT_INFO.addressFull);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="location" className="relative py-28 md:py-36 bg-[#0c0c0e] border-t border-[#c5a059]/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-8 h-[1px] bg-[#c5a059]" />
            <span className="text-xs font-sans tracking-[0.25em] text-[#c5a059] uppercase">
              Visit or Contact
            </span>
            <span className="w-8 h-[1px] bg-[#c5a059]" />
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#f5f2eb] font-normal tracking-tight mb-4">
            YOUR TABLE AWAITS.
          </h2>

          <p className="font-sans text-xs sm:text-sm text-[#b8ac9c] font-light leading-relaxed">
            Conveniently situated on the Ground Floor at The Hosteller in Tajganj, Agra. Open daily until 11:00 PM.
          </p>
        </div>

        {/* Dual Grid: Information Left, Framed Styled Map Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Information Card (Col 1-6) */}
          <div className="lg:col-span-6 p-8 sm:p-10 rounded-2xl bg-[#121215] border border-[#c5a059]/30 shadow-2xl shadow-black/80 flex flex-col justify-between">
            <div>
              {/* Decorative location badge */}
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/5">
                <div>
                  <span className="text-[10px] font-sans tracking-[0.25em] text-[#c5a059] uppercase block mb-1">
                    Location Label
                  </span>
                  <span className="font-serif text-2xl text-[#f5f2eb] tracking-wide">
                    {RESTAURANT_INFO.locationName}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-sans tracking-widest text-emerald-400 uppercase block mb-1">
                    Status
                  </span>
                  <span className="text-xs font-sans text-[#eae4d5]">
                    {RESTAURANT_INFO.openingHours}
                  </span>
                </div>
              </div>

              {/* Full Address Block */}
              <div className="mb-8">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#c5a059] shrink-0 mt-1" />
                  <div>
                    <h3 className="font-serif text-xl text-[#f5f2eb] mb-2">
                      {RESTAURANT_INFO.name}
                    </h3>
                    <p className="font-sans text-sm text-[#b8ac9c] leading-relaxed font-light mb-3">
                      Ground Floor, No. 618,<br />
                      The Hosteller,<br />
                      619, Dhandhupura Rd,<br />
                      Tajganj, Basai,<br />
                      Agra, Uttar Pradesh 282001
                    </p>

                    <button
                      onClick={handleCopyAddress}
                      className="inline-flex items-center gap-1.5 text-xs text-[#dfc27a] hover:text-[#f5f2eb] font-sans tracking-wider uppercase transition-colors"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span>Address Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy Address</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Phone & Timings */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 pt-6 border-t border-white/5">
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#c5a059] shrink-0 mt-1" />
                  <div>
                    <span className="text-[10px] uppercase font-sans tracking-widest text-[#8c8275] block">
                      Direct Line
                    </span>
                    <a
                      href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                      className="font-serif text-lg text-[#f5f2eb] hover:text-[#dfc27a] transition-colors"
                    >
                      {RESTAURANT_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#c5a059] shrink-0 mt-1" />
                  <div>
                    <span className="text-[10px] uppercase font-sans tracking-widest text-[#8c8275] block">
                      Kitchen Hours
                    </span>
                    <span className="font-serif text-lg text-[#f5f2eb]">
                      8 AM – 11 PM Daily
                    </span>
                  </div>
                </div>
              </div>

              {/* Service tags */}
              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/5 text-xs text-[#8c8275]">
                <span className="flex items-center gap-1.5">
                  <Car className="w-3.5 h-3.5 text-[#c5a059]" /> Dine-in & Drive-through
                </span>
                <span>·</span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#c5a059]" /> No-contact Delivery
                </span>
              </div>
            </div>

            {/* Three Primary CTA Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-8 pt-6 border-t border-white/5">
              <a
                href={RESTAURANT_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 text-center font-sans text-xs tracking-wider uppercase font-semibold text-[#0a0a0c] bg-gold-gradient rounded-sm shadow-md hover:brightness-110 transition-all flex items-center justify-center gap-1.5"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>DIRECTIONS</span>
              </a>

              <a
                href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                className="py-3 px-4 text-center font-sans text-xs tracking-wider uppercase text-[#dfc27a] hover:text-[#f5f2eb] border border-[#c5a059]/40 hover:border-[#dfc27a] rounded-sm transition-all flex items-center justify-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>CALL US</span>
              </a>

              <button
                onClick={() => setIsOrderDrawerOpen(true)}
                className="py-3 px-4 text-center font-sans text-xs tracking-wider uppercase text-[#f5f2eb] bg-[#1c1c22] hover:bg-[#282830] border border-white/10 rounded-sm transition-all"
              >
                ORDER ONLINE
              </button>
            </div>
          </div>

          {/* Elegant Framed Map View (Col 7-12) */}
          <div className="lg:col-span-6">
            <div
              className="relative rounded-2xl overflow-hidden border border-[#c5a059]/35 bg-[#121215] shadow-2xl shadow-black/90 p-3"
              onMouseEnter={() => setActiveCursorMode('VISIT')}
              onMouseLeave={() => setActiveCursorMode(null)}
            >
              {/* Decorative Header Bar */}
              <div className="flex items-center justify-between px-3 py-2 text-xs font-sans text-[#8c8275] border-b border-white/5 mb-3">
                <span className="tracking-[0.2em] uppercase text-[#c5a059] font-medium">
                  TAJGANJ · AGRA
                </span>
                <span className="text-[11px] tabular-nums">
                  27.1612° N, 78.0421° E
                </span>
              </div>

              {/* Framed Interactive Map Embed with dark charcoal filter styling */}
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-[#c5a059]/20 bg-[#0c0c0e]">
                <iframe
                  title="D Cafe & Kitchen Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3550.045749455325!2d78.0460395!3d27.1593439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39747121d5a7b6cf%3A0x67c2957b44bc6e8b!2sThe%20Hosteller%20Agra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  className="w-full h-full border-0 filter grayscale invert contrast-125 opacity-80 hover:opacity-100 transition-opacity"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />

                {/* Overlaid Location Badge Pin */}
                <div className="absolute bottom-4 left-4 right-4 p-3.5 bg-[#0a0a0c]/90 backdrop-blur-md rounded-lg border border-[#c5a059]/40 flex items-center justify-between">
                  <div>
                    <h4 className="font-serif text-sm text-[#f5f2eb]">
                      D Cafe & Kitchen
                    </h4>
                    <p className="font-sans text-[11px] text-[#8c8275]">
                      Ground Floor, The Hosteller (618/619)
                    </p>
                  </div>

                  <a
                    href={RESTAURANT_INFO.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded bg-gold-gradient text-[#0a0a0c] hover:brightness-110 transition-all"
                    title="Open in Google Maps"
                  >
                    <Navigation className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Subtle caption */}
              <div className="mt-3 px-3 py-1 flex items-center justify-between text-[11px] text-[#8c8275]">
                <span>Near Tajganj East & South Gates access roads</span>
                <span className="text-[#c5a059]">Valet & Parking friendly</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
