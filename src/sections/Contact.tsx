import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github as GitHub, Linkedin, Twitter } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import ContactForm from '../components/ContactForm';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">

        {/* SECTION HEADER */}
        <AnimatedSection className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
            GET IN <span className="neon-text">TOUCH</span>
          </h2>
          <p className="text-textdim max-w-2xl mx-auto">
            Have a project in mind or just want to talk tech?  
            Let’s connect.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">

          {/* LEFT SIDE — INFO */}
          <AnimatedSection className="space-y-10" delay={0.2}>

            {/* CONTACT INFO PANEL */}
            <div className="bg-bgsecondary border border-muted p-8">

              <h3 className="text-xl font-bold mb-8 tracking-wide">
                CONTACT INFO
              </h3>

              <div className="space-y-8">

                {/* EMAIL */}
                <div className="flex items-start gap-5">
                  <Mail className="w-5 h-5 neon-text mt-1" />
                  <div>
                    <p className="text-xs tracking-widest text-textdim mb-1">EMAIL</p>
                    <a
                      href="mailto:prahladji1592003@gmail.com"
                      className="hover:text-accent transition"
                    >
                      prahladji1592003@gmail.com
                    </a>
                  </div>
                </div>

                {/* PHONE */}
                <div className="flex items-start gap-5">
                  <Phone className="w-5 h-5 neon-text mt-1" />
                  <div>
                    <p className="text-xs tracking-widest text-textdim mb-1">PHONE</p>
                    <a
                      href="tel:+919532025664"
                      className="hover:text-accent transition"
                    >
                      +91 9532025664
                    </a>
                  </div>
                </div>

                {/* LOCATION */}
                <div className="flex items-start gap-5">
                  <MapPin className="w-5 h-5 neon-text mt-1" />
                  <div>
                    <p className="text-xs tracking-widest text-textdim mb-1">LOCATION</p>
                    <p>Azamgarh, Uttar Pradesh, India</p>
                  </div>
                </div>

              </div>

              {/* SOCIALS */}
              <div className="mt-12">
                <p className="text-xs tracking-widest text-textdim mb-4">
                  CONNECT
                </p>

                <div className="flex gap-4">
                  <a
                    href="https://github.com/prahladnishad"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 border border-muted hover:border-accent hover:text-accent transition"
                    aria-label="GitHub"
                  >
                    <GitHub size={18} />
                  </a>

                  <a
                    href="https://linkedin.com/in/prahladnishad"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 border border-muted hover:border-accent hover:text-accent transition"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={18} />
                  </a>

                  <a
                    href="https://twitter.com/prahladnishad"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 border border-muted hover:border-accent hover:text-accent transition"
                    aria-label="Twitter"
                  >
                    <Twitter size={18} />
                  </a>
                </div>
              </div>
            </div>

            {/* CTA PANEL */}
            <motion.div
              className="bg-bgsecondary border border-accent p-8"
              whileHover={{ y: -4 }}
            >
              <h3 className="text-xl font-bold mb-4 tracking-wide neon-text">
                LET’S BUILD SOMETHING GREAT
              </h3>

              <p className="text-textdim mb-8 leading-relaxed">
                Available for freelance projects and full-time roles.  
                If you have an idea that needs strong engineering,
                I’m ready to collaborate.
              </p>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border border-accent text-accent hover:bg-accent hover:text-black transition"
              >
                VIEW RESUME →
              </a>
            </motion.div>

          </AnimatedSection>

          {/* RIGHT SIDE — FORM */}
          <AnimatedSection
            className="bg-bgsecondary border border-muted p-8"
            delay={0.4}
          >
            <h3 className="text-xl font-bold mb-8 tracking-wide">
              SEND MESSAGE
            </h3>

            <ContactForm />
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
};

export default Contact;