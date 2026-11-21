import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { GALLERY_IMAGES, GalleryImage } from '../data/gallery';

export const GallerySection: React.FC = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = useCallback(() => {
    setSelectedImageIndex(null);
    document.body.style.overflow = 'unset';
  }, []);

  const showNext = useCallback(() => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % GALLERY_IMAGES.length);
    }
  }, [selectedImageIndex]);

  const showPrev = useCallback(() => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(
        (selectedImageIndex - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length
      );
    }
  }, [selectedImageIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'ArrowLeft') showPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex, closeLightbox, showNext, showPrev]);

  return (
    <section id="gallery" className="py-24 sm:py-32 bg-[#151311] relative overflow-hidden border-b border-[#D8C7AC]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-3">
              <Camera className="w-4 h-4 text-[#B52A1D]" />
              <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#D66B32]">
                Visual Journal
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#F4EBDD] leading-tight">
              Flavors & Atmosphere <br />
              <span className="italic font-editorial font-normal text-[#D8C7AC]">
                Captured in Focus.
              </span>
            </h2>
          </div>

          <p className="text-sm text-[#D8C7AC]/80 max-w-sm">
            Glimpses of sizzling clay ovens, simmering curries, vibrant whole chilies, and welcoming table moments. Click any photograph to view in high resolution.
          </p>
        </div>

        {/* Editorial Masonry/Asymmetric Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {GALLERY_IMAGES.map((img: GalleryImage, idx: number) => {
            // Asymmetric spans for editorial magazine vibe
            const isSpan2 = idx === 0 || idx === 6;
            return (
              <motion.div
                key={img.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                onClick={() => openLightbox(idx)}
                className={`group relative rounded-2xl overflow-hidden cursor-pointer bg-[#1D1A18] border border-[#D8C7AC]/15 shadow-xl ${
                  isSpan2 ? 'sm:col-span-2 aspect-[16/10]' : 'aspect-square sm:aspect-[4/5]'
                }`}
              >
                <img
                  src={img.url}
                  alt={img.title}
                  className="w-full h-full object-cover filter brightness-[0.78] contrast-[1.08] group-hover:scale-108 group-hover:brightness-[0.9] transition-all duration-700 ease-out"
                  loading="lazy"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                {/* Hover Maximize Icon */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-[#F4EBDD] opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <Maximize2 className="w-4 h-4 text-[#D66B32]" />
                </div>

                {/* Bottom Caption & Label */}
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-[10px] uppercase tracking-widest font-semibold text-[#D66B32] block mb-1">
                    {img.category}
                  </span>
                  <h3 className="font-serif text-base sm:text-lg font-bold text-[#F4EBDD] leading-tight">
                    {img.title}
                  </h3>
                  <p className="text-xs text-[#D8C7AC]/75 line-clamp-1 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:block">
                    {img.caption}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Fullscreen Interactive Lightbox Modal */}
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 sm:p-8"
            onClick={closeLightbox}
          >
            {/* Top Toolbar */}
            <div
              className="absolute top-6 left-6 right-6 flex items-center justify-between text-[#F4EBDD] z-10"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-2">
                <span className="text-xs uppercase tracking-widest text-[#D66B32] font-semibold">
                  Photo {selectedImageIndex + 1} of {GALLERY_IMAGES.length}
                </span>
                <span className="text-xs text-[#D8C7AC]/50">•</span>
                <span className="text-xs text-[#D8C7AC]/70">Chilies Spot Visuals</span>
              </div>

              <button
                onClick={closeLightbox}
                className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-[#F4EBDD] hover:text-[#B52A1D] transition-colors focus:outline-none"
                aria-label="Close Lightbox"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Previous Image Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                showPrev();
              }}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-[#B52A1D] text-[#F4EBDD] transition-all z-10 focus:outline-none hidden xs:flex items-center justify-center"
              aria-label="Previous photograph"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Image Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                showNext();
              }}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-[#B52A1D] text-[#F4EBDD] transition-all z-10 focus:outline-none hidden xs:flex items-center justify-center"
              aria-label="Next photograph"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Center Stage Content */}
            <div
              className="relative max-w-5xl max-h-[80vh] flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img
                key={selectedImageIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                src={GALLERY_IMAGES[selectedImageIndex].url}
                alt={GALLERY_IMAGES[selectedImageIndex].title}
                className="max-w-full max-h-[70vh] object-contain rounded-xl shadow-2xl border border-white/10"
              />

              <div className="text-center mt-4 max-w-2xl px-4">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#F4EBDD]">
                  {GALLERY_IMAGES[selectedImageIndex].title}
                </h3>
                <p className="text-xs sm:text-sm text-[#D8C7AC]/80 mt-1">
                  {GALLERY_IMAGES[selectedImageIndex].caption}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
