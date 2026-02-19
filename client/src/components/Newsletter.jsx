import React from 'react';
import { motion } from 'motion/react';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 25 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: "easeOut" },
  viewport: { once: true, amount: 0.3 },
});

const Newsletter = () => {
  return (
    <motion.section
      {...fadeUp(0)}
      className="flex flex-col items-center justify-center text-center max-md:px-4 my-10 mb-36"
    >
      <div className="w-full max-w-4xl bg-gradient-to-r from-[#FF8A1E] via-[#F16C00] to-[#0E7C3A] rounded-3xl p-10 md:p-14 text-white shadow-2xl">
        <motion.h1
          {...fadeUp(0.2)}
          className="md:text-4xl text-2xl font-semibold"
        >
          Get exclusive booking deals
        </motion.h1>

        <motion.p
          {...fadeUp(0.3)}
          className="md:text-lg text-white/80 pb-8 max-w-2xl mx-auto"
        >
          Join our newsletter for price drops, new arrivals, and premium travel tips.
        </motion.p>

        <motion.form
          {...fadeUp(0.4)}
          className="flex flex-col md:flex-row items-center gap-3 max-w-2xl mx-auto"
        >
          <input
            className="h-12 w-full px-4 outline-none text-gray-700 rounded-xl border border-white/30 focus:border-white/70 transition"
            type="email"
            placeholder="Enter your email"
            required
          />

          <button
            type="submit"
            className="h-12 px-8 bg-white text-[#0E7C3A] font-semibold rounded-xl hover:bg-[#FFF1D6] transition"
          >
            Subscribe
          </button>
        </motion.form>
      </div>
    </motion.section>
  );
};

export default Newsletter;
