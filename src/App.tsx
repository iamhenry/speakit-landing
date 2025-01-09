import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import About from "./components/About";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main>
        <Hero />
        <Features />
        <Pricing />
        <About />
        <FAQ />
      </main>

      <Footer />
    </div>
  );
}

export default App;
