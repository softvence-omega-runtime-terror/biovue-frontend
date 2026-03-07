"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Apple, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePostNutritionLogMutation } from "@/redux/features/api/userDashboard/nutrition";
import { toast } from "sonner";

interface LogNutritionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const MEAL_BALANCES = [
  { label: "High Protein", value: "high_protein" },
  { label: "Balanced", value: "balanced" },
  { label: "High Carb", value: "high_carb" },
  { label: "High Fat", value: "high_fat" },
];

export default function LogNutritionModal({
  isOpen,
  onClose,
}: LogNutritionModalProps) {
  const [mealBalance, setMealBalance] = useState("high_protein");
  const [proteinServings, setProteinServings] = useState(4);
  const [carbQuality, setCarbQuality] = useState("");
  const [fatSource, setFatSource] = useState("");
  const [vegServings, setVegServings] = useState(4);

  const [postNutritionLog, { isLoading }] = usePostNutritionLogMutation();

  const handleSave = async () => {
    try {
      const payload = {
        log_date: new Date().toISOString().split('T')[0],
        meal_balance: mealBalance,
        protein_servings: Number(proteinServings),
        vegetable_servings: Number(vegServings),
        carb_quality: carbQuality || "N/A",
        fat_sources: fatSource || "N/A",
      };

      await postNutritionLog(payload).unwrap();
      toast.success("Nutrition log saved successfully!");
      onClose();
    } catch (error: any) {
      toast.error(error?.data?.message || "Failed to save nutrition log");
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
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 pointer-events-none overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-3xl p-6 md:p-8 shadow-2xl w-full max-w-250 pointer-events-auto border border-gray-100 flex flex-col gap-6 my-4 max-h-[95vh] overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#E6F6F6] border border-[#0FA4A9]/20 flex items-center justify-center shrink-0">
                    <Apple size={20} className="text-[#0FA4A9]" />
                  </div>
                  <h2 className="text-[20px] font-bold text-[#3A86FF]">
                    Logging : Nutrition
                  </h2>
                </div>
                <button
                  onClick={onClose}
                  className="p-1 text-gray-400 hover:text-gray-600 border border-gray-200 rounded-full transition-colors cursor-pointer"
                >
                  <X size={16} />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 overflow-y-auto pr-2 custom-scrollbar">
                {/* Left Column */}
                <div className="flex flex-col gap-6">
                  {/* Meal Balance */}
                  <div className="flex flex-col gap-3 p-4 rounded-2xl border border-gray-100 bg-[#F8FBFF]/50">
                    <h3 className="text-[#1F2D2E] font-bold text-[14px]">
                      Meal Balance
                    </h3>
                    <div className="grid grid-cols-2 gap-2">
                      {MEAL_BALANCES.map((option) => (
                        <button
                          key={option.value}
                          onClick={() => setMealBalance(option.value)}
                          className={cn(
                            "px-1 py-2.5 rounded-lg text-[12px] font-bold transition-all border shrink-0",
                            mealBalance === option.value
                              ? "bg-[#D9E6FF] text-[#1F2D2E] border-[#3A86FF]/30"
                              : "bg-white text-[#5F6F73] border-gray-100 hover:bg-gray-50",
                          )}
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Protein Servings */}
                  <div className="flex flex-col gap-4 p-4 rounded-2xl border border-gray-100 bg-[#F8FBFF]/50">
                    <div className="flex items-center justify-between">
                      <h3 className="text-[#1F2D2E] font-bold text-[14px]">
                        Protein Servings
                      </h3>
                    </div>
                    <input
                      type="number"
                      value={proteinServings}
                      onChange={(e) => setProteinServings(parseInt(e.target.value) || 0)}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-[#3A86FF] font-bold text-[#1F2D2E]"
                      placeholder="e.g. 4"
                    />
                  </div>

                  {/* Carb Quality */}
                  <div className="flex flex-col gap-3 p-4 rounded-2xl border border-[#3A86FF]/20 bg-[#F0F5FF]/30">
                    <h3 className="text-[#1F2D2E] font-bold text-[14px]">
                      Carb Quality
                    </h3>
                    <input
                      type="text"
                      value={carbQuality}
                      onChange={(e) => setCarbQuality(e.target.value)}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-[#3A86FF] font-medium text-[#1F2D2E]"
                      placeholder="e.g. Whole grain oats"
                    />
                  </div>
                </div>

                {/* Right Column */}
                <div className="flex flex-col gap-6">
                  {/* Fat Sources */}
                  <div className="flex flex-col gap-3 p-4 rounded-2xl border border-gray-100 bg-[#F8FBFF]/50">
                    <h3 className="text-[#1F2D2E] font-bold text-[14px]">
                      Fat Sources
                    </h3>
                    <input
                      type="text"
                      value={fatSource}
                      onChange={(e) => setFatSource(e.target.value)}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-[#3A86FF] font-medium text-[#1F2D2E]"
                      placeholder="e.g. Avocado, Olive oil"
                    />
                  </div>

                  {/* Vegetable Servings */}
                  <div className="flex flex-col gap-4 p-4 rounded-2xl border border-gray-100 bg-[#F8FBFF]/50">
                    <div className="flex items-center justify-between">
                      <h3 className="text-[#1F2D2E] font-bold text-[14px]">
                        Vegetable Servings
                      </h3>
                    </div>
                    <input
                      type="number"
                      value={vegServings}
                      onChange={(e) => setVegServings(parseInt(e.target.value) || 0)}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-[#3A86FF] font-bold text-[#1F2D2E]"
                      placeholder="e.g. 4"
                    />
                  </div>

                  {/* Save Button Placeholder for spacing or just the button */}
                  <div className="mt-auto pt-4 hidden md:block">
                    <button
                      onClick={handleSave}
                      disabled={isLoading}
                      className="w-full bg-[#0FA4A9] text-white py-4 rounded-xl font-bold text-[17px] hover:bg-opacity-90 transition-all cursor-pointer shadow-lg shadow-[#0FA4A9]/20 flex items-center justify-center gap-2"
                    >
                      {isLoading && <Loader2 className="animate-spin" size={20} />}
                      Save Today&apos;s Nutrition
                    </button>
                  </div>
                </div>
              </div>

              {/* Mobile Save Button */}
              <div className="md:hidden">
                <button
                  onClick={handleSave}
                  disabled={isLoading}
                  className="w-full bg-[#0FA4A9] text-white py-4 rounded-xl font-bold text-[17px] hover:bg-opacity-90 transition-all cursor-pointer shadow-lg shadow-[#0FA4A9]/20 flex items-center justify-center gap-2"
                >
                  {isLoading && <Loader2 className="animate-spin" size={20} />}
                  Save Today&apos;s Nutrition
                </button>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
