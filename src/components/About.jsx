import React from "react";
import { motion } from "framer-motion";
import profile from "../assets/images/kamar.png";

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
      className="lg:h-screen flex items-center justify-center py-20 bg-tertiary"
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
              Hi! I’m a <strong>full-stack developer</strong> with a passion for
              coding, <em>problem-solving</em>, and continuous learning. I began
              my career at <strong>Infosys</strong>, where I gained valuable
              experience working with a talented team and supporting
              enterprise-level solutions. With a degree in Computer Science, I
              specialize in the <strong>MERN stack</strong> and further honed my
              skills through Pesto Tech’s program, where I built projects like{" "}
              <em>WorkoutWings</em> 🚀.
            </p>
            <p className="text-secondary text-lg mt-4">
              My journey in tech began with an internship that pushed me to move
              beyond textbooks and embrace self-learning. Since then, I’ve been
              focused on building <strong>scalable</strong> and{" "}
              <strong>efficient</strong> applications. 💻 I’m driven by
              challenges and always eager to learn new technologies. Outside of
              coding, I enjoy photography 📸 and bike rides 🚴‍♂️, blending my
              creative side with my tech journey.
            </p>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex items-center justify-center"
          >
            <div className="w-full max-w-md md:h-[400px] bg-tertiary flex items-center justify-center">
              <img
                className="h-48 w-full object-contain violet-gradient md:h-full md:w-92 rounded-2xl border-2 border-electric-violet"
                src={profile}
                alt="Muhammadh Kamaruddheen"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
