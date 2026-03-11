import React from "react";
import { motion } from "framer-motion";

const Loader: React.FC = () => {
  return (
    <motion.div
      className="fixed inset-0 z-[999] flex items-center justify-center bg-bgprimary"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex flex-col items-center gap-8">

        <motion.h1
          className="text-3xl md:text-4xl font-extrabold tracking-[0.3em] neon-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          PRAHLAD
        </motion.h1>

        <div className="w-48 h-[2px] bg-muted overflow-hidden">
          <motion.div
            className="h-full bg-accent"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        <motion.p
          className="text-xs tracking-[0.4em] text-textdim"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.2, 1, 0.2] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          LOADING EXPERIENCE
        </motion.p>

      </div>
    </motion.div>
  );
};

export default Loader;