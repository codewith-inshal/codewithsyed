import React from "react";

function Process() {
  const steps = ["Discuss", "Plan", "Develop", "Deploy"];

  return (
    <section className="py-28 px-6 md:px-16 bg-black">
      <h2 className="text-4xl font-bold text-center mb-16 py-3">
        My <span className="text-lime-400">Workflow</span>
      </h2>

      <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto text-center">
        {steps.map((step, i) => (
          <div
            key={i}
            className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:scale-105 transition"
          >
            <h3 className="text-lime-400 font-bold text-xl mb-2">0{i + 1}</h3>
            <p className="text-gray-300">{step}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Process;
