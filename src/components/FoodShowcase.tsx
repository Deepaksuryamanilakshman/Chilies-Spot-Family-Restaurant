import React from 'react';
import { motion } from 'framer-motion';
import { Flame, ArrowUpRight, Sparkles } from 'lucide-react';

interface FoodHighlight {
  id: string;
  category: string;
  teluguCategory: string;
  title: string;
  description: string;
  image: string;
  tag: string;
  accent: string;
  gridSpan: string;
}

const HIGHLIGHTS: FoodHighlight[] = [
  {
    id: 'biryani',
    category: 'Rice & Biryani',
    teluguCategory: 'దమ్ బిర్యానీ',
    title: 'Fragrant Slow Dum Biryani',
    description: 'Aged long-grain basmati rice gently steeped with whole aromatic spices, saffron milk, caramelized shallots, and tender marinades.',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=1200&q=80',
    tag: 'Celebrated Staple',
    accent: '#B52A1D',
    gridSpan: 'lg:col-span-7',
  },
  {
    id: 'tandoor',
    category: 'Tandoor & Grills',
    teluguCategory: 'తందూరి స్పెషల్స్',
    title: 'Clay-Oven Charred Grills',
    description: 'Skewered morsels kissed by live wood embers, infused with toasted coriander, crushed red chili glaze, and spiced mint chutneys.',
    image: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=1000&q=80',
    tag: 'Smoky & Tender',
    accent: '#D66B32',
    gridSpan: 'lg:col-span-5',
  },
  {
    id: 'curries',
    category: 'Rich Indian Curries',
    teluguCategory: 'రుచికరమైన కర్రీస్',
    title: 'Slow-Simmered Rich Gravies',
    description: 'Velvety curries simmered patiently with stone-ground regional masalas, creamy reductions, and vibrant aromatic finishing oils.',
    image: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=1000&q=80',
    tag: 'Aromatic Gravies',
    accent: '#D66B32',
    gridSpan: 'lg:col-span-5',
  },
  {
    id: 'starters',
    category: 'Starters & Shared Plates',
    teluguCategory: 'స్పైసీ స్టార్టర్స్',
    title: 'Crispy Appetizers for the Table',
    description: 'Appetite-awakening starters designed to begin family conversations—crunchy textures, punchy garlic, and signature chili kicks.',
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=1200&q=80',
    tag: 'Family Favorite',
    accent: '#B52A1D',
    gridSpan: 'lg:col-span-7',
  },
];

export const FoodShowcase: React.FC = () => {
  return (
    <section id="highlights" className="py-24 sm:py-32 bg-[#191614] relative overflow-hidden border-b border-[#D8C7AC]/10">
      {/* Ambient background lighting */}
      <div className="ambient-glow bg-[#D66B32] w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <Flame className="w-4 h-4 text-[#B52A1D]" />
              <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#D66B32]">
                Culinary Highlights
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F4EBDD] leading-tight">
              Flavors Crafted <br />
              <span className="italic font-editorial font-normal text-[#D8C7AC]">
                to Awaken the Senses.
              </span>
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-sm text-[#D8C7AC]/80 leading-relaxed">
              Explore the rich textures and beloved culinary themes that define the family dining table at Chilies Spot.
            </p>
            <div className="mt-2 flex items-center gap-2 text-[11px] text-[#D8C7AC]/60">
              <Sparkles className="w-3 h-3 text-[#D66B32]" />
              <span>Visual culinary themes • In-house menu available at the restaurant</span>
            </div>
          </div>
        </div>

        {/* Varied Editorial Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {HIGHLIGHTS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className={`${item.gridSpan} group relative rounded-2xl overflow-hidden border border-[#D8C7AC]/15 bg-[#1D1A18] flex flex-col justify-end min-h-[420px] sm:min-h-[460px] shadow-2xl hover:border-[#D66B32]/40 transition-all duration-500`}
            >
              {/* Background Image Container with Zoom */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover filter brightness-[0.65] contrast-[1.1] group-hover:scale-108 group-hover:brightness-[0.75] transition-all duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#151311] via-[#151311]/50 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#151311]/90" />
              </div>

              {/* Top Tag Badges */}
              <div className="absolute top-6 left-6 right-6 z-10 flex items-center justify-between">
                <span className="px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-black/60 backdrop-blur-md border border-[#D8C7AC]/20 text-[#F4EBDD]">
                  {item.category}
                </span>
                <span className="text-xs font-telugu text-[#D8C7AC]/70">
                  {item.teluguCategory}
                </span>
              </div>

              {/* Card Bottom Content */}
              <div className="relative z-10 p-6 sm:p-8 flex flex-col justify-end">
                <div className="mb-2 flex items-center gap-2">
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: item.accent }}
                  />
                  <span className="text-[11px] font-semibold uppercase tracking-widest text-[#D66B32]">
                    {item.tag}
                  </span>
                </div>

                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#F4EBDD] group-hover:text-[#F4EBDD] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <div className="w-9 h-9 rounded-full bg-white/10 group-hover:bg-[#B52A1D] flex items-center justify-center transition-all duration-300 text-[#F4EBDD] flex-shrink-0">
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#D8C7AC]/85 leading-relaxed max-w-xl">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
