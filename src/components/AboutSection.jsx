import React from "react";
import { motion } from "framer-motion";

function AboutSection() {
  return (
    <section className="py-20 px-6 md:px-16 bg-black text-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            About <span className="text-lime-400">Me</span>
          </h2>

          <p className="text-gray-300 leading-8 text-lg">
            I am a MERN Stack Developer passionate about building modern,
            responsive, and high-performance web applications using React,
            Node.js, Express.js, MongoDB, and Tailwind CSS.
          </p>

          <p className="text-gray-400 mt-5 leading-8">
            I focus on clean UI, smooth animations, and scalable backend systems
            that deliver real-world solutions.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.03 }}
          className="bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-lg"
        >
          <div className="grid grid-cols-2 gap-6 text-center">
            <div>
              <h3 className="text-4xl font-bold text-lime-400">10+</h3>
              <p className="text-gray-300">Projects</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-lime-400">12+</h3>
              <p className="text-gray-300">Tech Stack</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-lime-400">100%</h3>
              <p className="text-gray-300">Responsive</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-lime-400">24/7</h3>
              <p className="text-gray-300">Support</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutSection;
