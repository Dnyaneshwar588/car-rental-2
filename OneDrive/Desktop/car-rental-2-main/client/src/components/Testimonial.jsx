import React from "react";
import Title from "./Title";
import { assets } from "../assets/assets";
import { motion } from "motion/react";

const Testimonial = () => {
  const testimonials = [
    {
      name: "Aarav Sharma",
      location: "Mumbai, India",
      testimonial:
        "The booking flow felt premium and the car quality was exceptional. I was on the road in minutes.",
      image: assets.testimonial_image_1,
    },
    {
      name: "Priya Iyer",
      location: "Chennai, India",
      testimonial:
        "Transparent pricing, flexible cancellation, and amazing support. This is the best rental service I’ve used.",
      image: assets.testimonial_image_2,
    },
    {
      name: "Rohit Verma",
      location: "Delhi, India",
      testimonial:
        "Fast checkout, verified owners, and premium cars. Perfect for business trips and weekend getaways.",
      image: assets.testimonial_image_1,
    },
  ];

  return (
    <div className="py-28 px-6 md:px-16 lg:px-24 xl:px-32 bg-[#FFF8EC]">

      <Title
        title="Loved by Indian Travelers"
        subTitle="See why customers across India trust us for a premium and reliable travel experience."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        {testimonials.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.2,
              ease: "easeOut",
            }}
            viewport={{ once: true, amount: 0.3 }}
            className="bg-white p-6 rounded-2xl border border-[#F1D7B5] shadow-lg hover:-translate-y-1 transition-all duration-500"
          >
            {/* Avatar */}
            <div className="flex items-center gap-3">
              <img src={item.image} alt={item.name} className="w-12 h-12 rounded-full object-cover" />

              <div>
                <p className="text-base font-semibold text-gray-900">{item.name}</p>
                <p className="text-gray-500 text-sm">{item.location}</p>
              </div>
            </div>

            <div className="flex items-center gap-1 mt-4">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <img key={i} src={assets.star_icon} alt="star-icon" />
                ))}
            </div>

            <p className="text-gray-600 mt-4 font-light">
              "{item.testimonial}"
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
