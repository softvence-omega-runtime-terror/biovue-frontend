"use client";

import React, { useState } from "react";
import { Frown, Meh, Smile, X, ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";

interface LogStressViewProps {
  onSave: () => void;
  onBack: () => void;
}

const MOODS = [
  { 
    id: "motivated", 
    label: "Motivated", 
    icon: <Smile size={24} />, 
    bg: "bg-[#EAF6F6]", 
    activeBorder: "border-[#0FA4A9]/30",
    color: "text-[#0FA4A9]"
  },
  { 
    id: "normal", 
    label: "Normal", 
    icon: <Meh size={24} />, 
    bg: "bg-[#F5F3FF]", 
    activeBorder: "border-[#A855F7]/30",
    color: "text-[#A855F7]"
  },
  { 
    id: "low", 
    label: "Low", 
    icon: <Frown size={24} />, 
    bg: "bg-pink-50", 
    activeBorder: "border-pink-200",
    color: "text-pink-500"
  }
];

export default function LogStressView({ onSave, onBack }: LogStressViewProps) {
  const [stressLevel, setStressLevel] = useState(5);
  const [selectedMood, setSelectedMood] = useState("normal");

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
      <div className="bg-white rounded-[24px] p-6 md:p-10 border border-gray-100 shadow-sm flex flex-col gap-8">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#F5F3FF] border border-purple-100 flex items-center justify-center shrink-0">
              <Frown size={22} className="text-[#A855F7]" />
            </div>
            <h2 className="text-[22px] font-bold text-[#3A86FF]">Logging : Stress</h2>
          </div>
          <button 
            onClick={onBack}
            className="p-1 text-gray-400 hover:text-gray-600 border border-gray-200 rounded-full transition-colors cursor-pointer"
          >
            <X size={18} />
          </button>
        </div>

        {/* Stress Level Level */}
        <div className="flex flex-col gap-6 p-8 rounded-[16px] border border-[#3A86FF]/25 bg-white shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-[#1F2D2E] font-medium text-[16px]">Stress Level</h3>
            <span className="text-[#3A86FF] font-bold text-[18px]">
              {stressLevel}/10
            </span>
          </div>
          <div className="relative px-2">
            <input 
              type="range" 
              min="1" 
              max="10" 
              step="1"
              value={stressLevel}
              onChange={(e) => setStressLevel(parseInt(e.target.value))}
              className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#3A86FF]"
            />
          </div>
        </div>

        {/* Today's Mood */}
        <div className="flex flex-col gap-4">
          <h3 className="text-[#1F2D2E] font-medium text-[16px]">Today's Mood</h3>
          <div className="grid grid-cols-3 gap-4">
            {MOODS.map((mood) => (
              <button
                key={mood.id}
                onClick={() => setSelectedMood(mood.id)}
                className={cn(
                  "flex flex-col items-center justify-center gap-2 p-6 rounded-xl border transition-all",
                  selectedMood === mood.id
                    ? cn(mood.bg, mood.activeBorder, "border-2")
                    : "bg-white border-gray-100 hover:border-gray-200"
                )}
              >
                <div className={cn(mood.color)}>
                  {mood.icon}
                </div>
                <span className="text-[#1F2D2E] font-medium text-[15px]">{mood.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Save Button */}
        <button 
          onClick={onSave}
          className="w-full bg-[#0FA4A9] text-white py-4.5 rounded-xl font-bold text-[18px] hover:bg-opacity-90 transition-all cursor-pointer shadow-lg shadow-[#0FA4A9]/20"
        >
          Save Today's Stress
        </button>

      </div>
    </div>
  );
}
