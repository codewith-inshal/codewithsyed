import React from "react";
import { motion } from "framer-motion";

function ServicesSection() {
  const services = [
    "Frontend Development",
    "Backend Development",
    "MERN Stack Apps",
    "Responsive Design",
    "API Integration",
    "Deployment",
  ];

  return (
    <section className="py-10 px-6 md:px-16 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-20 pb-10">
          My <span className="text-lime-400">Services</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-lg"
            >
              <h3 className="text-lime-400 text-2xl font-bold mb-3">
                0{i + 1}
              </h3>
              <p className="text-white text-xl font-semibold">{service}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
