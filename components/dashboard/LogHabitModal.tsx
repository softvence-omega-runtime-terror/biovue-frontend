"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Smartphone,
  Bed,
  Footprints,
  Droplets,
  Frown,
  Scale,
  ChevronsUpDown,
} from "lucide-react";

interface LogHabitModalProps {
  isOpen: boolean;
  onClose: () => void;
  habitType: string;
}

export default function LogHabitModal({
  isOpen,
  onClose,
  habitType,
}: LogHabitModalProps) {
  const [, setSource] = useState<"device" | "manual">("device");

  const getIcon = () => {
    switch (habitType.toLowerCase()) {
      case "sleep":
        return <Bed size={20} className="text-[#3A86FF]" />;
      case "activity":
        return <Footprints size={20} className="text-[#3A86FF]" />;
      case "hydration":
        return <Droplets size={20} className="text-[#3A86FF]" />;
      case "stress":
        return <Frown size={20} className="text-[#A855F7]" />;
      default:
        return <Bed size={20} className="text-[#3A86FF]" />;
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 z-50 backdrop-blur-[2px]"
          />
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-3xl p-6 md:p-8 shadow-2xl w-full max-w-150 pointer-events-auto border border-[#3A86FF]/25 flex flex-col gap-8"
            >
              {/* Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50/80 border border-blue-100 flex items-center justify-center shrink-0">
                    {getIcon()}
                  </div>
                  <h2 className="text-[22px] font-bold text-[#3A86FF]">
                    Logging: {habitType}
                  </h2>
                </div>
                <button
                  onClick={onClose}
                  className="p-1 text-gray-400 hover:text-gray-600 border border-gray-200 rounded-full transition-colors cursor-pointer"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Source Banner */}
              <div className="bg-white rounded-3xl p-4 md:p-6 border border-[#3A86FF]/25 flex items-center justify-between shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#0FA4A9] flex items-center justify-center shrink-0">
                    <Smartphone size={20} className="text-white" />
                  </div>
                  <span className="text-[#1F2D2E] font-bold text-[17px]">
                    Device Sync Active
                  </span>
                </div>
                <button
                  onClick={() =>
                    setSource((prev) =>
                      prev === "device" ? "manual" : "device",
                    )
                  }
                  className="bg-white border border-gray-200 text-[#1F2D2E] px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-50 transition-colors cursor-pointer"
                >
                  Change Source
                </button>
              </div>

              {/* Input Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8">
                {/* Weight */}
                <div className="flex flex-col gap-3 p-4 rounded-3xl border border-[#3A86FF]/25 bg-white shadow-sm">
                  <div className="flex items-center gap-2 text-[#1F2D2E] font-medium text-[15px]">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                      <Scale size={16} className="text-[#3A86FF]" />
                    </div>
                    Weight (lbs)
                  </div>
                  <div className="relative">
                    <select className="w-full appearance-none bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-[#5F6F73] text-[15px] focus:outline-none focus:ring-2 focus:ring-blue-100 cursor-pointer">
                      <option value="">Select.....</option>
                      <option value="150">150</option>
                      <option value="151">151</option>
                    </select>
                    <ChevronsUpDown
                      size={16}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                    />
                  </div>
                </div>

                {/* Daily Steps */}
                <div className="flex flex-col gap-3 p-4 rounded-3xl border border-[#3A86FF]/25 bg-white shadow-sm">
                  <div className="flex items-center gap-2 text-[#1F2D2E] font-medium text-[15px]">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                      <Footprints size={16} className="text-[#3A86FF]" />
                    </div>
                    Daily Steps
                  </div>
                  <div className="relative">
                    <select className="w-full appearance-none bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-[#5F6F73] text-[15px] focus:outline-none focus:ring-2 focus:ring-blue-100 cursor-pointer">
                      <option value="">Select.....</option>
                      <option value="5000">5000</option>
                      <option value="8000">8000</option>
                    </select>
                    <ChevronsUpDown
                      size={16}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                    />
                  </div>
                </div>

                {/* Sleep Hours */}
                <div className="flex flex-col gap-3 p-4 rounded-3xl border border-[#3A86FF]/25 bg-white shadow-sm">
                  <div className="flex items-center gap-2 text-[#1F2D2E] font-medium text-[15px]">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                      <Bed size={16} className="text-[#3A86FF]" />
                    </div>
                    Sleep Hours
                  </div>
                  <div className="relative">
                    <select className="w-full appearance-none bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-[#5F6F73] text-[15px] focus:outline-none focus:ring-2 focus:ring-blue-100 cursor-pointer">
                      <option value="">Select.....</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                    </select>
                    <ChevronsUpDown
                      size={16}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                    />
                  </div>
                </div>

                {/* Water Glasses */}
                <div className="flex flex-col gap-3 p-4 rounded-3xl border border-[#3A86FF]/25 bg-white shadow-sm">
                  <div className="flex items-center gap-2 text-[#1F2D2E] font-medium text-[15px]">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                      <Droplets size={16} className="text-[#3A86FF]" />
                    </div>
                    Water Glasses
                  </div>
                  <div className="relative">
                    <select className="w-full appearance-none bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-[#5F6F73] text-[15px] focus:outline-none focus:ring-2 focus:ring-blue-100 cursor-pointer">
                      <option value="">Select.....</option>
                      <option value="4">4</option>
                      <option value="6">6</option>
                      <option value="8">8</option>
                    </select>
                    <ChevronsUpDown
                      size={16}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                    />
                  </div>
                </div>
              </div>

              {/* Save Button */}
              <button
                onClick={onClose}
                className="w-full bg-[#0FA4A9] text-white py-4 rounded-xl font-bold text-[17px] hover:bg-opacity-90 transition-all cursor-pointer shadow-lg shadow-[#0FA4A9]/20 mt-4"
              >
                Save Today&apos;s {habitType}
              </button>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
