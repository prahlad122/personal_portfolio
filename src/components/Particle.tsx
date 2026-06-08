import React from "react";
import { motion } from "framer-motion";

const Particles = () => {
  const particles = Array.from({ length: 60 });

  return (
    <div className="fixed inset-0 -z-10 bg-black overflow-hidden">
      {particles.map((_, i) => {
        const size = Math.random() * 4 + 2; 
        const isWhite = Math.random() > 0.6;

        return (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: size,
              height: size,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: isWhite ? "#ffffff" : "#34d399",
              boxShadow: isWhite
                ? `
                  0 0 8px #fff,
                  0 0 16px #fff,
                  0 0 24px #fff
                `
                : `
                  0 0 8px #34d399,
                  0 0 16px #34d399,
                  0 0 32px #34d399,
                  0 0 48px #34d399
                `,
            }}
            animate={{
              y: [-20, -700],
              opacity: [0, 1, 1, 0],
              scale: [0.8, 1.3, 1],
            }}
            transition={{
              duration: 10 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear",
            }}
          />
        );
      })}
    </div>
  );
};

export default Particles;