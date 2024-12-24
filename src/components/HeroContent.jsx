import React from "react";
import { motion } from "framer-motion";
import developerIllustration from "../assets/images/developer-illustration.svg";
import Type from "./Type";

const HeroContent = () => {
  return (
    <div className="relative h-screen z-10 max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 2.5 }}
          className="text-center md:text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 3 }}
            className="mb-4"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-rubik">
              Hi There! 👋
            </h2>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 3.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-rubik"
          >
            I'm{" "}
            <span className="text-electric-violet">Muhammadh Kamaruddheen</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 3.4 }}
            className="text-xl sm:text-2xl text-secondary mb-8 font-poppins"
          >
            <Type />
          </motion.div>
        </motion.div>
        {/* Image section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 3 }}
          className="hidden md:block"
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
