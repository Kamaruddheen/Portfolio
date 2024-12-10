import React from "react";
import { motion } from "framer-motion";

const fadeIn = (direction, delay) => ({
  hidden: {
    opacity: 0,
    y: direction === "up" ? 20 : direction === "down" ? -20 : 0,
    x: direction === "left" ? 20 : direction === "right" ? -20 : 0,
  },
  show: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      duration: 0.8,
      delay,
      ease: "easeOut",
    },
  },
});

const About = () => {
  return (
    <section
      id="about"
      className="h-screen flex items-center justify-center py-20 bg-tertiary"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
            <p className="text-secondary text-lg">
              I'm Muhammadh Kamaruddheen, a dedicated Full Stack Developer with
              experience in building robust web applications. My journey in
              technology started with a strong foundation in Computer Science,
              and I've since grown into a versatile developer capable of
              handling complex projects.
            </p>
            <p className="text-secondary text-lg mt-4">
              With experience at Infosys and various technical roles, I've
              developed a comprehensive understanding of software development
              lifecycles and best practices. I'm passionate about creating
              efficient, scalable solutions that make a real difference.
            </p>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex items-center justify-center"
          >
            <div className="w-full max-w-md h-[400px] bg-tertiary rounded-2xl border-2 border-[#915EFF] flex items-center justify-center">
              <img src="" alt="Muhammadh Kamaruddheen" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
