import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import AnimatedGrid from "./components/AnimatedGrid";
//import FloatingOrbs from "./components/FloatingOrbs";
//import Particles from "./components/Particle";
//import MeshGradient from "./components/MeshGradient";
import { AnimatePresence } from "framer-motion";
import BootScreen from "./components/BootScreen";
import { useEffect, useState } from "react";

function App() {
  
  const [showBoot, setShowBoot] = useState(true);

  useEffect(() => {
    const seen = localStorage.getItem("bootSeen");
    if (!seen) setShowBoot(true);
  }, []);

  const handleBootDone = () => {
    localStorage.setItem("bootSeen", "yes");
    setShowBoot(false);
  };

  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-bgprimary text-textmain">

        {/*  Boot Screen */}
        {<AnimatedGrid/>}
       
       {/* <Particles/> */}
        <AnimatePresence>
          {showBoot && <BootScreen onDone={handleBootDone} />}
        </AnimatePresence>

        {/* Hide site until boot finishes */}
        {!showBoot && (
          <div className="relative z-10">
            <Navbar />
            <main>
              <Hero />
              <Skills />
              <Projects />
              <Experience />
              <Contact />
            </main>
            <Footer />
          </div>
        )}

      </div>
    </ThemeProvider>
  );
}

export default App;