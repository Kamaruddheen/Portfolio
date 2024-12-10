import React from "react";
import { motion } from "framer-motion";
import developerIllustration from "../assets/images/developer-illustration.svg";
import Type from "./Type";

const HeroContent = () => {
  return (
    <div className="relative z-10 max-w-7xl mx-auto px-6 h-screen flex items-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 2.5 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 3 }}
            className="mb-4"
          >
            <h2 className="text-4xl font-bold text-white">Hi There! 👋</h2>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 3.2 }}
            className="text-6xl font-bold mb-6"
          >
            I'm <span className="text-[#915EFF]">Muhammadh Kamaruddheen</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 3.4 }}
            className="text-xl text-secondary mb-8"
          >
            <Type></Type>
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 3 }}
          className="hidden lg:block"
        >
          <img
            src={developerIllustration}
            alt="Developer Illustration"
            className="w-full max-w-lg mx-auto"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroContent;
