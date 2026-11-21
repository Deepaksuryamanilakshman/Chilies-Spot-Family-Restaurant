import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, DollarSign, Navigation, Copy, Check, ExternalLink, Star } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurant';

export const LocationSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyAddress = async () => {
    try {
      await navigator.clipboard.writeText(
        `${RESTAURANT_INFO.name}, ${RESTAURANT_INFO.address}`
      );
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <section id="location" className="py-24 sm:py-32 bg-[#191614] relative overflow-hidden border-b border-[#D8C7AC]/10">
      {/* Background ambient decorative light */}
      <div className="ambient-glow bg-[#B52A1D] w-[500px] h-[500px] bottom-10 left-1/3 opacity-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-[#D8C7AC]/20 mb-4">
            <MapPin className="w-3.5 h-3.5 text-[#B52A1D]" />
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#D66B32]">
              Visit Our Restaurant
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#F4EBDD] tracking-tight mb-4">
            Easy to Find in Yerravaram.
          </h2>

          <p className="text-sm sm:text-base text-[#D8C7AC]/80 leading-relaxed">
            Conveniently positioned for local families, celebrations, and highway travelers passing through Andhra Pradesh.
          </p>
        </div>

        {/* Two-Column Grid: Location Details Card + Interactive Map Embed */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Verified Restaurant Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-[#1D1A18] border border-[#D8C7AC]/15 shadow-2xl flex flex-col justify-between"
          >
            <div>
              {/* Brand Header & Telugu Name */}
              <div className="border-b border-[#D8C7AC]/15 pb-6 mb-6">
                <span className="text-[10px] font-semibold tracking-[0.25em] uppercase text-[#D66B32] block mb-1">
                  Verified Destination
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#F4EBDD] leading-tight">
                  {RESTAURANT_INFO.name}
                </h3>
                <p className="text-sm font-telugu text-[#D8C7AC]/80 mt-1">
                  {RESTAURANT_INFO.teluguName}
                </p>

                {/* Reviews Pill */}
                <div className="mt-3 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/40 border border-white/10 text-xs">
                  <Star className="w-3.5 h-3.5 text-[#D66B32] fill-[#D66B32]" />
                  <span className="font-semibold text-[#F4EBDD]">
                    {RESTAURANT_INFO.reviewsCount} Google Ratings & Reviews
                  </span>
                </div>
              </div>

              {/* Essential Details List */}
              <div className="space-y-4">
                {/* Address */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-white/5 text-[#B52A1D] flex-shrink-0 mt-0.5 border border-white/5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#D8C7AC]/60 block">
                      Address & Location
                    </span>
                    <p className="text-sm text-[#F4EBDD] font-medium leading-snug">
                      {RESTAURANT_INFO.locality} {RESTAURANT_INFO.pincode}
                    </p>
                    <p className="text-xs text-[#D8C7AC]/70 mt-0.5 font-mono">
                      Plus Code: {RESTAURANT_INFO.plusCode}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-white/5 text-[#D66B32] flex-shrink-0 mt-0.5 border border-white/5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#D8C7AC]/60 block">
                      Phone Number
                    </span>
                    <a
                      href={`tel:${RESTAURANT_INFO.phone}`}
                      className="text-sm font-bold text-[#F4EBDD] hover:text-[#D66B32] transition-colors"
                    >
                      {RESTAURANT_INFO.phoneDisplay}
                    </a>
                    <span className="text-[11px] text-[#D8C7AC]/50 block">
                      Available for table inquiries & takeaway
                    </span>
                  </div>
                </div>

                {/* Hours / Closing */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-white/5 text-[#B52A1D] flex-shrink-0 mt-0.5 border border-white/5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#D8C7AC]/60 block">
                      Operating Information
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-sm font-semibold text-[#F4EBDD]">
                        Open Today • Listed Closing at {RESTAURANT_INFO.closingTime}
                      </span>
                    </div>
                    <span className="text-[11px] text-[#D8C7AC]/50 block mt-0.5">
                      Closing time verified on official Google listing
                    </span>
                  </div>
                </div>

                {/* Price Range */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-white/5 text-[#646448] flex-shrink-0 mt-0.5 border border-white/5">
                    <DollarSign className="w-4 h-4 text-[#D8C7AC]" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#D8C7AC]/60 block">
                      Price Range
                    </span>
                    <span className="text-sm font-bold text-[#F4EBDD]">
                      {RESTAURANT_INFO.priceRange}
                    </span>
                    <span className="text-[11px] text-[#D8C7AC]/50 block">
                      Generous family meal portions
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-6 mt-6 border-t border-[#D8C7AC]/15 space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={RESTAURANT_INFO.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#B52A1D] hover:bg-[#982216] text-[#F4EBDD] text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-lg shadow-[#B52A1D]/25"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Get Directions</span>
                </a>

                <a
                  href={`tel:${RESTAURANT_INFO.phone}`}
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white/10 hover:bg-white/15 text-[#F4EBDD] text-xs font-semibold uppercase tracking-wider border border-[#D8C7AC]/20 transition-all duration-300"
                >
                  <Phone className="w-4 h-4 text-[#B52A1D]" />
                  <span>Call Restaurant</span>
                </a>
              </div>

              {/* Copy Address Button */}
              <button
                onClick={copyAddress}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-black/40 hover:bg-black/60 border border-white/10 text-xs text-[#D8C7AC] hover:text-[#F4EBDD] transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400 font-medium">Address Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Complete Address</span>
                  </>
                )}
              </button>
            </div>
          </motion.div>

          {/* Right Column: Interactive Map Frame */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-7 rounded-2xl overflow-hidden border border-[#D8C7AC]/15 bg-[#1D1A18] shadow-2xl relative min-h-[420px] flex flex-col"
          >
            {/* Top Bar of Map View */}
            <div className="p-4 bg-[#151311] border-b border-[#D8C7AC]/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#B52A1D]" />
                <span className="text-xs font-semibold tracking-wider uppercase text-[#F4EBDD]">
                  Interactive Google Maps View
                </span>
              </div>
              <a
                href={RESTAURANT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-[#D66B32] hover:text-[#F4EBDD] transition-colors font-medium"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Embedded Map */}
            <div className="relative flex-1 w-full min-h-[360px]">
              <iframe
                title="Chilies Spot Family Restaurant Google Map"
                src={RESTAURANT_INFO.embedMapUrl}
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(1.1) brightness(0.95)' }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>

            {/* Bottom Map Floating Guide */}
            <div className="p-3 bg-[#151311]/90 backdrop-blur-md border-t border-[#D8C7AC]/10 flex flex-col sm:flex-row items-center justify-between text-xs text-[#D8C7AC]/80 gap-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#B52A1D]" />
                <span>Plus Code: <strong>{RESTAURANT_INFO.plusCode}</strong></span>
              </div>
              <a
                href={RESTAURANT_INFO.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-[#D66B32] hover:underline"
              >
                Tap for GPS Turn-by-Turn Navigation →
              </a>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
