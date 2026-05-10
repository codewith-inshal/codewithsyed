import React from "react";
import { motion } from "framer-motion";

function ContactHero() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center bg-black text-white px-6">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-3xl"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold">
          Contact <span className="text-lime-400">Me</span>
        </h1>

        <p className="text-gray-300 mt-6 text-lg">
          Have a project idea? Let’s discuss and build something amazing
          together.
        </p>
      </motion.div>
    </section>
  );
}

export default ContactHero;
