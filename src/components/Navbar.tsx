import { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X, Phone, Utensils } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { useRestaurant } from '../context/RestaurantContext';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { cartCount, setIsOrderDrawerOpen, setIsReservationModalOpen } = useRestaurant();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'py-3 bg-[#0a0a0c]/90 backdrop-blur-md border-b border-[#c5a059]/25 shadow-lg shadow-black/50'
            : 'py-5 md:py-6 bg-gradient-to-b from-[#070709]/90 via-[#070709]/50 to-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Desktop Left Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7 flex-1">
              <a
                href="#hero"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#hero');
                }}
                className="text-xs font-sans tracking-[0.2em] text-[#eae4d5]/85 hover:text-[#dfc27a] transition-colors relative py-1 hover:border-b hover:border-[#c5a059] whitespace-nowrap uppercase"
              >
                Home
              </a>
              <a
                href="#menu"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#menu');
                }}
                className="text-xs font-sans tracking-[0.2em] text-[#eae4d5]/85 hover:text-[#dfc27a] transition-colors relative py-1 hover:border-b hover:border-[#c5a059] whitespace-nowrap uppercase"
              >
                Menu
              </a>
              <a
                href="#intro"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#intro');
                }}
                className="text-xs font-sans tracking-[0.2em] text-[#eae4d5]/85 hover:text-[#dfc27a] transition-colors relative py-1 hover:border-b hover:border-[#c5a059] whitespace-nowrap uppercase"
              >
                About
              </a>
            </nav>

            {/* Mobile Hamburger on Left */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-[#eae4d5] hover:text-[#dfc27a] transition-colors focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            {/* Center Brand Wordmark (Prominently Centered on Desktop and Mobile) */}
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#hero');
              }}
              className="flex flex-col items-center text-center px-4 group transition-opacity"
            >
              <span className="font-devanagari text-[10px] sm:text-xs tracking-widest text-[#c5a059] group-hover:text-[#f5e4b8] transition-colors leading-none mb-0.5">
                {RESTAURANT_INFO.hindiName}
              </span>
              <span
                className={`font-serif tracking-[0.18em] sm:tracking-[0.24em] uppercase text-[#f5f2eb] font-medium transition-all duration-300 leading-tight ${
                  isScrolled ? 'text-lg sm:text-xl' : 'text-xl sm:text-2xl'
                }`}
              >
                {RESTAURANT_INFO.name}
              </span>
            </a>

            {/* Desktop Right Navigation Links & Primary Action */}
            <div className="hidden lg:flex items-center justify-end gap-6 flex-1">
              <a
                href="#reviews"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#reviews');
                }}
                className="text-xs font-sans tracking-[0.2em] text-[#eae4d5]/85 hover:text-[#dfc27a] transition-colors relative py-1 hover:border-b hover:border-[#c5a059] whitespace-nowrap uppercase"
              >
                Reviews
              </a>
              <a
                href="#location"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#location');
                }}
                className="text-xs font-sans tracking-[0.2em] text-[#eae4d5]/85 hover:text-[#dfc27a] transition-colors relative py-1 hover:border-b hover:border-[#c5a059] whitespace-nowrap uppercase"
              >
                Contact
              </a>

              <button
                onClick={() => setIsReservationModalOpen(true)}
                className="text-xs tracking-wider uppercase font-sans text-[#dfc27a] hover:text-[#f5f2eb] py-2 px-3 border border-[#c5a059]/40 hover:border-[#dfc27a] rounded-sm transition-colors whitespace-nowrap"
              >
                Reserve
              </button>

              <button
                onClick={() => setIsOrderDrawerOpen(true)}
                className="relative inline-flex items-center gap-2 px-4 py-2 text-xs font-sans font-semibold tracking-wider text-[#0a0a0c] bg-gold-gradient hover:brightness-110 rounded-sm shadow-md transition-all whitespace-nowrap"
              >
                <ShoppingBag className="w-3.5 h-3.5 text-[#0a0a0c]" />
                <span>ORDER ONLINE</span>
                {cartCount > 0 && (
                  <span className="w-4 h-4 ml-0.5 bg-[#0a0a0c] text-[#dfc27a] text-[10px] font-bold rounded-full flex items-center justify-center tabular-nums">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>

            {/* Mobile Quick Cart on Right */}
            <div className="lg:hidden flex items-center gap-2">
              <button
                onClick={() => setIsOrderDrawerOpen(true)}
                className="relative p-2 text-[#dfc27a] hover:text-[#f5f2eb]"
                aria-label="Order Cart"
              >
                <ShoppingBag className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute top-1 right-1 w-3.5 h-3.5 bg-[#c5a059] text-[#0a0a0c] text-[9px] font-bold rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Fullscreen Navigation Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-[#070709]/98 backdrop-blur-xl flex flex-col justify-between pt-24 pb-8 px-6 lg:hidden animate-in fade-in duration-200">
          <div className="flex flex-col items-center text-center space-y-6">
            <div className="font-devanagari text-base tracking-widest text-[#c5a059]">
              {RESTAURANT_INFO.hindiName}
            </div>
            <div className="font-serif text-2xl tracking-[0.2em] text-[#f5f2eb] uppercase">
              {RESTAURANT_INFO.name}
            </div>
            <div className="h-[1px] w-20 bg-[#c5a059]/40" />

            <div className="flex flex-col space-y-5 pt-2">
              {[
                { label: 'HOME', href: '#hero' },
                { label: 'MENU', href: '#menu' },
                { label: 'ABOUT', href: '#intro' },
                { label: 'EXPERIENCE', href: '#hospitality' },
                { label: 'REVIEWS', href: '#reviews' },
                { label: 'CONTACT', href: '#location' },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="font-serif text-2xl tracking-[0.15em] text-[#f5f2eb] hover:text-[#dfc27a] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3 pt-6 border-t border-[#c5a059]/20">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setIsReservationModalOpen(true);
              }}
              className="w-full py-3 text-center font-sans text-xs tracking-widest uppercase border border-[#c5a059]/40 text-[#dfc27a] rounded-sm flex items-center justify-center gap-2"
            >
              <Utensils className="w-3.5 h-3.5" />
              <span>Reserve a Table</span>
            </button>
            <a
              href={`tel:${RESTAURANT_INFO.phoneRaw}`}
              className="w-full py-3 flex items-center justify-center gap-2 font-sans text-xs tracking-widest uppercase bg-[#18181d] text-[#eae4d5] border border-white/5 rounded-sm"
            >
              <Phone className="w-3.5 h-3.5 text-[#c5a059]" />
              Call {RESTAURANT_INFO.phone}
            </a>
          </div>
        </div>
      )}
    </>
  );
}
