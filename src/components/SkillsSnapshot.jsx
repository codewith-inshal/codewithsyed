import React from "react";

function SkillsSnapshot() {
  return (
    <section className="py-24 px-6 md:px-16 bg-[#0b0b0b] text-white">
      <h2 className="text-4xl font-bold text-center mb-16 py-3">
        Skills <span className="text-lime-400">Snapshot</span>
      </h2>

      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 text-center">
        {["Frontend", "Backend", "Database"].map((item, i) => (
          <div
            key={i}
            className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-lg"
          >
            <h3 className="text-lime-400 text-xl font-bold mb-3">{item}</h3>
            <p className="text-gray-300 text-sm">
              {item === "Frontend"
                ? "React, Tailwind, HTML, CSS"
                : item === "Backend"
                  ? "Node.js, Express.js"
                  : "MongoDB, Mongoose"}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SkillsSnapshot;
