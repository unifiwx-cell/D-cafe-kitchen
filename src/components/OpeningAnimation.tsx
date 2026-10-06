import { useState, useEffect } from 'react';

interface OpeningAnimationProps {
  onComplete: () => void;
}

export default function OpeningAnimation({ onComplete }: OpeningAnimationProps) {
  const [step, setStep] = useState(1);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    // Check if user already saw the intro in this session to respect repeat visits
    const seen = sessionStorage.getItem('dcafe_intro_seen');
    if (seen) {
      if (onComplete) onComplete();
      return;
    }

    const t1 = setTimeout(() => setStep(2), 250); // draw line
    const t2 = setTimeout(() => setStep(3), 850); // logo fades in
    const t3 = setTimeout(() => setStep(4), 1450); // mask reveal & decorative gold
    const t4 = setTimeout(() => setStep(5), 2050); // headline and finalize
    const t5 = setTimeout(() => {
      setExiting(true);
      setTimeout(() => {
        sessionStorage.setItem('dcafe_intro_seen', 'true');
        if (onComplete) onComplete();
      }, 700);
    }, 2800);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
    };
  }, [onComplete]);

  const handleSkip = () => {
    setExiting(true);
    setTimeout(() => {
      sessionStorage.setItem('dcafe_intro_seen', 'true');
      if (onComplete) onComplete();
    }, 300);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#070709] transition-opacity duration-700 pointer-events-auto ${
        exiting ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Skip button in corner */}
      <button
        onClick={handleSkip}
        className="absolute top-6 right-6 text-xs tracking-widest uppercase text-[#8c8275] hover:text-[#c5a059] transition-colors px-3 py-1.5 border border-[#8c8275]/20 hover:border-[#c5a059]/40 rounded-sm font-sans z-10"
      >
        Skip Intro
      </button>

      {/* Center cinematic lockup */}
      <div className="relative flex flex-col items-center justify-center px-6 text-center max-w-xl w-full">
        {/* Step 2: Thin gold horizontal line draws across */}
        <div
          className="h-[1px] bg-gradient-to-r from-transparent via-[#c5a059] to-transparent transition-all duration-1000 ease-out"
          style={{
            width: step >= 2 ? '100%' : '0%',
            opacity: step >= 2 ? 0.9 : 0,
          }}
        />

        {/* Step 3: D CAFE & KITCHEN logo */}
        <div
          className={`py-6 transition-all duration-1000 ease-out ${
            step >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <div className="font-devanagari text-sm tracking-widest text-[#c5a059]/80 mb-1">
            द कैफे & किचन
          </div>
          <h1 className="font-serif text-3xl md:text-5xl font-normal tracking-[0.2em] text-[#f5f2eb] uppercase">
            D CAFE & KITCHEN
          </h1>
          <p className="text-[11px] font-sans tracking-[0.3em] text-[#8c8275] mt-2 uppercase">
            Agra · Tajganj
          </p>
        </div>

        {/* Step 4: Thin lower line */}
        <div
          className="h-[1px] bg-gradient-to-r from-transparent via-[#c5a059] to-transparent transition-all duration-1000 ease-out"
          style={{
            width: step >= 3 ? '100%' : '0%',
            opacity: step >= 3 ? 0.7 : 0,
          }}
        />

        {/* Step 5: Subtext & Brand premise */}
        <div
          className={`mt-6 transition-all duration-700 ease-out ${
            step >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}
        >
          <p className="font-serif italic text-lg md:text-xl text-[#dfc27a] tracking-wide">
            Fresh Food · Warm People · Authentic Flavour
          </p>
        </div>
      </div>
    </div>
  );
}
