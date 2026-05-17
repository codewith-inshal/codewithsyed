import React from "react";
import { motion } from "framer-motion";

function ProjectsSection() {
  const projects = [
    {
      title: "Calculator",
      image: "/calculator.png",
      description: "Advanced Calculator made with HTML, CSS & JS",
      live: "https://advanced-calculator-beige.vercel.app/",
    },
    {
      title: "Student Management System",
      image: "/student.png",
      description: "Student Management System with HTML, CSS & JS",
      live: "https://student-management-system-eta-rosy.vercel.app/",
    },
    {
      title: "Website Templates",
      image: "/template.png",
      description: "Responsive Vercel deployed Website template",
      live: "https://smart-edu-website-template.vercel.app/",
    },
  ];

  return (
    <section className="py-20 px-6 md:px-16 bg-[#0b0b0b] text-white">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-20 pb-10">
        My <span className="text-lime-400">Projects</span>
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -10 }}
            className="rounded-3xl overflow-hidden bg-white/5 border border-white/10"
          >
            <img src={p.image} className="h-55 w-full object-cover" alt="" />

            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{p.title}</h3>
              <p className="text-gray-300 mb-4">{p.description}</p>

              <a href={p.live} target="_blank" rel="noreferrer">
                <button className="bg-lime-400 text-black px-5 py-2 rounded-full">
                  Live Demo
                </button>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
