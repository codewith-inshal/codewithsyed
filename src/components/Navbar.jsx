import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

function Navbar() {
  const location = useLocation();

  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "ABOUT", path: "/about" },
    { name: "SERVICES", path: "/services" },
    { name: "CONTACT", path: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md border-b border-lime-400/10 shadow-lg"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-3">
        {/* LOGO */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <h2 className="font-extrabold text-2xl md:text-3xl tracking-wide text-white m-0 cursor-pointer">
            Codewith
            <span className="text-lime-400 drop-shadow-[0_0_10px_#84cc16]">
              inshal
            </span>
          </h2>
        </motion.div>

        {/* NAV LINKS */}
        <ul className="hidden md:flex items-center gap-8 mb-0 p-0 list-none">
          {navLinks.map((link, index) => (
            <motion.li
              key={index}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
              className="relative"
            >
              <Link
                to={link.path}
                className={`no-underline font-semibold tracking-wide text-[15px] transition-all duration-300 ${
                  location.pathname === link.path
                    ? "text-lime-400"
                    : "text-white hover:text-lime-400"
                }`}
                style={{ textDecoration: "none" }}
              >
                {link.name}
              </Link>

              {/* ACTIVE UNDERLINE */}
              {location.pathname === link.path && (
                <motion.div
                  layoutId="underline"
                  className="absolute left-0 -bottom-1 h-[2px] w-full bg-lime-400 rounded-full"
                />
              )}
            </motion.li>
          ))}
        </ul>

        {/* HIRE ME BUTTON */}
        <motion.a
          href="https://wa.me/923299742406"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 0px 20px rgba(132, 204, 22, 0.6)",
          }}
          whileTap={{ scale: 0.95 }}
          className="relative overflow-hidden bg-lime-400 text-black px-5 py-2.5 rounded-full font-bold text-sm tracking-wider shadow-md transition-all duration-300 no-underline"
          style={{ textDecoration: "none" }}
        >
          <span className="relative z-10">Hire Me</span>

          {/* SHINE EFFECT */}
          <span className="absolute top-0 left-[-100%] w-full h-full bg-white/30 skew-x-12 animate-[shine_2.5s_infinite]" />
        </motion.a>
      </div>
    </motion.nav>
  );
}

export default Navbar;
