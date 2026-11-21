import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Utensils, Info, Flame, Leaf, Drumstick, Sparkles } from 'lucide-react';
import { MENU_CATEGORIES, SAMPLE_MENU_ITEMS, MenuItem } from '../data/menu';

export const MenuSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [dietaryFilter, setDietaryFilter] = useState<'all' | 'veg' | 'non-veg'>('all');

  const filteredItems = useMemo(() => {
    return SAMPLE_MENU_ITEMS.filter((item) => {
      const matchesCategory =
        activeCategory === 'all' ? true : item.category === activeCategory;
      const matchesDietary =
        dietaryFilter === 'all' ? true : item.dietary === dietaryFilter;
      return matchesCategory && matchesDietary;
    });
  }, [activeCategory, dietaryFilter]);

  const activeCategoryInfo = MENU_CATEGORIES.find((c) => c.id === activeCategory);

  return (
    <section id="menu" className="py-24 sm:py-32 bg-[#151311] relative overflow-hidden border-b border-[#D8C7AC]/10">
      {/* Decorative ambient glows */}
      <div className="ambient-glow bg-[#B52A1D] w-[500px] h-[500px] -top-24 right-0" />
      <div className="ambient-glow bg-[#646448] w-[400px] h-[400px] bottom-0 left-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-[#D8C7AC]/20 mb-4">
            <Utensils className="w-3.5 h-3.5 text-[#B52A1D]" />
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#D66B32]">
              Menu Presentation
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#F4EBDD] tracking-tight mb-4">
            A Feast for Every Table.
          </h2>

          <p className="text-sm sm:text-base text-[#D8C7AC]/80 leading-relaxed">
            Curated offerings balancing fragrant rice dishes, smoky starters, and rich regional curries. Browse our interactive categories below.
          </p>

          {/* Transparent Sample Content Notice */}
          <div className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-[#D8C7AC]/15 text-xs text-[#D8C7AC]/85">
            <Info className="w-4 h-4 text-[#D66B32] flex-shrink-0" />
            <span>
              <strong>Editorial Notice:</strong> Sample menu placeholders for layout & structure. Please consult our staff on-site for the full daily live menu and seasonal specials.
            </span>
          </div>
        </div>

        {/* Category Navigation Pills */}
        <div className="flex items-center justify-start lg:justify-center overflow-x-auto pb-4 mb-6 gap-2 no-scrollbar">
          {MENU_CATEGORIES.map((category) => {
            const isActive = activeCategory === category.id;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex-shrink-0 px-4 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 flex items-center gap-2 ${
                  isActive
                    ? 'bg-[#B52A1D] text-[#F4EBDD] shadow-lg shadow-[#B52A1D]/30 border border-[#B52A1D]'
                    : 'bg-white/5 text-[#D8C7AC]/80 hover:text-[#F4EBDD] hover:bg-white/10 border border-white/5'
                }`}
              >
                <span>{category.label}</span>
                <span className={`text-[10px] font-telugu opacity-70 ${isActive ? 'text-white' : 'text-[#D66B32]'}`}>
                  {category.teluguLabel}
                </span>
              </button>
            );
          })}
        </div>

        {/* Dietary Filters Sub-bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-xl bg-[#1D1A18] border border-[#D8C7AC]/15 mb-10">
          <div>
            <h3 className="font-serif text-base sm:text-lg font-bold text-[#F4EBDD]">
              {activeCategoryInfo?.label}
            </h3>
            <p className="text-xs text-[#D8C7AC]/70">
              {activeCategoryInfo?.description}
            </p>
          </div>

          <div className="flex items-center gap-1.5 p-1 rounded-lg bg-black/40 border border-white/10 self-stretch sm:self-auto justify-center">
            <button
              onClick={() => setDietaryFilter('all')}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
                dietaryFilter === 'all'
                  ? 'bg-white/20 text-[#F4EBDD]'
                  : 'text-[#D8C7AC]/70 hover:text-[#F4EBDD]'
              }`}
            >
              All Items ({SAMPLE_MENU_ITEMS.length})
            </button>
            <button
              onClick={() => setDietaryFilter('veg')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
                dietaryFilter === 'veg'
                  ? 'bg-[#646448] text-[#F4EBDD]'
                  : 'text-[#D8C7AC]/70 hover:text-[#F4EBDD]'
              }`}
            >
              <Leaf className="w-3 h-3 text-green-400" />
              <span>Pure Veg</span>
            </button>
            <button
              onClick={() => setDietaryFilter('non-veg')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
                dietaryFilter === 'non-veg'
                  ? 'bg-[#B52A1D] text-[#F4EBDD]'
                  : 'text-[#D8C7AC]/70 hover:text-[#F4EBDD]'
              }`}
            >
              <Drumstick className="w-3 h-3 text-red-400" />
              <span>Non-Veg</span>
            </button>
          </div>
        </div>

        {/* Menu Items Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeCategory}-${dietaryFilter}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {filteredItems.map((item: MenuItem) => (
              <div
                key={item.id}
                className="group p-5 sm:p-6 rounded-2xl bg-[#1D1A18]/80 hover:bg-[#24201D] border border-[#D8C7AC]/10 hover:border-[#D66B32]/30 transition-all duration-300 flex flex-col justify-between shadow-lg"
              >
                <div>
                  {/* Top Item Row: Name, Dietary Symbol, Price */}
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        {/* Veg / Non-Veg Indicator Icon */}
                        <span
                          className={`w-3.5 h-3.5 rounded-sm border flex items-center justify-center p-0.5 flex-shrink-0 ${
                            item.dietary === 'veg'
                              ? 'border-emerald-500'
                              : 'border-rose-600'
                          }`}
                          title={item.dietary === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'}
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${
                              item.dietary === 'veg'
                                ? 'bg-emerald-500'
                                : 'bg-rose-600'
                            }`}
                          />
                        </span>

                        <h4 className="font-serif text-lg sm:text-xl font-bold text-[#F4EBDD] group-hover:text-[#D66B32] transition-colors leading-snug">
                          {item.name}
                        </h4>

                        {item.tag && (
                          <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-[#B52A1D]/20 text-[#D66B32] border border-[#B52A1D]/30">
                            <Sparkles className="w-2.5 h-2.5" />
                            {item.tag}
                          </span>
                        )}
                      </div>

                      {/* Telugu Script Subtitle */}
                      {item.teluguName && (
                        <p className="text-xs font-telugu text-[#D8C7AC]/60 pl-5">
                          {item.teluguName}
                        </p>
                      )}
                    </div>

                    {/* Price display with Sample Tag */}
                    <div className="text-right flex-shrink-0">
                      <div className="font-serif font-bold text-lg text-[#F4EBDD] tracking-wide">
                        {item.priceSample}
                      </div>
                      <span className="text-[9px] uppercase tracking-wider text-[#D8C7AC]/50 block">
                        Sample Price
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#D8C7AC]/75 leading-relaxed pl-5 mt-2">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Meta: Spice meter & order inquiry */}
                <div className="mt-4 pt-3 border-t border-[#D8C7AC]/10 flex items-center justify-between text-xs text-[#D8C7AC]/60 pl-5">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[11px] text-[#D8C7AC]/50">Spice:</span>
                    <div className="flex items-center gap-0.5">
                      {[1, 2, 3].map((lvl) => (
                        <Flame
                          key={lvl}
                          className={`w-3.5 h-3.5 ${
                            lvl <= item.spiceLevel
                              ? 'text-[#B52A1D] fill-[#B52A1D]'
                              : 'text-white/10'
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  <span className="text-[11px] text-[#D8C7AC]/50 italic">
                    Available for dining & takeaway
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Footer of Menu: Note on dining & custom orders */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-white/5 border border-[#D8C7AC]/15 max-w-2xl mx-auto">
          <p className="text-xs sm:text-sm text-[#D8C7AC]/90">
            Have dietary preferences or seeking Jain, mild, or extra-spicy preparations? 
            Our kitchen is happy to customize your family’s meals upon request.
          </p>
          <div className="mt-3 flex items-center justify-center gap-4 text-xs font-semibold text-[#D66B32]">
            <span>Average dining spend: ₹200–₹400 / person</span>
            <span>•</span>
            <span>Served Fresh & Hot</span>
          </div>
        </div>

      </div>
    </section>
  );
};
