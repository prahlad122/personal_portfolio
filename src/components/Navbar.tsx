import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navItems } from '../data/content';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 120;

      sections.forEach(section => {
        const top = (section as HTMLElement).offsetTop;
        const height = (section as HTMLElement).offsetHeight;
        const id = section.getAttribute('id') || '';

        if (scrollPosition >= top && scrollPosition < top + height) {
          setActiveSection(id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
  className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
    scrolled
      ? 'bg-bgprimary/70 backdrop-blur-md border-muted shadow-[0_4px_20px_rgba(0,0,0,0.4)] py-3'
      : 'bg-transparent border-transparent py-3'
  }`}
  initial={{ y: -100 }}
  animate={{ y: 0 }}
  transition={{ type: "spring", stiffness: 300, damping: 30 }}
>
  <div className="container mx-auto px-6">
    <div className="flex justify-between items-center">

      {/* LOGO */}
      <h3 className="text-xl md:text-2xl font-extrabold tracking-tight leading-none">
        <span className="neon-text">PRAHLAD</span>
      </h3>

      {/* DESKTOP NAV */}
      <nav className="hidden md:flex items-center gap-8">
        {navItems.map(item => {
          const isActive = activeSection === item.href.substring(1);
          return (
            <a
              key={item.href}
              href={item.href}
              className={`relative text-sm tracking-wide transition ${
                isActive
                  ? 'text-accent'
                  : 'text-textdim hover:text-accent'
              }`}
            >
              {item.label}
              {isActive && (
                <span className="absolute left-0 -bottom-2 w-full h-[2px] bg-accent"></span>
              )}
            </a>
          );
        })}
      </nav>

      {/* MOBILE MENU BUTTON */}
      <button
        className="md:hidden p-2 border border-muted hover:border-accent hover:text-accent transition"
        onClick={() => setIsMenuOpen(true)}
        aria-label="Open menu"
      >
        <Menu size={20} className="text-textdim" />
      </button>

    </div>
  </div>

      {/* MOBILE MENU */}
      {/* MOBILE MENU */}
<AnimatePresence>
  {isMenuOpen && (
    <>
      {/* BACKDROP */}
      <motion.div
        className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* SIDE PANEL */}
      <motion.div
        className="md:hidden fixed top-0 right-0 h-full w-[70%] max-w-[260px] bg-bgsecondary border-l border-muted z-50 flex flex-col"
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', stiffness: 260, damping: 25 }}
      >
        {/* CLOSE BUTTON */}
        <div className="flex justify-end p-5 border-b border-muted">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="p-2 border border-muted hover:border-accent hover:text-accent transition"
            aria-label="Close menu"
          >
            <X size={22} className="text-textdim" />
          </button>
        </div>

        {/* NAV LINKS */}
        <nav className="flex flex-col p-6 gap-6">
          {navItems.map(item => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`text-base tracking-wide border-b border-muted pb-3 transition ${
                  isActive
                    ? 'text-accent'
                    : 'text-textdim hover:text-accent'
                }`}
              >
                {item.label.toUpperCase()}
              </a>
            );
          })}
        </nav>
      </motion.div>
    </>
  )}
</AnimatePresence>
    </motion.header>
  );
};

export default Navbar;