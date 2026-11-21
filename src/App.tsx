import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { BrandSection } from './components/BrandSection';
import { FoodShowcase } from './components/FoodShowcase';
import { MenuSection } from './components/MenuSection';
import { ExperienceSection } from './components/ExperienceSection';
import { GallerySection } from './components/GallerySection';
import { LocationSection } from './components/LocationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#151311] text-[#F4EBDD] font-sans antialiased selection:bg-[#B52A1D] selection:text-[#F4EBDD]">
      {/* Fixed Sticky Header Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        <HeroSection />
        <BrandSection />
        <FoodShowcase />
        <MenuSection />
        <ExperienceSection />
        <GallerySection />
        <LocationSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
