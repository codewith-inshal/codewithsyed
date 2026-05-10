import React from "react";
import { motion } from "framer-motion";

function ContactInfo() {
  return (
    <section className="py-24 px-6 md:px-16 bg-[#0b0b0b] text-white">
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Email */}
        <motion.div
          whileHover={{ y: -10 }}
          className="bg-white/5 border border-white/10 p-8 rounded-2xl text-center"
        >
          <h3 className="text-lime-400 font-bold text-xl mb-2">Email</h3>
          <p className="text-gray-300">codewithsyed01@gmail.com</p>
        </motion.div>

        {/* Phone */}
        <motion.div
          whileHover={{ y: -10 }}
          className="bg-white/5 border border-white/10 p-8 rounded-2xl text-center"
        >
          <h3 className="text-lime-400 font-bold text-xl mb-2">Phone</h3>
          <p className="text-gray-300">+92 329 9742406</p>
        </motion.div>

        {/* Location */}
        <motion.div
          whileHover={{ y: -10 }}
          className="bg-white/5 border border-white/10 p-8 rounded-2xl text-center"
        >
          <h3 className="text-lime-400 font-bold text-xl mb-2">Location</h3>
          <p className="text-gray-300">Lahore, Punjab, Pakistan</p>
        </motion.div>
      </div>
    </section>
  );
}

export default ContactInfo;
