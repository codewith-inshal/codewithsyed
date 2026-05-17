import React from "react";
import { motion } from "framer-motion";

function ServicesIntro() {
  return (
    <section className=" px-6 md:px-16 bg-[#0b0b0b]">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold mb-6 pb-5">
          What I <span className="text-lime-400">Do</span>
        </h2>

        <p className="text-gray-300 mt-6 text-lg">
          I specialize in full-stack MERN development, building responsive, fast
          and scalable web applications with modern UI/UX design principles.
        </p>
      </motion.div>
    </section>
  );
}

export default ServicesIntro;
