import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        formRef.current,
        "YOUR_PUBLIC_KEY"
      );
      toast.success("Message sent successfully!");
      e.target.reset();
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-tertiary">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Contact Me</h2>
          <p className="text-secondary text-lg">
            Let&apos;s work together! Feel free to reach out for collaborations
            or just a friendly hello.
          </p>
        </div>

        <div className="flex justify-center">
          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col gap-8 w-full max-w-2xl bg-primary p-8 rounded-2xl"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <div>
              <label className="text-white text-sm mb-2 block">
                Full Name :
              </label>
              <input
                type="text"
                name="name"
                required
                className="bg-tertiary py-4 px-6 text-white rounded-lg w-full outline-none border-none"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="text-white text-sm mb-2 block">
                Email Address :
              </label>
              <input
                type="email"
                name="email"
                required
                className="bg-tertiary py-4 px-6 text-white rounded-lg w-full outline-none border-none"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="text-white text-sm mb-2 block">Message :</label>
              <textarea
                rows="7"
                name="message"
                required
                className="bg-tertiary py-4 px-6 text-white rounded-lg w-full outline-none border-none"
                placeholder="Tell me, I'm all ears"
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#915EFF] w-full py-3 px-8 rounded-xl outline-none text-white font-bold shadow-md"
            >
              {loading ? "Sending..." : "Send Message"}
            </motion.button>
          </motion.form>
        </div>
      </motion.div>
      <ToastContainer position="bottom-right" theme="dark" />
    </section>
  );
};

export default Contact;
