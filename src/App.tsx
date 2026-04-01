import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import FocusAreas from './components/FocusAreas';
import StrategicApproach from './components/StrategicApproach';
import Initiatives from './components/Initiatives';
import Careers from './components/Careers';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#f7f9f8]">
      <Navbar />
      <main>
        <Hero />
        <FocusAreas />
        <StrategicApproach />
        <Initiatives />
        <Careers />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
