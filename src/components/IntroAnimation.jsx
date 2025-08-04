import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function IntroAnimation({ onFinish }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const sequence = [
      () => setStep(1),
      () => setStep(2),
      () => setTimeout(onFinish, 800), // exit after showing Hindi
    ];

    let current = 0;
    const interval = setInterval(() => {
      sequence[current++]?.();
      if (current === sequence.length) clearInterval(interval);
    }, 1800);

    return () => clearInterval(interval);
  }, [onFinish]);

  const renderContent = () => {
    if (step === 1) {
      return (
        <motion.h1
          key="english"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          className="text-5xl font-extrabold text-green-600"
        >
          A<span className="text-white">ushad</span><span className="text-green-300">I</span>
        </motion.h1>
      );
    }

    if (step === 2) {
      return (
        <motion.h1
          key="hindi"
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1.1 }}
          exit={{ opacity: 0 }}
          className="text-5xl font-bold text-green-400 tracking-widest"
        >
          औषधि
        </motion.h1>
      );
    }

    return null;
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="intro"
        className="fixed inset-0 flex items-center justify-center bg-[#0d1117] z-50"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 1 } }}
      >
        {renderContent()}
      </motion.div>
    </AnimatePresence>
  );
}

export default IntroAnimation;
