// /app/page.tsx - VERSÃO ATUALIZADA

import Carousel from './components/Carousel';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import SpecialtiesSection from './components/SpecialtiesSection';
import WhyUsSection from './components/WhyUsSection'; // <-- Adicionado

export default function HomePage() {
  return (
    <>
      <Carousel />
      <HeroSection />
      <SpecialtiesSection />
      <WhyUsSection /> {/* <-- Adicionado */}
      <ContactSection />
      <Footer />
    </>
  );
}
