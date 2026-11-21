import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, Sparkles, UtensilsCrossed } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-24 sm:py-32 bg-[#191614] relative overflow-hidden border-b border-[#D8C7AC]/10">
      {/* Ambient background glows */}
      <div className="ambient-glow bg-[#D66B32] w-[500px] h-[500px] top-10 right-10 opacity-15" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-[#D8C7AC]/20 mb-4">
            <Heart className="w-3.5 h-3.5 text-[#B52A1D]" />
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#D66B32]">
              The Dining Atmosphere
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-[#F4EBDD] tracking-tight leading-[1.12] mb-6">
            MADE FOR MOMENTS <br />
            <span className="italic font-editorial font-normal text-[#D66B32]">
              That Truly Matter.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-[#D8C7AC]/80 leading-relaxed max-w-2xl mx-auto">
            Whether taking a refreshing travel pause along the highway or gathering loved ones for an evening celebration, Chilies Spot is designed to make every meal feel special.
          </p>
        </div>

        {/* Visual Composition: Overlapping Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          
          {/* Main Large Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#D8C7AC]/15 aspect-[16/10] sm:aspect-[16/9] group">
              <img
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1400&q=80"
                alt="Friends and family gathering around dining table at Chilies Spot"
                className="w-full h-full object-cover filter brightness-[0.75] contrast-[1.08] group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-[10px] uppercase tracking-widest text-[#D66B32] font-semibold block mb-1">
                  Shared Celebrations
                </span>
                <p className="font-serif text-lg sm:text-xl text-[#F4EBDD] font-bold">
                  “Good food brings us together, but laughter and conversation keep us at the table.”
                </p>
              </div>
            </div>
          </motion.div>

          {/* Side Editorial Details with 2 Stacked Cards */}
          <div className="lg:col-span-5 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="p-6 rounded-2xl bg-[#1D1A18] border border-[#D8C7AC]/15 shadow-xl relative overflow-hidden"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="p-3 rounded-xl bg-[#B52A1D]/15 text-[#B52A1D]">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#F4EBDD]">
                    Family & Group Gatherings
                  </h3>
                  <span className="text-xs text-[#D66B32] font-telugu">కుటుంబ భోజనం</span>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-[#D8C7AC]/80 leading-relaxed">
                Comfortable dining arrangements tailored for families with children, extended friend circles, and road-trippers seeking honest, filling meals.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="p-6 rounded-2xl bg-[#1D1A18] border border-[#D8C7AC]/15 shadow-xl relative overflow-hidden"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="p-3 rounded-xl bg-[#D66B32]/15 text-[#D66B32]">
                  <UtensilsCrossed className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#F4EBDD]">
                    Generous Portion Sizing
                  </h3>
                  <span className="text-xs text-[#D8C7AC]/60">₹200–₹400 / person average</span>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-[#D8C7AC]/80 leading-relaxed">
                Substantial platters, sizzling handis, and plentiful bowls made specifically to be passed across the table and shared by everyone.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Experience Highlights Triple Feature */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-[#D8C7AC]/10">
          <div className="text-center p-6 rounded-xl bg-white/5 border border-white/5">
            <Sparkles className="w-6 h-6 text-[#D66B32] mx-auto mb-3" />
            <h4 className="font-serif text-base font-bold text-[#F4EBDD] mb-1">
              Freshly Prepared Daily
            </h4>
            <p className="text-xs text-[#D8C7AC]/70">
              Cooked to order with quality regional ingredients and natural whole spices.
            </p>
          </div>

          <div className="text-center p-6 rounded-xl bg-white/5 border border-white/5">
            <Heart className="w-6 h-6 text-[#B52A1D] mx-auto mb-3" />
            <h4 className="font-serif text-base font-bold text-[#F4EBDD] mb-1">
              Courteous Hospitality
            </h4>
            <p className="text-xs text-[#D8C7AC]/70">
              Dedicated team eager to accommodate dietary requests and welcome your guests warmly.
            </p>
          </div>

          <div className="text-center p-6 rounded-xl bg-white/5 border border-white/5">
            <Users className="w-6 h-6 text-[#D8C7AC] mx-auto mb-3" />
            <h4 className="font-serif text-base font-bold text-[#F4EBDD] mb-1">
              836 Verified Google Reviews
            </h4>
            <p className="text-xs text-[#D8C7AC]/70">
              A trusted dining destination for highway travelers and local residents of Yerravaram.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
