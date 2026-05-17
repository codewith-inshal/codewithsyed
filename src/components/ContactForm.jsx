import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setStatus("loading");

    emailjs
      .send(
        "service_q4ahkeb",
        "template_5rfrht9",
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        "V4tnNfsPZg2EMZ5Vd",
      )
      .then(() => {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      })
      .catch(() => {
        setStatus("error");
      });

    setTimeout(() => setStatus(""), 3000);
  };

  return (
    <section className="py-10 px-6 md:px-16 bg-black text-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 pb-10">
          Send Me a <span className="text-lime-400">Message</span>
        </h2>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-xl space-y-6"
        >
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="w-full p-4 my-4 rounded-xl bg-black border border-white/10 outline-none focus:border-lime-400"
          />

          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="w-full p-4 my-4 rounded-xl bg-black border border-white/10 outline-none focus:border-lime-400"
          />

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="5"
            required
            className="w-full p-4 my-4 rounded-xl bg-black border border-white/10 outline-none focus:border-lime-400"
          />

          <button
            type="submit"
            className="w-full bg-lime-400 text-black font-bold py-3 rounded-xl hover:bg-lime-300 transition"
          >
            {status === "loading" ? "Sending..." : "Send Message"}
          </button>

          {/* STATUS MESSAGES */}
          {status === "success" && (
            <p className="text-green-400 text-center font-semibold">
              ✅ Message Sent Successfully!
            </p>
          )}

          {status === "error" && (
            <p className="text-red-400 text-center font-semibold">
              ❌ Failed to send message. Try again.
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}

export default ContactForm;
