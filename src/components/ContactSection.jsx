import React from "react";
import { motion } from "framer-motion";

function ContactSection() {
  return (
    <section className="py-10 px-6 md:px-16 bg-black text-white">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="max-w-5xl mx-auto text-center bg-white/5 border border-white/10 rounded-3xl p-14 backdrop-blur-lg"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
          Let's Work <span className="text-lime-400">Together</span>
        </h2>

        <p className="text-gray-300 mb-10">
          Have a project idea? Let’s build something amazing.
        </p>

        <a href="/contact">
          <button className="bg-lime-400 text-black px-8 py-3 rounded-full font-bold">
            Contact Us
          </button>
        </a>
      </motion.div>
    </section>
  );
}

export default ContactSection;
