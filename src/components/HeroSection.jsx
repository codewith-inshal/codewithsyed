import React from "react";
import { motion } from "framer-motion";

function HeroSection() {
  return (
    <section
      className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: "url('/hero-bg.jpg')" }}
    >
      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/70 z-10"></div>

      {/* GRADIENT GLOW */}
      <div className="absolute -top-30 -left-30 w-75 h-75 bg-lime-400/20 blur-[120px] rounded-full z-0"></div>

      <div className="absolute -bottom-30 -right-30 w-75 h-75 bg-lime-500/10 blur-[120px] rounded-full z-0"></div>

      {/* HERO CONTENT */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen text-center px-6">
        {/* SMALL HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-lime-400 uppercase tracking-[6px] text-sm md:text-base font-semibold mb-4"
        >
          MERN Stack Developer
        </motion.h2>

        {/* MAIN TITLE */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-white text-5xl md:text-7xl font-extrabold mb-5 leading-tight"
        >
          Codewith
          <span className="text-lime-400 drop-shadow-[0_0_18px_#84cc16]">
            inshal
          </span>
        </motion.h1>

        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-2xl text-gray-300 text-sm md:text-lg leading-relaxed mb-8"
        >
          Passionate MERN Stack Developer skilled in creating modern,
          responsive, and high-performance web applications using React,
          Node.js, Express.js, MongoDB, and Tailwind CSS.
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="flex flex-col sm:flex-row items-center gap-5"
        >
          {/* DOWNLOAD CV */}
          <a href="syedinshalabbas.pdf" download>
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 25px rgba(132, 204, 22, 0.6)",
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-lime-400 text-black font-bold py-3 px-8 rounded-full transition-all duration-300 tracking-wide"
            >
              Download CV
            </motion.button>
          </a>

          {/* HIRE ME */}
          <a
            href="https://wa.me/923299742406"
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                borderColor: "#84cc16",
                boxShadow: "0px 0px 20px rgba(132, 204, 22, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              className="border border-white text-white font-bold py-3 px-8 rounded-full bg-white/5 backdrop-blur-md hover:text-lime-400 transition-all duration-300 tracking-wide"
            >
              Hire Me
            </motion.button>
          </a>
        </motion.div>

        {/* SCROLL INDICATOR */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
          }}
          className="absolute bottom-8 flex flex-col items-center text-white"
        >
          <span className="text-xs tracking-[3px] mb-2 text-gray-300">
            SCROLL
          </span>

          <div className="w-0.5 h-10 bg-lime-400 rounded-full"></div>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
