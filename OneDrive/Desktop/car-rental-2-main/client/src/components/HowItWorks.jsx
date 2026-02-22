import React from "react";
import Title from "./Title";
import { assets } from "../assets/assets";
import { motion } from "motion/react";

const steps = [
  {
    title: "Pick your location",
    description: "Choose a city and find the best cars nearby.",
    icon: assets.location_icon_colored,
  },
  {
    title: "Select dates",
    description: "Set pickup and return dates that fit your trip.",
    icon: assets.calendar_icon_colored,
  },
  {
    title: "Confirm & drive",
    description: "Book instantly with secure payments and hit the road.",
    icon: assets.check_icon,
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 px-6 md:px-16 lg:px-24 xl:px-32 bg-[#FFFDF7]">
      <Title
        title="Book in three easy steps"
        subTitle="A premium booking flow tailored for Indian cities, highways, and weekend escapes."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
        {steps.map((step, index) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            viewport={{ once: true, amount: 0.2 }}
            className="bg-white border border-[#F1D7B5] rounded-2xl p-6 shadow-lg hover:-translate-y-1 transition-all"
          >
            <div className="w-12 h-12 rounded-xl bg-[#FF8A1E]/15 flex items-center justify-center">
              <img src={step.icon} alt="" className="h-6" />
            </div>
            <h3 className="text-lg font-semibold mt-4 text-gray-900">
              {step.title}
            </h3>
            <p className="text-sm text-gray-500 mt-2">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
