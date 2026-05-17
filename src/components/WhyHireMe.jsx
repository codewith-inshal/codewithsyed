import React from "react";

function WhyHireMe() {
  return (
    <section className="py-10 px-6 md:px-16 bg-[#0b0b0b]">
      <h2 className="text-4xl font-bold text-center mb-16 pb-10">
        Why <span className="text-lime-400">Choose Me</span>
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {["Clean Code Architecture", "Fast Delivery", "Modern UI/UX"].map(
          (item, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 p-8 rounded-2xl text-center hover:border-lime-400 transition-all"
            >
              <h3 className="text-lime-400 font-bold text-lg mb-2">{item}</h3>
              <p className="text-gray-300 text-sm">
                Professional and production-ready development quality.
              </p>
            </div>
          ),
        )}
      </div>
    </section>
  );
}

export default WhyHireMe;
