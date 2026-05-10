import React from "react";
import { motion } from "framer-motion";

function ServicesCTA() {
  return (
    <section className="py-28 px-6 md:px-16 bg-black">
      <motion.div
        whileInView={{ scale: 1 }}
        initial={{ scale: 0.9 }}
        className="max-w-4xl mx-auto text-center bg-white/5 border border-white/10 p-14 rounded-3xl backdrop-blur-xl"
      >
        <h2 className="text-4xl font-bold mb-6">
          Let’s Build Something <span className="text-lime-400">Great</span>
        </h2>

        <p className="text-gray-300 mb-8">
          Contact me for your next MERN Stack project.
        </p>

        <a href="/contact">
          <button className="bg-lime-400 text-black px-8 py-3 rounded-full font-bold hover:bg-lime-300 transition">
            Contact Us
          </button>
        </a>
      </motion.div>
    </section>
  );
}

export default ServicesCTA;
