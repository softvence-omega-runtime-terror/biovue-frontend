"use client";

import React, { useState } from "react";
import { Apple, X, ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";

interface LogNutritionViewProps {
  onSave: () => void;
  onBack: () => void;
}

const MEAL_BALANCES = ["Mostly Carbs", "Balanced", "Protein-Focused", "High Fat/Processed"];
const FAT_SOURCES = ["Fried/Processed", "Dairy", "Nut & Seeds", "Healthy Oils"];
const CARB_QUALITIES = [
  { 
    title: "Mostly Refined Carbs", 
    desc: "White Bread, Pasta, Sugary Snacks",
    id: "refined"
  },
  { 
    title: "Mixed", 
    desc: "A Mix Of Refined And Whole Foods",
    id: "mixed"
  },
  { 
    title: "Mostly Whole Grains/Fruits", 
    desc: "Quinoa, Oats, Berries,Legumes",
    id: "whole"
  }
];

export default function LogNutritionView({ onSave, onBack }: LogNutritionViewProps) {
  const [mealBalance, setMealBalance] = useState("Mostly Carbs");
  const [proteinServings, setProteinServings] = useState(2);
  const [carbQuality, setCarbQuality] = useState("mixed");
  const [fatSource, setFatSource] = useState("Fried/Processed");
  const [vegServings, setVegServings] = useState(2);

  return (
    <div className="flex flex-col gap-4 w-full max-w-[800px] mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500 pb-10">
      
      {/* Back Button */}
      <div className="self-start">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 px-4 py-2 bg-white border border-[#3A86FF]/30 text-[#5F6F73] hover:text-[#1F2D2E] hover:bg-blue-50/50 rounded-lg text-xs font-semibold transition-all cursor-pointer"
        >
          <ArrowLeft size={14} />
          Back To Habit
        </button>
      </div>

      {/* Main Container */}
      <div className="bg-white rounded-[16px] p-6 md:p-10 border border-gray-100 shadow-sm flex flex-col gap-6">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#E6F6F6] border border-[#0FA4A9]/20 flex items-center justify-center shrink-0">
              <Apple size={22} className="text-[#0FA4A9]" />
            </div>
            <h2 className="text-[22px] font-bold text-[#3A86FF]">Logging : Nutrition</h2>
          </div>
          <button 
            onClick={onBack}
            className="p-1 text-gray-400 hover:text-gray-600 border border-gray-200 rounded-full transition-colors cursor-pointer"
          >
            <X size={18} />
          </button>
        </div>

        {/* Meal Balance */}
        <div className="flex flex-col gap-4 p-6 rounded-[16px] border border-[#3A86FF]/25 bg-white shadow-sm">
          <h3 className="text-[#1F2D2E] font-medium text-[16px]">Meal Balance</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {MEAL_BALANCES.map((option) => (
              <button
                key={option}
                onClick={() => setMealBalance(option)}
                className={cn(
                  "px-2 py-3.5 rounded-lg text-[13px] font-medium transition-all border shrink-0",
                  mealBalance === option 
                    ? "bg-[#D9E6FF] text-[#1F2D2E] border-[#3A86FF]/10" 
                    : "bg-white text-[#5F6F73] border-transparent hover:bg-gray-50"
                )}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        {/* Protein Servings */}
        <div className="flex flex-col gap-6 p-6 rounded-[16px] border border-[#3A86FF]/25 bg-white shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-[#1F2D2E] font-medium text-[16px]">Protein Servings</h3>
            <span className="bg-[#D9EDE6] text-[#1F2D2E] px-3 py-1 rounded-md text-[13px] font-bold border border-teal-100">
              {proteinServings === 3 ? "6+" : proteinServings === 2 ? "2,3" : proteinServings === 1 ? "1,2" : "0-1"} Servings
            </span>
          </div>
          <div className="relative px-2">
            <input 
              type="range" 
              min="0" 
              max="3" 
              step="1"
              value={proteinServings}
              onChange={(e) => setProteinServings(parseInt(e.target.value))}
              className="w-full h-1 bg-[#D1D5DB] rounded-lg appearance-none cursor-pointer accent-[#3A86FF]"
            />
            <div className="flex justify-between mt-4 text-[14px] font-medium text-[#1F2D2E]">
              <span>0-1</span>
              <span>2-3</span>
              <span>4-5</span>
              <span>6+</span>
            </div>
          </div>
        </div>

        {/* Carb Quality */}
        <div className="flex flex-col gap-4 p-5 rounded-[16px] border border-[#3A86FF]/25 bg-white shadow-sm">
          <h3 className="text-[#1F2D2E] font-medium text-[16px]">Carb Quality</h3>
          <div className="flex flex-col gap-2.5">
            {CARB_QUALITIES.map((item) => (
              <button
                key={item.id}
                onClick={() => setCarbQuality(item.id)}
                className={cn(
                  "flex flex-col gap-1 p-4 rounded-xl border transition-all text-left",
                  carbQuality === item.id
                    ? "bg-[#EAF6F6] border-[#0FA4A9]/30"
                    : "bg-white border-gray-100 hover:border-gray-200"
                )}
              >
                <div className="flex flex-col">
                  <span className="text-[#1F2D2E] font-bold text-[15px]">{item.title}</span>
                  <span className="text-[#5F6F73] text-[13px] font-medium">{item.desc}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Fat Sources */}
        <div className="flex flex-col gap-4 p-6 rounded-[16px] border border-[#3A86FF]/25 bg-white shadow-sm">
          <h3 className="text-[#1F2D2E] font-medium text-[16px]">Fat Sources</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {FAT_SOURCES.map((option) => (
              <button
                key={option}
                onClick={() => setFatSource(option)}
                className={cn(
                  "px-2 py-3.5 rounded-lg text-[13px] font-medium transition-all border",
                  fatSource === option 
                    ? "bg-[#D9E6FF] text-[#1F2D2E] border-[#3A86FF]/10" 
                    : "bg-white text-[#5F6F73] border-transparent hover:bg-gray-50"
                )}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        {/* Vegetable Servings */}
        <div className="flex flex-col gap-6 p-6 rounded-[16px] border border-[#3A86FF]/25 bg-white shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-[#1F2D2E] font-medium text-[16px]">Vegetable Servings</h3>
            <span className="bg-[#D9EDE6] text-[#1F2D2E] px-3 py-1 rounded-md text-[13px] font-bold border border-teal-100">
              {vegServings === 6 ? "6+" : vegServings} Servings
            </span>
          </div>
          <div className="relative px-2">
            <input 
              type="range" 
              min="0" 
              max="6" 
              step="1"
              value={vegServings}
              onChange={(e) => setVegServings(parseInt(e.target.value))}
              className="w-full h-1 bg-[#D1D5DB] rounded-lg appearance-none cursor-pointer accent-[#10B981]"
            />
            <div className="flex justify-between mt-4 text-[14px] font-medium text-[#1F2D2E]">
              {[0, 1, 2, 3, 4, 5, "6+"].map((v, i) => (
                <span key={i}>{v}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Save Button */}
        <button 
          onClick={onSave}
          className="w-full bg-[#0FA4A9] text-white py-4.5 rounded-xl font-bold text-[18px] hover:bg-opacity-90 transition-all cursor-pointer shadow-lg shadow-[#0FA4A9]/20"
        >
          Save Today's Nutrition
        </button>

      </div>
    </div>
  );
}
