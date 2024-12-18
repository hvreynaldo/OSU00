import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Mission from './components/Mission';
import AIInnovationHub from './components/innovation/AIInnovationHub';
import AIGallery from './components/gallery/AIGallery';
import XWidget from './components/social/XWidget';
import PartnerLogos from './components/partners/PartnerLogos';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Mission />
        <AIInnovationHub />
        <AIGallery />
        <XWidget />
        <PartnerLogos />
      </main>
      <Footer />
    </div>
  );
}

export default App;