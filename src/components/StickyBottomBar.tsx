"use client";
import { useState, useEffect } from "react";

interface Props {
  name: string;
  price: number;
  mayarUrl: string;
}

export function StickyBottomBar({ name, price, mayarUrl }: Props) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Muncul ketika di-scroll 3/4 dari tinggi layar (melewati hero section)
      const triggerPoint = window.innerHeight * 0.75;
      setIsVisible(window.scrollY > triggerPoint);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className={`fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-t border-border py-4 px-6 shadow-[0_-10px_40px_rgba(0,0,0,0.5)] transition-transform duration-500 ease-out ${
        isVisible ? 'translate-y-0' : 'translate-y-[150%]'
      }`}
    >
      <div className="flex items-center justify-between gap-4 max-w-6xl mx-auto">
        <div className="flex-1 truncate hidden sm:block">
          <p className="text-xs text-muted-foreground truncate">{name}</p>
          <p className="font-display font-black text-accent text-xl mt-0.5">Rp {price.toLocaleString('id-ID')}</p>
        </div>
        <div className="sm:hidden flex-1">
          <p className="font-display font-black text-accent text-xl">Rp {price.toLocaleString('id-ID')}</p>
        </div>
        <a href={mayarUrl} target="_blank" rel="noopener noreferrer" className="bg-accent text-accent-foreground px-6 py-3 rounded-xl font-bold text-sm whitespace-nowrap hover:opacity-90 transition glow-accent">
          Beli Sekarang →
        </a>
      </div>
    </div>
  );
}
