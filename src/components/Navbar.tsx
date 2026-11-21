import React, { useState, useEffect } from 'react';
import { Menu as MenuIcon, X, Phone, MapPin, ChevronRight } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurant';
import { ChiliLogo } from './ChiliLogo';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Our Story', href: '#story' },
    { name: 'Highlights', href: '#highlights' },
    { name: 'Menu', href: '#menu' },
    { name: 'Experience', href: '#experience' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#location' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#151311]/95 backdrop-blur-md py-3.5 border-b border-[#D8C7AC]/15 shadow-2xl shadow-black/50'
          : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Subtitle */}
          <a
            href="#hero"
            onClick={(e) => handleLinkClick(e, '#hero')}
            className="group flex items-center gap-3 focus:outline-none"
          >
            <ChiliLogo size={42} className="transition-transform duration-300 group-hover:scale-105 group-hover:rotate-3" />
            <div className="flex flex-col">
              <span className="font-serif tracking-[0.2em] text-lg sm:text-xl md:text-2xl font-bold text-[#F4EBDD] uppercase transition-colors group-hover:text-[#D66B32] leading-none">
                Chilies Spot
              </span>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-[10px] sm:text-xs font-semibold tracking-[0.28em] uppercase text-[#D8C7AC]/80">
                  Family Restaurant
                </span>
                <span className="text-[10px] text-[#B52A1D] font-telugu font-medium opacity-90 hidden sm:inline">
                  చిలీస్ స్పాట్
                </span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="relative px-3 py-2 text-xs xl:text-sm font-medium tracking-wider uppercase text-[#F4EBDD]/80 hover:text-[#F4EBDD] transition-colors group"
              >
                {link.name}
                <span className="absolute bottom-1 left-3 right-3 h-[1.5px] bg-[#B52A1D] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
              </a>
            ))}
          </nav>

          {/* Quick Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${RESTAURANT_INFO.phone}`}
              className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold uppercase tracking-wider text-[#D8C7AC] hover:text-[#F4EBDD] bg-white/5 hover:bg-white/10 rounded-full border border-[#D8C7AC]/15 transition-all duration-300"
              title="Call Chilies Spot"
            >
              <Phone className="w-3.5 h-3.5 text-[#B52A1D]" />
              <span>{RESTAURANT_INFO.phoneDisplay}</span>
            </a>

            <a
              href="#location"
              onClick={(e) => handleLinkClick(e, '#location')}
              className="flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-[#F4EBDD] bg-[#B52A1D] hover:bg-[#982216] rounded-full transition-all duration-300 shadow-lg shadow-[#B52A1D]/25 hover:shadow-[#B52A1D]/40 hover:-translate-y-0.5 active:translate-y-0"
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>Find Us</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={`tel:${RESTAURANT_INFO.phone}`}
              className="p-2 rounded-full bg-white/5 border border-white/10 text-[#F4EBDD] hover:text-[#D66B32] transition-colors sm:hidden"
              aria-label="Call Restaurant"
            >
              <Phone className="w-4 h-4 text-[#B52A1D]" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-[#F4EBDD] focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#B52A1D]" /> : <MenuIcon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 top-[60px] bg-[#151311]/98 backdrop-blur-xl lg:hidden transition-all duration-300 ease-in-out border-t border-[#D8C7AC]/15 flex flex-col justify-between p-6 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-4'
        }`}
        style={{ height: 'calc(100vh - 60px)' }}
      >
        <div className="space-y-1">
          <div className="pb-3 mb-2 border-b border-[#D8C7AC]/10">
            <span className="text-[11px] font-semibold uppercase tracking-widest text-[#D8C7AC]/50">
              Navigation Menu
            </span>
            <div className="text-xs font-telugu text-[#D66B32] mt-0.5">
              చిలీస్ స్పాట్ ఫ్యామిలీ రెస్టారెంట్
            </div>
          </div>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="flex items-center justify-between py-3 px-3 rounded-lg text-sm font-medium tracking-wider uppercase text-[#F4EBDD] hover:bg-white/5 hover:text-[#D66B32] transition-colors"
            >
              <span>{link.name}</span>
              <ChevronRight className="w-4 h-4 text-[#D8C7AC]/40" />
            </a>
          ))}
        </div>

        {/* Mobile Drawer Bottom Info & CTAs */}
        <div className="pt-6 border-t border-[#D8C7AC]/15 space-y-3">
          <div className="flex items-center justify-between text-xs text-[#D8C7AC]/80 px-1">
            <span>Location: Yerravaram, A.P.</span>
            <span className="text-[#D66B32]">Closes 10:30 PM</span>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-1">
            <a
              href={`tel:${RESTAURANT_INFO.phone}`}
              className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white/10 text-xs font-semibold uppercase tracking-wider text-[#F4EBDD] border border-white/10 active:scale-95 transition-transform"
            >
              <Phone className="w-3.5 h-3.5 text-[#B52A1D]" />
              <span>Call Us</span>
            </a>
            <a
              href={RESTAURANT_INFO.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#B52A1D] text-xs font-semibold uppercase tracking-wider text-[#F4EBDD] active:scale-95 transition-transform shadow-lg shadow-[#B52A1D]/30"
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>Directions</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
