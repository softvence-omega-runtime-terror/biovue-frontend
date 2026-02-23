"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const TransformSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full bg-white p-8 md:p-16 rounded-2xl shadow-[0_2px_40px_rgba(0,0,0,0.02)] border border-[#E5E9EA] flex flex-col items-center text-center"
        >
          {/* Title */}
          <h2
            className="font-roboto font-medium mb-6  text-4xl sm:text-5xl md:text-[64px] leading-tight md:leading-[64px]"
            style={{
              textAlign: "center",
              background: "linear-gradient(270deg, #4F6BFF 0%, #7B3FE4 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Ready to Transform Your Health.
          </h2>

          {/* Description */}
          <p
            className="font-roboto font-normal mb-10  text-lg sm:text-xl md:text-[24px] leading-relaxed md:leading-[28px]"
            style={{
              color: "#1F2D2E",
              textAlign: "center",
            }}
          >
            Join thousands of people who are already visualizing and achieving
            their health goals with BioVue.
          </p>

          {/* CTA Button */}
          <Link
            href="/start"
            className="inline-flex items-center gap-2 bg-[#0FA4A9] text-white px-8 py-3 rounded-lg font-medium text-lg hover:bg-opacity-90 transition-all shadow-[0_4px_14px_0_rgba(15,164,169,0.39)]"
          >
            Started Your Free Journey
            <ArrowRight size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default TransformSection;
