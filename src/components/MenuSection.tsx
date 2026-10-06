import { useState } from 'react';
import { Plus, Check, Sparkles, Flame, Leaf } from 'lucide-react';
import { MENU_CATEGORIES, MENU_ITEMS, MenuItem } from '../data/restaurantData';
import { ASSETS } from '../data/assets';
import { useRestaurant } from '../context/RestaurantContext';

export default function MenuSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('curries');
  const [filterDietary, setFilterDietary] = useState<'all' | 'veg' | 'signature'>('all');
  const [addedItemIds, setAddedItemIds] = useState<Record<string, boolean>>({});

  const { addToCart, setIsOrderDrawerOpen, setActiveCursorMode } = useRestaurant();

  // Category imagery map
  const categoryImages: Record<string, string> = {
    starters: ASSETS.mushroomMasala,
    mains: ASSETS.heroCurry,
    curries: ASSETS.heroCurry,
    breads: ASSETS.alooParatha,
    thali: ASSETS.thaliFeast,
    drinks: ASSETS.cafeInterior,
    specials: ASSETS.mushroomMasala,
  };

  const handleAdd = (item: MenuItem) => {
    addToCart(item);
    setAddedItemIds((prev) => ({ ...prev, [item.id]: true }));
    setTimeout(() => {
      setAddedItemIds((prev) => ({ ...prev, [item.id]: false }));
    }, 1500);
  };

  const activeCategoryMeta = MENU_CATEGORIES.find((c) => c.id === selectedCategory) || MENU_CATEGORIES[2];

  const currentCategoryItems = MENU_ITEMS.filter((item) => {
    if (item.category !== selectedCategory) return false;
    if (filterDietary === 'veg' && item.dietary !== 'veg') return false;
    if (filterDietary === 'signature' && !item.isSignature && !item.isChefSpecial) return false;
    return true;
  });

  return (
    <section id="menu" className="relative py-28 md:py-36 bg-[#0c0c0e] border-t border-b border-[#c5a059]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-8 h-[1px] bg-[#c5a059]" />
              <span className="text-xs font-sans tracking-[0.25em] text-[#c5a059] uppercase">
                The Carte
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#f5f2eb] font-normal tracking-tight">
              CURATED MENU
            </h2>
            <p className="font-sans text-xs md:text-sm text-[#8c8275] tracking-wide mt-2">
              All dishes prepared fresh to order · Approximate budget ₹200–₹400 per person
            </p>
          </div>

          {/* Interactive Filter Segmented Control (Clean functional buttons per Constitution) */}
          <div className="flex items-center gap-2 p-1 bg-[#18181d] border border-white/5 rounded-lg self-start md:self-auto">
            <button
              onClick={() => setFilterDietary('all')}
              className={`px-3.5 py-1.5 text-xs font-sans tracking-wider rounded-md transition-all whitespace-nowrap ${
                filterDietary === 'all'
                  ? 'bg-gold-gradient text-[#0a0a0c] font-semibold shadow-sm'
                  : 'text-[#b8ac9c] hover:text-[#f5f2eb]'
              }`}
            >
              All Items
            </button>
            <button
              onClick={() => setFilterDietary('veg')}
              className={`px-3.5 py-1.5 text-xs font-sans tracking-wider rounded-md transition-all flex items-center gap-1.5 whitespace-nowrap ${
                filterDietary === 'veg'
                  ? 'bg-gold-gradient text-[#0a0a0c] font-semibold shadow-sm'
                  : 'text-[#b8ac9c] hover:text-[#f5f2eb]'
              }`}
            >
              <Leaf className="w-3 h-3 text-emerald-400" />
              <span>Vegetarian</span>
            </button>
            <button
              onClick={() => setFilterDietary('signature')}
              className={`px-3.5 py-1.5 text-xs font-sans tracking-wider rounded-md transition-all flex items-center gap-1.5 whitespace-nowrap ${
                filterDietary === 'signature'
                  ? 'bg-gold-gradient text-[#0a0a0c] font-semibold shadow-sm'
                  : 'text-[#b8ac9c] hover:text-[#f5f2eb]'
              }`}
            >
              <Sparkles className="w-3 h-3 text-[#dfc27a]" />
              <span>Signatures</span>
            </button>
          </div>
        </div>

        {/* Mobile Swipeable Category Strip */}
        <div className="lg:hidden flex overflow-x-auto pb-4 mb-8 gap-2 scrollbar-none no-scrollbar">
          {MENU_CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2.5 rounded-lg border text-xs tracking-wider uppercase font-sans whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-[#18181d] border-[#c5a059] text-[#dfc27a] font-semibold'
                    : 'bg-[#101014] border-white/5 text-[#8c8275]'
                }`}
              >
                <span className="text-[10px] opacity-70 mr-1.5">{cat.number}</span>
                {cat.title}
              </button>
            );
          })}
        </div>

        {/* Desktop Split Experience: Vertical Editorial Categories Left, Dish List Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Vertical Category Navigation (Col 1-5) */}
          <div className="hidden lg:flex lg:col-span-4 flex-col space-y-2 sticky top-28">
            <div className="text-[11px] font-sans tracking-[0.25em] text-[#8c8275] uppercase mb-2">
              Select Category
            </div>

            {MENU_CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <div
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  onMouseEnter={() => setActiveCursorMode('VIEW')}
                  onMouseLeave={() => setActiveCursorMode(null)}
                  className={`group relative p-4 rounded-lg cursor-pointer transition-all duration-300 border ${
                    isActive
                      ? 'bg-[#18181d] border-[#c5a059]/80 shadow-lg'
                      : 'bg-transparent border-transparent hover:bg-[#121215] hover:border-white/5'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-baseline gap-3">
                      <span
                        className={`text-xs font-sans tracking-widest tabular-nums transition-all duration-300 ${
                          isActive
                            ? 'text-[#c5a059] font-bold scale-110'
                            : 'text-[#8c8275] group-hover:text-[#dfc27a]'
                        }`}
                      >
                        {cat.number} —
                      </span>
                      <span
                        className={`font-serif text-xl tracking-wide transition-colors duration-300 ${
                          isActive
                            ? 'text-gold-gradient font-medium'
                            : 'text-[#eae4d5] group-hover:text-[#f5f2eb]'
                        }`}
                      >
                        {cat.title}
                      </span>
                    </div>

                    {/* Animated gold line accent */}
                    <div
                      className={`h-[1px] bg-[#c5a059] transition-all duration-500 ${
                        isActive ? 'w-12 opacity-100' : 'w-0 opacity-0 group-hover:w-6 group-hover:opacity-50'
                      }`}
                    />
                  </div>
                  <p
                    className={`text-[11px] font-sans tracking-normal mt-1 transition-colors ${
                      isActive ? 'text-[#dfc27a]/90' : 'text-[#8c8275]'
                    }`}
                  >
                    {cat.subtitle}
                  </p>
                </div>
              );
            })}

            {/* Micro Category Visual Preview Frame */}
            <div className="mt-6 pt-4 border-t border-white/5">
              <div className="relative rounded-lg overflow-hidden aspect-[16/9] border border-[#c5a059]/20">
                <img
                  src={categoryImages[selectedCategory] || ASSETS.heroCurry}
                  alt={activeCategoryMeta.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-transparent" />
                <div className="absolute bottom-2 left-3 right-3 text-left">
                  <span className="text-[10px] font-sans tracking-widest uppercase text-[#c5a059]">
                    Category Highlight
                  </span>
                  <p className="font-serif text-sm text-[#f5f2eb]">
                    {activeCategoryMeta.title}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Dish List (Col 5-12) */}
          <div className="lg:col-span-8 space-y-4">
            {/* Active Category Header */}
            <div className="flex items-baseline justify-between border-b border-[#c5a059]/20 pb-4 mb-6">
              <div>
                <span className="text-xs font-sans tracking-widest text-[#c5a059] uppercase block mb-1">
                  Category {activeCategoryMeta.number}
                </span>
                <h3 className="font-serif text-3xl md:text-4xl text-[#f5f2eb] font-normal">
                  {activeCategoryMeta.title}
                </h3>
              </div>
              <span className="text-xs font-sans text-[#8c8275] tabular-nums">
                {currentCategoryItems.length} dishes available
              </span>
            </div>

            {/* Dishes list */}
            {currentCategoryItems.length === 0 ? (
              <div className="p-12 text-center text-[#8c8275] border border-dashed border-white/10 rounded-xl">
                No items match your selected filter in this category.
              </div>
            ) : (
              <div className="space-y-4">
                {currentCategoryItems.map((dish) => {
                  const wasAdded = addedItemIds[dish.id];
                  return (
                    <div
                      key={dish.id}
                      className="p-5 sm:p-6 rounded-xl bg-[#121215] border border-white/5 hover:border-[#c5a059]/30 transition-all duration-300 group"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                        <div className="flex-1">
                          {/* Dish Title & Badges */}
                          <div className="flex flex-wrap items-center gap-2 mb-1.5">
                            {/* Vegetarian / Non-Veg Indicator */}
                            <span
                              className={`w-3.5 h-3.5 border flex items-center justify-center shrink-0 ${
                                dish.dietary === 'veg'
                                  ? 'border-emerald-500'
                                  : 'border-rose-500'
                              }`}
                              title={dish.dietary === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'}
                            >
                              <span
                                className={`w-1.5 h-1.5 rounded-full ${
                                  dish.dietary === 'veg'
                                    ? 'bg-emerald-500'
                                    : 'bg-rose-500'
                                }`}
                              />
                            </span>

                            <h4 className="font-serif text-xl sm:text-2xl text-[#f5f2eb] group-hover:text-[#dfc27a] transition-colors">
                              {dish.name}
                            </h4>

                            {dish.hindiName && (
                              <span className="font-devanagari text-xs text-[#8c8275]">
                                {dish.hindiName}
                              </span>
                            )}

                            {dish.isChefSpecial && (
                              <span className="text-[10px] font-sans tracking-widest uppercase text-[#dfc27a] px-2 py-0.5 border border-[#c5a059]/40 rounded">
                                Chef's Pick
                              </span>
                            )}
                          </div>

                          {/* Description */}
                          <p className="text-xs sm:text-sm font-sans text-[#b8ac9c] font-light leading-relaxed mb-3 max-w-xl">
                            {dish.description}
                          </p>

                          {/* Flavor tags: Spiciness indicator */}
                          <div className="flex items-center gap-3 text-[11px] text-[#8c8275]">
                            <span className="flex items-center gap-1 capitalize">
                              <Flame className="w-3 h-3 text-[#c5a059]" />
                              {dish.spiciness} Spice
                            </span>
                            <span>·</span>
                            <span className="text-[#8c8275]">Fresh to Order</span>
                          </div>
                        </div>

                        {/* Price & Add to Order CTA */}
                        <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-start gap-3 shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-white/5">
                          <span className="font-serif text-2xl font-semibold text-[#f5f2eb] tabular-nums">
                            ₹{dish.price}
                          </span>

                          <button
                            onClick={() => handleAdd(dish)}
                            className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded text-xs font-sans tracking-wider uppercase transition-all duration-200 whitespace-nowrap ${
                              wasAdded
                                ? 'bg-emerald-600 text-white'
                                : 'bg-[#1c1c22] hover:bg-[#c5a059] text-[#eae4d5] hover:text-[#0a0a0c] border border-[#c5a059]/30'
                            }`}
                          >
                            {wasAdded ? (
                              <>
                                <Check className="w-3.5 h-3.5" />
                                <span>Added</span>
                              </>
                            ) : (
                              <>
                                <Plus className="w-3.5 h-3.5" />
                                <span>Add to Order</span>
                              </>
                            )}
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Bottom Menu Notice */}
            <div className="p-4 rounded-lg bg-[#18181d]/50 border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
              <span className="text-xs font-sans text-[#8c8275]">
                Special dietary needs or mild spice requests? Inform us during checkout.
              </span>
              <button
                onClick={() => setIsOrderDrawerOpen(true)}
                className="text-xs font-sans tracking-widest uppercase text-[#dfc27a] hover:underline"
              >
                Review Current Bag →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
