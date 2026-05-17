import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Footer() {
  const socialLinks = [
    {
      icon: <FaFacebookF />,
      link: "https://www.facebook.com/profile.php?id=61589575347449",
    },
    {
      icon: <FaInstagram />,
      link: "https://www.instagram.com/codewithsyed01/?hl=en",
    },
    {
      icon: <FaYoutube />,
      link: "https://www.youtube.com/@codewith_syed",
    },
    {
      icon: <FaLinkedinIn />,
      link: "https://www.linkedin.com/in/syed-inshal-abbas-5238223a9/",
    },
  ];

  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "ABOUT", path: "/about" },
    { name: "SERVICES", path: "/services" },
    { name: "CONTACT", path: "/contact" },
  ];

  return (
    <footer className="relative overflow-hidden bg-black text-white border-t border-lime-400/10">
      {/* GLOW EFFECTS */}
      <div className="absolute -top-20 -left-20 -w-55 -h-55 bg-lime-400/10 blur-[100px] rounded-full"></div>

      <div className="absolute -bottom-20 -right-20 -w-55 -h-55 bg-lime-500/10 blur-[100px] rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 py-10">
        {/* TOP SECTION */}
        <div className="flex flex-col items-center text-center gap-8">
          {/* LOGO */}
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-extrabold text-3xl tracking-wide m-0"
          >
            Codewith
            <span className="text-lime-400 drop-shadow-[0_0_10px_#84cc16]">
              inshal
            </span>
          </motion.h2>

          {/* NAVIGATION */}
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex flex-wrap justify-center gap-6 md:gap-10 list-none p-0 m-0"
          >
            {navLinks.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  style={{ textDecoration: "none" }}
                  className="text-white font-medium tracking-wide hover:text-lime-400 transition-all duration-300"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </motion.ul>

          {/* SOCIAL ICONS */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex justify-center gap-5"
          >
            {socialLinks.map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.15,
                  y: -5,
                  boxShadow: "0px 0px 20px rgba(132, 204, 22, 0.5)",
                }}
                whileTap={{ scale: 0.95 }}
                style={{ textDecoration: "none" }}
                className="w-12 h-12 rounded-full border border-white/20 bg-white/5 backdrop-blur-md flex items-center justify-center text-xl text-white hover:text-lime-400 hover:border-lime-400 transition-all duration-300"
              >
                {item.icon}
              </motion.a>
            ))}
          </motion.div>

          {/* HIRE ME BUTTON */}
          <motion.a
            href="https://wa.me/923299742406"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 25px rgba(132, 204, 22, 0.5)",
            }}
            whileTap={{ scale: 0.95 }}
            style={{ textDecoration: "none" }}
            className="bg-lime-400 text-black px-7 py-3 rounded-full font-bold tracking-wider transition-all duration-300"
          >
            Open Chat
          </motion.a>
        </div>

        {/* DIVIDER */}
        <div className="w-full h-px bg-white/10 my-10"></div>

        {/* COPYRIGHT */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="text-center text-sm text-gray-400 tracking-wide m-0"
        >
          © 2026 Codewithinshal. All Rights Reserved | MERN Stack Developer
        </motion.p>
      </div>
    </footer>
  );
}

export default Footer;
