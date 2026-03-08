import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Clients from './components/Clients';
import PackageBuilder from './components/PackageBuilder';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Clients />
        <Services />
        <PackageBuilder />
      </main>
      <Footer />
    </div>
  )
}

export default App
