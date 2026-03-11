import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const BootScreen: React.FC<{ onDone: () => void }> = ({ onDone }) => {
  const [lines, setLines] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);

  const detectOS = () => {
    const ua = navigator.userAgent;
    if (ua.includes("Win")) return "Windows";
    if (ua.includes("Mac")) return "macOS";
    if (ua.includes("Linux")) return "Linux";
    if (ua.includes("Android")) return "Android";
    if (ua.includes("iPhone")) return "iOS";
    return "Unknown";
  };

  const scanItems = [
    "Initializing system",
    "Scanning hardware",
    "Checking memory",
    "Verifying drivers",
    "Calibrating display",
    "Network handshake",
    "Security scan",
  ];

  useEffect(() => {
    const os = detectOS();

    
    setLines([
      "PRAHLAD SYSTEM v1.0.0",
      `Detected OS: ${os} ✓`,
      "",
    ]);

    
    let i = 0;
    const scanInterval = setInterval(() => {
      setLines((prev) => [
        ...prev,
        `> ${scanItems[i]} .......... OK`,
      ]);
      i++;
      if (i >= scanItems.length) clearInterval(scanInterval);
    }, 600); 
    const progressInterval = setInterval(() => {
      setProgress((p) => {
        const next = p + Math.floor(Math.random() * 6) + 2;
        return next >= 100 ? 100 : next;
      });
    }, 180); 

    return () => {
      clearInterval(scanInterval);
      clearInterval(progressInterval);
    };
  }, []);

  useEffect(() => {
    if (progress === 100) {
      setTimeout(() => {
        setLines((prev) => [...prev, "", "> Loading modules .......... 100% ✓"]);
      }, 300);

      setTimeout(() => {
        setLines((prev) => [...prev, "> Launching PRAHLAD.exe ..."]);
      }, 900);

      setTimeout(onDone, 2000);
    }
  }, [progress, onDone]);

  return (
    <motion.div
      className="fixed inset-0 z-[999] bg-black flex items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="w-full max-w-2xl px-6 font-mono text-sm md:text-base">
        {lines.map((line, i) => (
          <p
            key={i}
            className={
              line.startsWith("PRAHLAD")
                ? "text-accent mb-3 tracking-widest"
                : "text-green-400 opacity-90"
            }
          >
            {line.startsWith(">") || line === "" ? line : `> ${line}`}
          </p>
        ))}
        {progress < 100 && (
          <p className="text-green-400">
            {`> Loading modules .......... ${progress}%`}
          </p>
        )}
        <motion.span
          className="inline-block w-2 h-5 bg-green-400 ml-1"
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 1, repeat: Infinity }}
        />
      </div>
    </motion.div>
  );
};

export default BootScreen;