import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Github as GitHub, Linkedin, Mail, ChevronDown } from "lucide-react";
import AnimatedSection from "../components/AnimatedSection";
import Button from "../components/Button";
import myPhoto from "../assets/prahlad2.png";

const Hero: React.FC = () => {
  const typingRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!typingRef.current) return;

    const roles = [
      "Frontend Developer",
      "Backend Developer ",
      "Full Stack Developer",
    ];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingDelay = 100;
    let pauseDelay = 2000;

    function typeText() {
      const currentRole = roles[roleIndex];

      if (isDeleting) {
        typingRef.current!.textContent = currentRole.substring(
          0,
          charIndex - 1,
        );
        charIndex--;
        typingDelay = 50;
      } else {
        typingRef.current!.textContent = currentRole.substring(
          0,
          charIndex + 1,
        );
        charIndex++;
        typingDelay = 120;
      }

      if (!isDeleting && charIndex === currentRole.length) {
        isDeleting = true;
        typingDelay = pauseDelay;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
      }

      setTimeout(typeText, typingDelay);
    }

    setTimeout(typeText, typingDelay);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-24 relative"
    >
      <div className="container mx-auto px-6 py-12">
        <motion.div
          className="grid md:grid-cols-2 gap-20 items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* LEFT CONTENT */}
          <AnimatedSection>
            <div className="max-w-xl">
              {/* STATUS BADGE */}
              <div className="inline-flex items-center gap-2 border border-accent px-3 py-1 mb-8">
                <span className="w-2 h-2 bg-accent"></span>
                <span className="text-xs tracking-widest neon-text">
                  AVAILABLE FOR WORK
                </span>
              </div>

              <p className="text-sm tracking-[0.2em] uppercase text-textdim mb-6">
                Hello — I'm
              </p>

              <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
                Prahlad <span className="neon-text">Nishad</span>
              </h1>

              <h2 className="text-2xl md:text-3xl font-semibold text-textdim mb-8 leading-tight">
              
                <span className="inline-flex w-[20ch]">
                  <span
                    ref={typingRef}
                    className="neon-text whitespace-nowrap"
                  />
                  <span className="animate-blink neon-text ml-1">|</span>
                </span>
              </h2>

              <p className="text-lg text-textdim leading-relaxed mb-12">
                I design and develop fast, scalable, and visually striking
                digital products using modern web technologies and clean
                engineering practices.
              </p>

              {/* CTA BUTTONS */}
              <div className="flex flex-wrap gap-6 mb-12">
                <Button variant="outline" size="lg" href="#projects">
                  VIEW PROJECTS
                </Button>

                <Button variant="outline" size="lg" href="#contact">
                  CONTACT ME
                </Button>
              </div>

              {/* SOCIALS */}
              <div className="flex items-center gap-5">
                <a
                  href="https://github.com/prahlad122"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border border-muted hover:border-accent hover:text-accent transition"
                >
                  <GitHub size={20} />
                </a>

                <a
                  href="https://linkedin.com/in/prahlad-nishad-2898550abc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border border-muted hover:border-accent hover:text-accent transition"
                >
                  <Linkedin size={20} />
                </a>

                <a
                  href="mailto:prahlad2898@gmail.com"
                  className="p-3 border border-muted hover:border-accent hover:text-accent transition"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </AnimatedSection>

          {/* RIGHT IMAGE */}
          <AnimatedSection delay={0.3}>
            <div className="relative">
              <div className="bg-bgsecondary border border-muted p-5 hover:border-accent transition">
                <img
                  src={myPhoto}
                  alt="PLD"
                  className="w-full h-[440px] object-contain"
                />
              </div>

              {/* subtle accent corner */}
              <div className="absolute -top-3 -left-3 w-16 h-16 border-l border-t border-accent"></div>
              <div className="absolute -bottom-3 -right-3 w-16 h-16 border-r border-b border-accent"></div>
            </div>
          </AnimatedSection>
        </motion.div>

        {/* SCROLL DOWN */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <a
            href="#skills"
            className="p-3 border border-muted hover:border-accent hover:text-accent transition"
          >
            <ChevronDown size={22} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
