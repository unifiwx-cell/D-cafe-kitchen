import { Phone, Globe, MapPin, Instagram, Facebook, ArrowUp } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'HOME', href: '#hero' },
    { label: 'MENU', href: '#menu' },
    { label: 'ABOUT', href: '#intro' },
    { label: 'REVIEWS', href: '#reviews' },
    { label: 'CONTACT', href: '#location' },
  ];

  return (
    <footer className="relative bg-[#060608] text-[#eae4d5] pt-20 pb-12 border-t border-[#c5a059]/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/5">
          {/* Brand Lockup (Col 1-5) */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="font-devanagari text-base text-[#c5a059] mb-1">
              {RESTAURANT_INFO.hindiName}
            </div>
            <h3 className="font-serif text-3xl font-normal tracking-[0.15em] uppercase text-[#f5f2eb] mb-4">
              {RESTAURANT_INFO.name}
            </h3>

            <p className="font-sans text-xs md:text-sm text-[#8c8275] max-w-sm leading-relaxed mb-6 font-light">
              A contemporary Indian kitchen celebrating slow-cooked curries, handcrafted flatbreads, and authentic warmth in Tajganj, Agra.
            </p>

            <div className="flex items-center gap-3 text-xs text-[#b8ac9c]">
              <span className="px-2.5 py-1 rounded bg-[#121215] border border-[#c5a059]/20">
                Women-Owned
              </span>
              <span className="px-2.5 py-1 rounded bg-[#121215] border border-[#c5a059]/20">
                LGBTQ+ Welcoming
              </span>
            </div>
          </div>

          {/* Quick Links (Col 6-8) */}
          <div className="lg:col-span-3">
            <span className="text-[11px] font-sans tracking-[0.25em] uppercase text-[#c5a059] block mb-5">
              Explore
            </span>
            <ul className="space-y-3">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="font-serif text-base text-[#b8ac9c] hover:text-[#dfc27a] transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Hours (Col 9-12) */}
          <div className="lg:col-span-4 space-y-4">
            <span className="text-[11px] font-sans tracking-[0.25em] uppercase text-[#c5a059] block mb-5">
              Tajganj Agra
            </span>

            <div className="flex items-start gap-2.5 text-xs text-[#8c8275] leading-relaxed">
              <MapPin className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
              <span>{RESTAURANT_INFO.addressFull}</span>
            </div>

            <div className="flex items-center gap-2.5 text-xs text-[#8c8275]">
              <Phone className="w-4 h-4 text-[#c5a059] shrink-0" />
              <a
                href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                className="hover:text-[#dfc27a] transition-colors"
              >
                {RESTAURANT_INFO.phone}
              </a>
            </div>

            <div className="flex items-center gap-2.5 text-xs text-[#8c8275]">
              <Globe className="w-4 h-4 text-[#c5a059] shrink-0" />
              <a
                href={`https://${RESTAURANT_INFO.website}`}
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#dfc27a] transition-colors"
              >
                {RESTAURANT_INFO.website}
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-[#121215] border border-white/5 hover:border-[#c5a059]/40 flex items-center justify-center text-[#b8ac9c] hover:text-[#dfc27a] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-[#121215] border border-white/5 hover:border-[#c5a059]/40 flex items-center justify-center text-[#b8ac9c] hover:text-[#dfc27a] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Sub-footer Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8c8275]">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} {RESTAURANT_INFO.name}. All rights reserved.</span>
          </div>

          {/* Central Mantra Line */}
          <div className="font-serif italic text-sm tracking-wider text-[#dfc27a]">
            FRESH FOOD. WARM PEOPLE.
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-[#dfc27a] transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
