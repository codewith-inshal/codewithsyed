import React from "react";
import { motion } from "framer-motion";

function Journey() {
  const steps = [
    {
      year: "2024",
      title: "Started Web Development",
      desc: "Learned HTML, CSS, JavaScript basics.",
    },
    {
      year: "2025",
      title: "React & MERN Stack",
      desc: "Started building full-stack applications.",
    },
    {
      year: "2026",
      title: "Advanced Developer",
      desc: "Building real-world scalable MERN projects.",
    },
  ];

  return (
    <section className="py-24 px-6 md:px-16 bg-black text-white">
      <h2 className="text-4xl font-bold text-center mb-16 py-3">
        My <span className="text-lime-400">Journey</span>
      </h2>

      <div className="max-w-4xl mx-auto space-y-10">
        {steps.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="border-l-2 border-lime-400 pl-6"
          >
            <h3 className="text-lime-400 font-bold text-xl">{item.year}</h3>
            <h4 className="text-white text-lg font-semibold">{item.title}</h4>
            <p className="text-gray-400">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Journey;
