import React from "react";
import { motion } from "framer-motion";

const Particles = () => {
  const particles = Array.from({ length: 60 });

  return (
    <div className="fixed inset-0 -z-10 bg-black overflow-hidden">
      {particles.map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-emerald-400 rounded-full"
          style={{
            width: 3,
            height: 3,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-20, -500],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 5 + Math.random() * 5,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

export default Particles;