import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Location } from './components/Location';
import { MobileActionBar } from './components/MobileActionBar';
import { Navbar } from './components/Navbar';
import { Services } from './components/Services';
import { TrustSection } from './components/TrustSection';
import { WhyUs } from './components/WhyUs';
import { useReveal } from './hooks/useReveal';

export default function App() {
  useReveal();

  return (
    <>
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded-full focus:bg-forest-800 focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-sand-50"
      >
        Saltar al contenido principal
      </a>

      <Navbar />

      <main id="contenido">
        <Hero />
        <About />
        <Services />
        <WhyUs />
        <TrustSection />
        <Location />
        <Contact />
      </main>

      <Footer />
      <MobileActionBar />
    </>
  );
}
