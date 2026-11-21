import React from 'react';
import { MapPin, Phone, ExternalLink, ArrowUp } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurant';
import { ChiliLogo } from './ChiliLogo';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Our Story', href: '#story' },
    { name: 'Highlights', href: '#highlights' },
    { name: 'Menu', href: '#menu' },
    { name: 'Experience', href: '#experience' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Location & Contact', href: '#location' },
  ];

  return (
    <footer className="bg-[#110F0D] text-[#F4EBDD] border-t border-[#D8C7AC]/15 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#D8C7AC]/10">
          
          {/* Brand Info Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <ChiliLogo size={46} />
              <div>
                <span className="font-serif tracking-[0.2em] text-xl sm:text-2xl font-bold uppercase text-[#F4EBDD] block leading-none">
                  Chilies Spot
                </span>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#D8C7AC]/80">
                    Family Restaurant
                  </span>
                  <span className="text-xs text-[#D66B32] font-telugu">
                    {RESTAURANT_INFO.teluguName}
                  </span>
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#D8C7AC]/75 max-w-sm leading-relaxed pt-1">
              Serving flavor-rich food, warm hospitality, and memorable family dining moments in Yerravaram, Andhra Pradesh.
            </p>

            <div className="pt-2">
              <p className="font-serif text-sm tracking-widest uppercase text-[#D66B32]">
                “{RESTAURANT_INFO.tagline}”
              </p>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D8C7AC]/60">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-xs sm:text-sm text-[#D8C7AC]/80 hover:text-[#D66B32] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Map Directions Column */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D8C7AC]/60">
              Direct Contact
            </h4>
            
            <div className="space-y-2 text-xs sm:text-sm text-[#D8C7AC]/80">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#B52A1D] flex-shrink-0 mt-0.5" />
                <span>{RESTAURANT_INFO.address}</span>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#D66B32] flex-shrink-0" />
                <a
                  href={`tel:${RESTAURANT_INFO.phone}`}
                  className="hover:text-[#F4EBDD] font-medium"
                >
                  {RESTAURANT_INFO.phoneDisplay}
                </a>
              </div>

              <div className="pt-2">
                <a
                  href={RESTAURANT_INFO.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D66B32] hover:text-[#F4EBDD] transition-colors"
                >
                  <span>Open Google Maps Directions</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Social notice */}
            <div className="pt-3 text-[11px] text-[#D8C7AC]/50">
              <span>Official social channels managed in-house. Inquire at restaurant counter.</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#D8C7AC]/60 gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-4 text-center sm:text-left">
            <span>
              © {currentYear} {RESTAURANT_INFO.name}. All rights reserved.
            </span>
            <span className="hidden sm:inline">•</span>
            <span>Yerravaram, Andhra Pradesh 531055</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-[#D8C7AC] hover:text-[#F4EBDD] transition-all group"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
};
