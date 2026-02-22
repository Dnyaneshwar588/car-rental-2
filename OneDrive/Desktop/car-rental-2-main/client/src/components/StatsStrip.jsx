import React from "react";
import { assets } from "../assets/assets";
import { motion } from "motion/react";

const stats = [
  { value: "50+", label: "Cities covered" },
  { value: "1,200+", label: "Premium cars" },
  { value: "4.9/5", label: "Average rating" },
];

const perks = [
  { icon: assets.check_icon, text: "Free cancellation" },
  { icon: assets.check_icon, text: "Secure payments" },
  { icon: assets.check_icon, text: "24/7 support" },
];

const StatsStrip = () => {
  return (
    <section className="px-6 md:px-16 lg:px-24 xl:px-32 -mt-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
        className="bg-[#FFF7EA]/90 backdrop-blur-xl border border-[#F1D7B5] rounded-2xl shadow-xl px-6 md:px-10 py-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8"
      >
        <div className="grid grid-cols-3 gap-6 w-full lg:w-auto">
          {stats.map((item) => (
            <div key={item.label} className="text-center">
              <p className="text-2xl md:text-3xl font-semibold text-[#1F2937]">
                {item.value}
              </p>
              <p className="text-sm text-gray-600 mt-1">{item.label}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          {perks.map((perk) => (
            <div
              key={perk.text}
              className="flex items-center gap-2 text-sm text-[#1F2937] bg-white/80 border border-[#F1D7B5] px-4 py-2 rounded-full"
            >
              <img src={perk.icon} alt="" className="h-4 w-4" />
              {perk.text}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default StatsStrip;
