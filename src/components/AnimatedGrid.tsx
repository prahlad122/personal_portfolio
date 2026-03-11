import React from "react";
import { motion } from "framer-motion";

const AnimatedGrid: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-bgprimary" />
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0,255,170,0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,255,170,0.08) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
        animate={{
          backgroundPosition: ["0px 0px", "60px 60px"],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,#000_85%)]" />

    </div>
  );
};

export default AnimatedGrid;