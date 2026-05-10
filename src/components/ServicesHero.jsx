import React from "react";
import { motion } from "framer-motion";

function ServicesHero() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center text-center px-6">
      {/* Glow Background */}
      <div className="absolute top-[-120px] left-[-120px] w-[300px] h-[300px] bg-lime-400/20 blur-[150px] rounded-full"></div>
      <div className="absolute bottom-[-120px] right-[-120px] w-[300px] h-[300px] bg-lime-500/20 blur-[150px] rounded-full"></div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 max-w-3xl"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold">
          My <span className="text-lime-400">Services</span>
        </h1>

        <p className="text-gray-300 mt-6 text-lg">
          I build modern, scalable and high-performance MERN stack applications
          with clean UI and smooth user experience.
        </p>
      </motion.div>
    </section>
  );
}

export default ServicesHero;
