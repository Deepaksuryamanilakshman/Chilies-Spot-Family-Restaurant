import React from 'react';
import { motion } from 'framer-motion';
import { Navigation, Phone, MapPin, Clock, Star } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurant';

export const ContactSection: React.FC = () => {
  return (
    <section className="relative py-28 sm:py-36 bg-[#151311] overflow-hidden">
      {/* Background Cinematic Food Imagery with Dark Vignette */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=2000&q=80"
          alt="Warm Indian restaurant atmosphere at Chilies Spot"
          className="w-full h-full object-cover filter brightness-[0.25] contrast-[1.2]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#151311] via-[#151311]/70 to-[#151311]/80" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#151311]/60 to-[#151311]" />

        {/* Ambient warm glow in center */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#B52A1D]/15 blur-[100px] rounded-full pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Eyebrow Label */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#D8C7AC]/20 mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-[#B52A1D]" />
          <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-[#F4EBDD]">
            Welcoming You Daily
          </span>
          <span className="text-[11px] font-telugu text-[#D66B32]">
            చిలీస్ స్పాట్
          </span>
        </motion.div>

        {/* Heroic Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-[#F4EBDD] tracking-tight leading-[1.14] mb-6"
        >
          YOUR TABLE. <br />
          YOUR PEOPLE. <br />
          <span className="italic font-editorial font-normal text-[#D66B32]">
            Your Moment.
          </span>
        </motion.h2>

        {/* Supporting Copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-base sm:text-lg text-[#D8C7AC]/90 max-w-2xl leading-relaxed mb-10"
        >
          Good food, great company, and memories worth making. Come visit Chilies Spot Family Restaurant in Yerravaram.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-12"
        >
          <a
            href={RESTAURANT_INFO.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#B52A1D] hover:bg-[#982216] text-[#F4EBDD] font-semibold text-xs sm:text-sm uppercase tracking-widest transition-all duration-300 shadow-xl shadow-[#B52A1D]/30 hover:shadow-[#B52A1D]/50 hover:-translate-y-0.5 active:translate-y-0"
          >
            <Navigation className="w-4 h-4" />
            <span>Get Directions</span>
          </a>

          <a
            href={`tel:${RESTAURANT_INFO.phone}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-white/10 hover:bg-white/15 text-[#F4EBDD] font-semibold text-xs sm:text-sm uppercase tracking-widest border border-[#D8C7AC]/25 backdrop-blur-md transition-all duration-300 hover:border-[#D66B32] hover:-translate-y-0.5 active:translate-y-0"
          >
            <Phone className="w-4 h-4 text-[#D66B32]" />
            <span>Call Now ({RESTAURANT_INFO.phoneDisplay})</span>
          </a>
        </motion.div>

        {/* Quick Reference Stats Ribbon */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-[#D8C7AC]/80 pt-6 border-t border-[#D8C7AC]/15">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[#B52A1D]" />
            <span>Yerravaram, Andhra Pradesh</span>
          </div>

          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-[#D66B32]" />
            <span>Closing at {RESTAURANT_INFO.closingTime}</span>
          </div>

          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 text-[#D66B32] fill-[#D66B32]" />
            <span>836 Reviews on Google</span>
          </div>
        </div>

      </div>
    </section>
  );
};
