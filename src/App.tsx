/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { RestaurantProvider } from './context/RestaurantContext';
import CustomCursor from './components/CustomCursor';
import OpeningAnimation from './components/OpeningAnimation';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import IntroSection from './components/IntroSection';
import FoodShowcase from './components/FoodShowcase';
import MenuSection from './components/MenuSection';
import FreshSection from './components/FreshSection';
import IndianFlavour from './components/IndianFlavour';
import AgraSection from './components/AgraSection';
import HospitalitySection from './components/HospitalitySection';
import ReviewSection from './components/ReviewSection';
import DietarySection from './components/DietarySection';
import OrderSection from './components/OrderSection';
import LocationSection from './components/LocationSection';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import OrderDrawer from './components/OrderDrawer';
import ReservationModal from './components/ReservationModal';
import { Phone, ShoppingBag } from 'lucide-react';
import { RESTAURANT_INFO } from './data/restaurantData';
import { useRestaurant } from './context/RestaurantContext';

function MainLayout() {
  const [introFinished, setIntroFinished] = useState(false);
  const { setIsOrderDrawerOpen, cartCount } = useRestaurant();

  return (
    <div className="relative min-h-screen bg-[#0a0a0c] text-[#f5f2eb] font-sans selection:bg-[#c5a059]/30 selection:text-[#f5f2eb] overflow-x-hidden">
      {/* Desktop Custom Cursor */}
      <CustomCursor />

      {/* Cinematic Opening Animation Sequence */}
      {!introFinished && (
        <OpeningAnimation onComplete={() => setIntroFinished(true)} />
      )}

      {/* Floating Luxury Navigation */}
      <Navbar />

      {/* Core Editorial Sections */}
      <main>
        <Hero />
        <IntroSection />
        <FoodShowcase />
        <MenuSection />
        <FreshSection />
        <IndianFlavour />
        <AgraSection />
        <HospitalitySection />
        <ReviewSection />
        <DietarySection />
        <OrderSection />
        <LocationSection />
        <FinalCTA />
      </main>

      {/* Footer */}
      <Footer />

      {/* Drawers & Modals */}
      <OrderDrawer />
      <ReservationModal />

      {/* Mobile Sticky Quick Action Bar (Under 15% mobile viewport cap per Constitution) */}
      <div className="fixed bottom-0 left-0 right-0 z-30 lg:hidden p-3 bg-[#0a0a0c]/95 backdrop-blur-md border-t border-[#c5a059]/25 flex items-center gap-2">
        <a
          href={`tel:${RESTAURANT_INFO.phoneRaw}`}
          className="flex-1 py-2.5 px-3 rounded bg-[#16161c] border border-[#c5a059]/30 text-[#dfc27a] font-sans text-xs uppercase tracking-wider font-medium flex items-center justify-center gap-1.5"
        >
          <Phone className="w-3.5 h-3.5 text-[#c5a059]" />
          <span>Call Desk</span>
        </a>

        <button
          onClick={() => setIsOrderDrawerOpen(true)}
          className="flex-1 py-2.5 px-3 rounded bg-gold-gradient text-[#0a0a0c] font-sans text-xs uppercase tracking-wider font-semibold flex items-center justify-center gap-1.5 shadow-md"
        >
          <ShoppingBag className="w-3.5 h-3.5 text-[#0a0a0c]" />
          <span>Order Online {cartCount > 0 && `(${cartCount})`}</span>
        </button>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <RestaurantProvider>
      <MainLayout />
    </RestaurantProvider>
  );
}
