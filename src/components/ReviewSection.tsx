import { Star } from 'lucide-react';
import { REVIEWS_DATA, RESTAURANT_INFO } from '../data/restaurantData';

export default function ReviewSection() {
  const marqueeItems = [
    'FRESH FOOD',
    'GREAT SERVICE',
    'WARM HOSPITALITY',
    'INDIAN FLAVOUR',
    'GOOD VALUE',
    'FRESH FOOD',
    'GREAT SERVICE',
    'WARM HOSPITALITY',
    'INDIAN FLAVOUR',
    'GOOD VALUE',
  ];

  return (
    <section id="reviews" className="relative py-28 md:py-36 bg-[#0a0a0c] overflow-hidden">
      {/* Horizontal Gold-on-Black Review Marquee */}
      <div className="w-full bg-[#121215] border-t border-b border-[#c5a059]/25 py-4 overflow-hidden mb-24">
        <div className="flex w-max animate-marquee space-x-12 items-center">
          {marqueeItems.concat(marqueeItems).map((text, i) => (
            <div key={i} className="flex items-center space-x-12 shrink-0">
              <span className="font-serif tracking-[0.25em] text-sm md:text-base text-[#dfc27a] uppercase font-light">
                {text}
              </span>
              <span className="text-[#c5a059]/40 text-xs">◆</span>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Large Rating */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-8 h-[1px] bg-[#c5a059]" />
              <span className="text-xs font-sans tracking-[0.25em] text-[#c5a059] uppercase">
                Guest Reflections
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#f5f2eb] font-normal tracking-tight">
              WHAT OUR GUESTS SAY
            </h2>
            <p className="font-sans text-xs md:text-sm text-[#8c8275] tracking-wide mt-2">
              Verified dining impressions across travelers, locals, and hostel residents
            </p>
          </div>

          {/* Large Rating Block */}
          <div className="flex items-center gap-5 p-4 rounded-xl bg-[#121215] border border-[#c5a059]/30 self-start md:self-auto">
            <div className="text-right">
              <div className="font-serif text-4xl sm:text-5xl text-[#dfc27a] font-normal leading-none tabular-nums">
                {RESTAURANT_INFO.rating} ★
              </div>
              <span className="text-[11px] font-sans tracking-widest text-[#8c8275] uppercase block mt-1">
                {RESTAURANT_INFO.reviewsCount} REVIEWS
              </span>
            </div>
            <div className="h-10 w-[1px] bg-[#c5a059]/20" />
            <div className="flex flex-col">
              <div className="flex items-center gap-1 text-[#dfc27a]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#dfc27a] text-[#dfc27a]" />
                ))}
              </div>
              <span className="text-[10px] text-[#8c8275] font-sans mt-1">
                Google Verified Rating
              </span>
            </div>
          </div>
        </div>

        {/* Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS_DATA.map((review) => (
            <div
              key={review.id}
              className="p-6 sm:p-7 rounded-xl bg-[#121215] border border-white/5 hover:border-[#c5a059]/35 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Theme & Rating */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-sans tracking-wider uppercase text-[#c5a059] font-medium">
                    {review.theme}
                  </span>
                  <div className="flex items-center gap-0.5 text-[#dfc27a]">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#dfc27a] text-[#dfc27a]" />
                    ))}
                  </div>
                </div>

                {/* Comment */}
                <p className="font-serif italic text-base sm:text-lg text-[#eae4d5] leading-relaxed mb-6 font-light">
                  "{review.comment}"
                </p>
              </div>

              {/* Author & Highlight Dish */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <div>
                  <h4 className="font-serif text-sm text-[#f5f2eb] font-medium">
                    {review.author}
                  </h4>
                  <span className="text-[11px] font-sans text-[#8c8275]">
                    {review.origin}
                  </span>
                </div>

                {review.highlightDish && (
                  <span className="text-[10px] font-sans text-[#dfc27a] bg-[#18181d] px-2 py-1 rounded border border-[#c5a059]/20">
                    {review.highlightDish}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
