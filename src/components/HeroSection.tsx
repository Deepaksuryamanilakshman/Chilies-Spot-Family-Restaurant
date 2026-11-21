import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Utensils, ChevronDown, Clock, Star, Phone } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurant';

export const HeroSection: React.FC = () => {
  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#151311]">
      {/* Background Image Layer with Parallax & Subtle Zoom */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 3, ease: 'easeOut' }}
          className="w-full h-full"
        >
          <img
            src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=2000&q=85"
            alt="Warm Indian restaurant atmosphere and dining at Chilies Spot"
            className="w-full h-full object-cover object-center filter brightness-[0.42] contrast-[1.12]"
            loading="eager"
          />
        </motion.div>
        
        {/* Cinematic Multi-layered Vignette & Color Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#151311] via-[#151311]/45 to-black/75" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#151311]/40 to-[#151311]/90" />
        
        {/* Subtle Warm Amber Light Accent */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#D66B32]/10 blur-[120px] rounded-full pointer-events-none" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-28 pb-20 flex flex-col items-center">
        {/* Location & Status Eyebrow Tag */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#D8C7AC]/20 mb-6 shadow-inner"
        >
          <MapPin className="w-3.5 h-3.5 text-[#B52A1D]" />
          <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-[#F4EBDD]">
            Yerravaram, Andhra Pradesh
          </span>
          <span className="w-1 h-1 rounded-full bg-[#D8C7AC]/40" />
          <span className="text-[11px] sm:text-xs font-telugu text-[#D66B32] hidden xs:inline">
            ఆంధ్రప్రదేశ్
          </span>
        </motion.div>

        {/* Telugu Brand Accent */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xs sm:text-sm tracking-[0.18em] text-[#D8C7AC]/80 font-telugu mb-3"
        >
          {RESTAURANT_INFO.teluguName}
        </motion.p>

        {/* Main Hero Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#F4EBDD] leading-[1.12] mb-6 max-w-4xl"
        >
          WHERE EVERY BITE <br />
          <span className="italic font-editorial font-normal text-[#D66B32] tracking-normal">
            Brings People Together.
          </span>
        </motion.h1>

        {/* Supporting Copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-sm sm:text-base md:text-lg text-[#D8C7AC]/90 max-w-2xl font-normal leading-relaxed mb-8"
        >
          Bringing people together over delicious food, warm hospitality, and moments worth sharing in the heart of Yerravaram.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-10"
        >
          <button
            onClick={() => scrollToSection('#menu')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-[#B52A1D] hover:bg-[#982216] text-[#F4EBDD] font-semibold text-xs sm:text-sm uppercase tracking-widest transition-all duration-300 shadow-xl shadow-[#B52A1D]/30 hover:shadow-[#B52A1D]/50 hover:-translate-y-0.5 active:translate-y-0"
          >
            <Utensils className="w-4 h-4" />
            <span>Explore Our Menu</span>
          </button>

          <button
            onClick={() => scrollToSection('#location')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/15 text-[#F4EBDD] font-semibold text-xs sm:text-sm uppercase tracking-widest border border-[#D8C7AC]/25 backdrop-blur-md transition-all duration-300 hover:border-[#D66B32] hover:-translate-y-0.5 active:translate-y-0"
          >
            <MapPin className="w-4 h-4 text-[#D66B32]" />
            <span>Find Our Restaurant</span>
          </button>
        </motion.div>

        {/* Verified Quick Highlights Ribbon */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-3xl w-full pt-4 border-t border-[#D8C7AC]/15"
        >
          <div className="flex flex-col items-center justify-center p-2 rounded-lg bg-black/30 border border-white/5">
            <div className="flex items-center gap-1 text-[#D66B32] font-semibold text-xs sm:text-sm">
              <Star className="w-3.5 h-3.5 fill-[#D66B32]" />
              <span>836 Reviews</span>
            </div>
            <span className="text-[10px] text-[#D8C7AC]/70 tracking-wider uppercase mt-0.5">Google Listing</span>
          </div>

          <div className="flex flex-col items-center justify-center p-2 rounded-lg bg-black/30 border border-white/5">
            <div className="flex items-center gap-1 text-[#F4EBDD] font-semibold text-xs sm:text-sm">
              <span>₹200–₹400</span>
            </div>
            <span className="text-[10px] text-[#D8C7AC]/70 tracking-wider uppercase mt-0.5">Price Per Person</span>
          </div>

          <div className="flex flex-col items-center justify-center p-2 rounded-lg bg-black/30 border border-white/5">
            <div className="flex items-center gap-1 text-[#F4EBDD] font-semibold text-xs sm:text-sm">
              <Clock className="w-3.5 h-3.5 text-[#B52A1D]" />
              <span>Closes 10:30 PM</span>
            </div>
            <span className="text-[10px] text-[#D8C7AC]/70 tracking-wider uppercase mt-0.5">Listed Hours</span>
          </div>

          <a
            href={`tel:${RESTAURANT_INFO.phone}`}
            className="flex flex-col items-center justify-center p-2 rounded-lg bg-black/30 hover:bg-white/5 border border-white/5 transition-colors group"
          >
            <div className="flex items-center gap-1 text-[#F4EBDD] group-hover:text-[#D66B32] font-semibold text-xs sm:text-sm">
              <Phone className="w-3.5 h-3.5 text-[#B52A1D]" />
              <span>096186 14321</span>
            </div>
            <span className="text-[10px] text-[#D8C7AC]/70 tracking-wider uppercase mt-0.5">Direct Call</span>
          </a>
        </motion.div>
      </div>

      {/* Refined Animated Scroll Down Indicator */}
      <motion.button
        onClick={() => scrollToSection('#story')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-[#D8C7AC]/70 hover:text-[#F4EBDD] transition-colors focus:outline-none"
        aria-label="Scroll to restaurant introduction"
      >
        <span className="text-[10px] font-semibold uppercase tracking-[0.25em]">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-4 h-4 text-[#D66B32]" />
        </motion.div>
      </motion.button>
    </section>
  );
};
