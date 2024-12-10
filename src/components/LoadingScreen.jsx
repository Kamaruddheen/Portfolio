import React from "react";
import { motion } from "framer-motion";

const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1.5, delay: 2 }}
      onAnimationComplete={() => (document.body.style.overflow = "auto")}
      className="fixed inset-0 z-50 flex items-center justify-center bg-primary"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 0.5, 1] }}
        transition={{ duration: 1.5 }}
        className="relative"
      >
        <div className="w-20 h-20 border-4 border-[#915EFF] rounded-full border-t-transparent animate-spin" />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <span className="text-[#915EFF] font-bold">MK</span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default LoadingScreen;
