import React from "react";
import { motion } from "framer-motion";

function ServicesGrid() {
  const services = [
    { title: "Frontend Development", desc: "React, Tailwind, UI/UX Design" },
    { title: "Backend Development", desc: "Node, Express, APIs" },
    { title: "MERN Apps", desc: "Full stack scalable systems" },
    { title: "Responsive Design", desc: "Mobile-first websites" },
    { title: "API Integration", desc: "REST APIs & services" },
    { title: "Deployment", desc: "Vercel, Render, Netlify" },
  ];

  return (
    <section className="py-28 px-6 md:px-16 bg-black">
      <h2 className="text-4xl font-bold text-center mb-20 py-3">
        My <span className="text-lime-400">Expertise</span>
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {services.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{
              y: -12,
              boxShadow: "0px 0px 40px rgba(132, 204, 22, 0.25)",
            }}
            className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl transition-all duration-500"
          >
            <h3 className="text-lime-400 text-xl font-bold mb-3">0{i + 1}</h3>

            <h4 className="text-xl font-semibold mb-2">{s.title}</h4>

            <p className="text-gray-300">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default ServicesGrid;
