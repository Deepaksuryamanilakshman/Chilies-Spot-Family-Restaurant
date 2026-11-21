import React from 'react';
import { motion } from 'framer-motion';
import { Users, Sparkles, HeartHandshake, CheckCircle2 } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurant';
import { ChiliLogo } from './ChiliLogo';

export const BrandSection: React.FC = () => {
  return (
    <section id="story" className="relative py-24 sm:py-32 bg-[#151311] overflow-hidden border-b border-[#D8C7AC]/10">
      {/* Background Decorative Accent */}
      <div className="ambient-glow bg-[#B52A1D] w-[500px] h-[500px] -top-40 -left-40" />
      <div className="ambient-glow bg-[#D66B32] w-[400px] h-[400px] bottom-10 -right-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Editorial Image Composition */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="lg:col-span-6 relative"
          >
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Main Image with border and shadow */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/80 border border-[#D8C7AC]/15 aspect-[4/5] sm:aspect-[4/4.8]">
                <img
                  src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80"
                  alt="Flavorful culinary preparation and shared feast at Chilies Spot"
                  className="w-full h-full object-cover filter brightness-[0.88] hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Floating Badge Over Image */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#151311]/90 backdrop-blur-md border border-[#D8C7AC]/20">
                  <div className="flex items-center justify-between text-xs sm:text-sm">
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-[#D66B32] font-semibold block">
                        Dining Philosophy
                      </span>
                      <span className="font-serif text-[#F4EBDD] font-medium">
                        Flavors Crafted for Sharing
                      </span>
                    </div>
                    <span className="text-xs font-telugu text-[#D8C7AC]/70">
                      చిలీస్ స్పాట్
                    </span>
                  </div>
                </div>
              </div>

              {/* Decorative brand icon emblem badge */}
              <div className="absolute -top-6 -right-6 hidden sm:flex items-center justify-center w-24 h-24 rounded-full bg-[#1D1A18] border border-[#D8C7AC]/25 shadow-2xl p-2.5 hover:rotate-6 transition-transform duration-500">
                <ChiliLogo size={80} glow={true} />
              </div>
            </div>
          </motion.div>

          {/* Right Column: Editorial Text & Values */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            {/* Small uppercase eyebrow label */}
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-[1.5px] bg-[#B52A1D]" />
              <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#D66B32]">
                Our Brand Spirit
              </span>
            </div>

            {/* Large Serif Headline */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F4EBDD] leading-[1.18] mb-6">
              MORE THAN A MEAL. <br />
              <span className="italic font-editorial font-normal text-[#D8C7AC]">
                It’s a Moment to Share.
              </span>
            </h2>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-[#D8C7AC]/90 font-normal leading-relaxed mb-8">
              Good food tastes even better when shared. Chilies Spot Family Restaurant welcomes you to enjoy flavorful meals, comfortable moments, and good company around the table.
            </p>

            {/* Key Value Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="p-4 rounded-xl bg-white/5 border border-[#D8C7AC]/10 hover:border-[#D66B32]/30 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-[#B52A1D]/20 text-[#B52A1D]">
                    <Users className="w-4 h-4" />
                  </div>
                  <h3 className="font-semibold text-sm text-[#F4EBDD]">
                    Family-Centric Atmosphere
                  </h3>
                </div>
                <p className="text-xs text-[#D8C7AC]/75 leading-relaxed">
                  Spacious table arrangements designed for shared family platters and comfortable gatherings.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-[#D8C7AC]/10 hover:border-[#D66B32]/30 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-[#D66B32]/20 text-[#D66B32]">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <h3 className="font-semibold text-sm text-[#F4EBDD]">
                    Authentic Spice Balance
                  </h3>
                </div>
                <p className="text-xs text-[#D8C7AC]/75 leading-relaxed">
                  Flavorful preparations honoring regional tastes without overwhelming heat.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-[#D8C7AC]/10 hover:border-[#D66B32]/30 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-[#646448]/30 text-[#D8C7AC]">
                    <HeartHandshake className="w-4 h-4" />
                  </div>
                  <h3 className="font-semibold text-sm text-[#F4EBDD]">
                    Warm Hospitality
                  </h3>
                </div>
                <p className="text-xs text-[#D8C7AC]/75 leading-relaxed">
                  Attentive care ensuring every highway traveler and local diner feels at home.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-[#D8C7AC]/10 hover:border-[#D66B32]/30 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-[#B52A1D]/20 text-[#B52A1D]">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <h3 className="font-semibold text-sm text-[#F4EBDD]">
                    Fair & Transparent
                  </h3>
                </div>
                <p className="text-xs text-[#D8C7AC]/75 leading-relaxed">
                  Average dining price ₹200–₹400 per person with generous portions.
                </p>
              </div>
            </div>

            {/* Location Quote Anchor */}
            <div className="pt-4 border-t border-[#D8C7AC]/15 flex items-center justify-between text-xs text-[#D8C7AC]/70">
              <span className="italic">
                “A welcoming family dining stop in Yerravaram, Andhra Pradesh”
              </span>
              <span className="text-[#D66B32] font-telugu">
                {RESTAURANT_INFO.teluguName}
              </span>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
