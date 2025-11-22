import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import HowItWorks from './components/HowItWorks';
import Services from './components/Services';
import Benefits from './components/Benefits';
import Gallery from './components/Gallery';
import Donations from './components/Donations';
import Careers from './components/Careers';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="relative">
        <Hero />
      </div>
      <div className="relative">
        <About />
      </div>
      <div className="relative">
        <HowItWorks />
      </div>
      <div className="relative">
        <Services />
      </div>
      <div className="relative">
        <Benefits />
      </div>
      <div className="relative">
        <Gallery />
      </div>
      <div className="relative">
        <Donations />
      </div>
      <div className="relative">
        <Careers />
      </div>
      <div className="relative">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
