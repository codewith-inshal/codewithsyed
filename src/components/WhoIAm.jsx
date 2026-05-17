import React from "react";
import { motion } from "framer-motion";

function WhoIAm() {
  return (
    <section className="py-10 px-6 md:px-16 bg-[#0b0b0b] text-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <h2 className="text-4xl font-bold mb-6 pb-10">
            Who <span className="text-lime-400">I Am</span>
          </h2>

          <p className="text-gray-300 leading-8">
            I am a self-taught MERN Stack Developer focused on building
            responsive and scalable web applications using modern technologies
            like React, Node.js, Express, and MongoDB.
          </p>

          <p className="text-gray-400 mt-4 leading-8">
            I enjoy solving real-world problems and turning ideas into
            functional digital products.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-lg"
        >
          <p className="text-lime-400 text-xl font-bold mb-3">
            Developer Mindset
          </p>
          <p className="text-gray-300 leading-7">
            Clean code, scalable architecture, and user-focused design are my
            top priorities in every project I build.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default WhoIAm;
