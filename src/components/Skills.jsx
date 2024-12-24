import React from "react";
import { motion } from "framer-motion";
import { skillsData } from "../data/skillsData";

const Skills = () => {
  return (
    <section
      id="skills"
      className="lg:h-screen flex items-center justify-center py-20 bg-primary"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Skills</h2>
          <p className="text-secondary text-lg">
            My technical toolkit and professional capabilities
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillsData.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-tertiary p-6 rounded-2xl"
            >
              <h3 className="sm:w-48 text-white text-xl font-semibold mb-4 flex items-center justify-center gap-2">
                {category.title}
                {/* <category.icon className="text-electric-violet w-5 h-5" /> */}
              </h3>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: skillIndex * 0.1 }}
                    className="flex items-center gap-2"
                  >
                    <skill.icon className="text-[#a37ef3] w-4 h-4" />
                    <span className="text-secondary">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
