import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import { navLinks, socialLinks } from "../constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary py-12 border-t border-tertiary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col"
          >
            <h3 className="text-white text-xl font-bold mb-4">
              Muhammadh Kamaruddheen
            </h3>
            <p className="text-secondary">
              Full Stack Developer passionate about creating impactful web
              solutions
            </p>
          </motion.div>
          <div className="col flex flex-col xs:flex-row justify-center xs:justify-between items-start space-y-5 xs:space-y-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      className="relative text-secondary hover:text-electric-violet transition-colors"
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h4 className="text-white font-semibold mb-4">Connect</h4>
              <div className="flex gap-4">
                {[
                  {
                    Icon: FaGithub,
                    link: socialLinks.github,
                    label: "github link",
                  },
                  {
                    Icon: FaLinkedin,
                    link: socialLinks.linkedin,
                    label: "linkedin link",
                  },
                  {
                    Icon: FaTwitter,
                    link: socialLinks.twitter,
                    label: "twitter link",
                  },
                  {
                    Icon: FaEnvelope,
                    link: socialLinks.email,
                    label: "email link",
                  },
                ].map(({ Icon, link, label }, index) => (
                  <motion.a
                    key={index}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={label}
                    className="relative w-10 h-10 rounded-full bg-tertiary flex items-center justify-center hover:bg-electric-violet transition-colors"
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-tertiary text-center"
        >
          <p className="text-secondary">
            © {currentYear} Muhammadh Kamaruddheen. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
