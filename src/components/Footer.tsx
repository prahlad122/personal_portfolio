import React from "react";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { navItems, socialLinks } from "../data/content";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const iconMap = {
    github: Github,
    linkedin: Linkedin,
    twitter: Twitter,
    mail: Mail,
  };

  return (
    <footer className="border-t border-muted mt-24">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* BRAND */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-extrabold tracking-tight mb-6">
              PRAHLAD <span className="neon-text">NISHAD</span>
            </h3>

            <p className="text-textdim mb-8 max-w-md leading-relaxed">
              Frontend-focused developer crafting fast, scalable, and visually
              striking web experiences with modern technologies.
            </p>

            <div className="flex gap-4">
              {socialLinks.map((link) => {
                const IconComponent =
                  iconMap[link.icon as keyof typeof iconMap];
                return (
                  <a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 border border-muted hover:border-accent hover:text-accent transition"
                    aria-label={link.platform}
                  >
                    <IconComponent size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* NAV LINKS */}
          <div>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="hover:text-accent transition">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-sm tracking-widest text-textdim mb-6">
              CONTACT
            </h4>

            <ul className="space-y-3 text-textdim">
              <li>Azamgarh, Uttar Pradesh, India</li>
              <li>
                <a
                  href="mailto:prahladji1592003@gmail.com"
                  className="hover:text-accent transition"
                >
                  prahladji1592003@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+919532025664"
                  className="hover:text-accent transition"
                >
                  +91 95320 25664
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-16 pt-8 border-t border-muted text-center text-sm text-textdim">
          <p>© {currentYear} PRAHLAD NISHAD — ALL RIGHTS RESERVED</p>
          <p className="mt-2 tracking-wide">BUILT WITH REACT</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
