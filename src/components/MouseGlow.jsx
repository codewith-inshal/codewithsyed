import React, { useEffect, useState } from "react";

function MouseGlow() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="fixed pointer-events-none z-[9999] w-40 h-40 rounded-full bg-lime-400/20 blur-3xl transition-transform duration-100"
      style={{
        transform: `translate(${pos.x - 80}px, ${pos.y - 80}px)`,
      }}
    />
  );
}

export default MouseGlow;
