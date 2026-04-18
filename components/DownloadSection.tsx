"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const DownloadSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2026-05-20T00:00:00").getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, []);

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center mx-2 md:mx-3">
      <span className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-[#4F6BFF] to-[#7B3FE4] WebkitBackgroundClip: 'text' WebkitTextFillColor: 'transparent' bg-clip-text text-transparent leading-none">
        {value.toString().padStart(2, "0")}
      </span>
      <span className="text-[9px] md:text-[11px] uppercase tracking-widest text-gray-400 font-bold mt-2">
        {label}
      </span>
    </div>
  );

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="download-card relative w-full  bg-white p-8 md:p-16 rounded-xl shadow-[0_2px_40px_rgba(0,0,0,0.02)] border border-gray-100/30"
        >
          <div className="flex flex-col items-center text-center">
            {/* Title */}
            <h2 
              className="font-roboto font-medium tracking-[-2px] mb-12 max-w-6xl text-3xl sm:text-4xl md:text-5xl lg:text-[60px] leading-tight md:leading-[84px]"
              style={{
                textAlign: "center",
                background: "linear-gradient(270deg, #4F6BFF 0%, #7B3FE4 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Download BioVue Digital Wellness and take control of your health.
            </h2>

            {/* Countdown Banner (Before Scanner) */}
            <div className="mb-16 flex flex-col items-center">
              <div className="flex items-center gap-3 mb-6">
                <span className="inline-block px-4 py-1.5 rounded-full bg-[#4F6BFF]/10 text-[10px] md:text-xs font-bold text-[#4F6BFF] uppercase tracking-widest animate-pulse border border-[#4F6BFF]/20">
                  Coming Soon
                </span>
                <span className="text-gray-400 text-xs font-medium uppercase tracking-widest">
                  |
                </span>
                <span className="text-gray-500 text-[10px] md:text-xs font-bold uppercase tracking-widest">
                  Unlocking 20 May
                </span>
              </div>
              
              {/* Timer Grid */}
              <div className="flex items-center justify-center bg-white p-6 md:p-8 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,10,0.05)] border border-gray-100">
                <TimeUnit value={timeLeft.days} label="Days" />
                <div className="text-gray-200 font-light text-2xl md:text-4xl mx-1 md:mx-2 mt-[-10px]md:mt-[-20px]">:</div>
                <TimeUnit value={timeLeft.hours} label="Hours" />
                <div className="text-gray-200 font-light text-2xl md:text-4xl mx-1 md:mx-2 mt-[-10px]md:mt-[-20px]">:</div>
                <TimeUnit value={timeLeft.minutes} label="Mins" />
                <div className="text-gray-200 font-light text-2xl md:text-4xl mx-1 md:mx-2 mt-[-10px]md:mt-[-20px]">:</div>
                <TimeUnit value={timeLeft.seconds} label="Secs" />
              </div>
            </div>

            {/* Blurred Scanner Section */}
            <div className="flex flex-col items-center">
              <div className="relative w-44 h-44 md:w-52 md:h-52 bg-white rounded-3xl flex items-center justify-center p-4 border border-gray-100/50 shadow-sm opacity-60 grayscale blur-[4px] pointer-events-none transition-all duration-500 group-hover:blur-[2px] group-hover:opacity-80">
                <Image
                  src="/images/landing/qr-code.png"
                  alt="Scan to Download BioVue"
                  width={200}
                  height={200}
                  priority
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="mt-6 text-sm text-gray-400 font-medium tracking-wide">
                Scanner will be available on launch day
              </p>
            </div>
          </div>

          <style>{`
            .download-card {
              position: relative;
            }
            .download-card::before {
              content: '';
              position: absolute;
              inset: 0;
              border-radius: 0.75rem; /* Matches rounded-xl (12px) */
              padding: 2px;
              background: linear-gradient(
                to bottom right,
                transparent 0%,
                transparent 50%,
                #3A86FF 100%
              );
              -webkit-mask:
                linear-gradient(#fff 0 0) content-box,
                linear-gradient(#fff 0 0);
              -webkit-mask-composite: xor;
              mask-composite: exclude;
              pointer-events: none;
            }
          `}</style>
        </motion.div>
      </div>
    </section>
  );
};

export default DownloadSection;
