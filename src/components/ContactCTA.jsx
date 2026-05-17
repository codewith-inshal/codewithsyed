import React from "react";
import { motion } from "framer-motion";

function ContactCTA() {
  return (
    <section className="py-10 px-6 md:px-16 bg-[#0b0b0b] text-white">
      <motion.div
        whileInView={{ scale: 1 }}
        initial={{ scale: 0.9 }}
        className="max-w-4xl mx-auto text-center bg-white/5 border border-white/10 p-14 rounded-3xl backdrop-blur-xl"
      >
        <h2 className="text-4xl font-bold mb-6">Need a Developer?</h2>

        <p className="text-gray-300 mb-8">
          Let’s build your project faster and better.
        </p>

        <a href="https://wa.me/923299742406" target="_blank" rel="noreferrer">
          <button className="bg-lime-400 text-black px-8 py-3 rounded-full font-bold hover:bg-lime-300 transition">
            Let's Chat on WhatsApp
          </button>
        </a>
      </motion.div>
    </section>
  );
}

export default ContactCTA;
