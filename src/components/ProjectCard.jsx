import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ project, index }) => {
  const { title, description, tags, image, source_code_link, live_demo_link } =
    project;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      whileHover={{ y: -10 }}
      className="bg-tertiary rounded-2xl p-5 sm:w-full"
    >
      <div className="relative w-full h-[300px] group">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-2xl"
        />
        <div className="absolute inset-0 flex justify-end gap-2 m-3">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => window.open(source_code_link, "_blank")}
            className="bg-tertiary w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <FaGithub className="w-1/2 h-1/2 text-white" />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => window.open(live_demo_link, "_blank")}
            className="bg-tertiary w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <FaExternalLinkAlt className="w-1/2 h-1/2 text-white" />
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-5"
      >
        <h3 className="text-white font-bold text-[24px]">{title}</h3>
        <p className="mt-2 text-secondary text-[14px]">{description}</p>
      </motion.div>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag, tagIndex) => (
          <motion.div
            key={tagIndex}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 + tagIndex * 0.1 }}
            className="flex items-center gap-1 text-[14px] text-white"
          >
            <tag.icon className="w-4 h-4" />
            <span>#{tag.name}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
