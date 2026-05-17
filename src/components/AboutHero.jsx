import React from "react";
import { motion } from "framer-motion";

function AboutHero() {
  return (
    <section className="py-20 min-h-[60vh] flex items-center justify-center bg-black text-white px-6">
      <div className="text-center max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-extrabold pb-10"
        >
          About <span className="text-lime-400">Me</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-300 mt-6 text-lg"
        >
          MERN Stack Developer passionate about building modern web apps with
          clean UI, scalable backend, and smooth user experience.
        </motion.p>
      </div>
    </section>
  );
}

export default AboutHero;
