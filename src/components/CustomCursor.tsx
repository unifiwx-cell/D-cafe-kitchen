import { useEffect, useState } from 'react';
import { useRestaurant } from '../context/RestaurantContext';

export default function CustomCursor() {
  const { activeCursorMode } = useRestaurant();
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    // Check if device has fine pointer (mouse)
    const mediaQuery = window.matchMedia('(pointer: fine)');
    if (!mediaQuery.matches) return;

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement;
      if (target) {
        const clickable = target.closest('button, a, input, select, textarea, [role="button"]');
        setIsPointer(!!clickable);
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      className="pointer-events-none fixed z-50 transition-transform duration-75 ease-out hidden md:block"
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        left: 0,
        top: 0,
      }}
    >
      {activeCursorMode ? (
        <div className="-translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-[#c5a059]/90 text-[#0c0c0e] font-serif text-[11px] font-bold tracking-widest uppercase flex items-center justify-center shadow-lg shadow-black/40 backdrop-blur-sm animate-pulse">
            {activeCursorMode}
          </div>
        </div>
      ) : (
        <div
          className={`-translate-x-1/2 -translate-y-1/2 rounded-full border border-[#c5a059]/70 transition-all duration-150 ease-out flex items-center justify-center ${
            isPointer ? 'w-10 h-10 bg-[#c5a059]/10' : 'w-4 h-4 bg-[#c5a059]/30'
          }`}
        >
          <div className="w-1 h-1 rounded-full bg-[#dfc27a]" />
        </div>
      )}
    </div>
  );
}
