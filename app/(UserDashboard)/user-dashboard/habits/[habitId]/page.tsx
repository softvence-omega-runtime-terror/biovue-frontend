"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeft, BarChart2, CheckCircle2, Bed, Apple, Footprints, Frown, Droplets, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import LogHabitModal from "@/components/dashboard/LogHabitModal";


const HABIT_DETAILS: Record<string, any> = {
  "sleep": {
    title: "Sleep",
    icon: <Bed size={32} className="text-[#3A86FF]" />,
    iconBg: "bg-blue-50/50 border-blue-200",
    status: "ON TRACK",
    statusBg: "bg-teal-100 text-[#0FA4A9]",
    why: "consistent sleep supports physical recovery, neuroplasticity, and emotional stability.",
    target: "7.5-8 Hrs",
    avg: "7.4 Hrs",
    consistency: "71%",
    daysLogged: "5/7",
    logType: "Sleep"
  },
  "nutrition": {
    title: "Nutrition",
    icon: <Apple size={32} className="text-[#0FA4A9]" />,
    iconBg: "bg-[#E6F6F6] border-[#0FA4A9]/30",
    status: "Need Attention",
    statusBg: "bg-pink-100 text-pink-500",
    why: "proper nutrition provides essential macronutrients and micros for sustained energy.",
    target: "3-4 Servings",
    avg: "3 Servings",
    consistency: "28%",
    daysLogged: "2/7",
    logType: "Nutrition"
  },
  "activity": {
    title: "Activity",
    icon: <Footprints size={32} className="text-[#3A86FF]" />,
    iconBg: "bg-blue-50/50 border-blue-200",
    status: "ON TRACK",
    statusBg: "bg-teal-100 text-[#0FA4A9]",
    why: "daily movement improves cardiovascular health and boosts cognitive function.",
    target: "8,000 Steps",
    avg: "8,420 Steps",
    consistency: "85%",
    daysLogged: "6/7",
    logType: "Activity"
  },
  "stress": {
    title: "Stress",
    icon: <Frown size={32} className="text-[#A855F7]" />,
    iconBg: "bg-purple-50/50 border-purple-200",
    status: "ON TRACK",
    statusBg: "bg-teal-100 text-[#0FA4A9]",
    why: "managing stress lowers cortisol levels and prevents chronic inflammation.",
    target: "< 5/10",
    avg: "4/10",
    consistency: "57%",
    daysLogged: "4/7",
    logType: "Stress"
  },
  "hydration": {
    title: "Hydration",
    icon: <Droplets size={32} className="text-[#3A86FF]" />,
    iconBg: "bg-blue-50/50 border-blue-200",
    status: "Need Attention",
    statusBg: "bg-pink-100 text-pink-500",
    why: "adequate water intake is crucial for cellular function and metabolism.",
    target: "8 Glasses",
    avg: "4 Glasses",
    consistency: "14%",
    daysLogged: "1/7",
    logType: "Hydration"
  }
};

export default function HabitDetailPage() {
  const params = useParams();
  const router = useRouter();
  const habitId = params.habitId as string;
  const habit = HABIT_DETAILS[habitId] || HABIT_DETAILS["sleep"];
  
  const [isLogModalOpen, setIsLogModalOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-[calc(100vh-80px)] p-6 md:p-8 container mx-auto w-full">
      {/* Top Navigation */}
      <div className="mb-8">
        <button 
          onClick={() => router.push('/user-dashboard/habits')}
          className="flex items-center gap-2 px-4 py-2 border border-[#3A86FF]/30 text-[#5F6F73] hover:text-[#1F2D2E] hover:bg-blue-50/50 rounded-lg text-sm font-medium transition-colors cursor-pointer"
        >
          <ArrowLeft size={16} />
          Back To Habit
        </button>
      </div>

      {/* Main Container */}
      <div className="bg-white rounded-[24px] p-6 md:p-10 border border-gray-100 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
        
        {/* Header section */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 mb-8">
          <div className="flex items-center gap-6">
            <div className={cn("w-18 h-18 rounded-2xl flex items-center justify-center shrink-0 border", habit.iconBg)}>
              {habit.icon}
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-3xl font-bold text-[#3A86FF] leading-none mb-0.5">{habit.title}</h1>
              <span className={cn("px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border w-fit", habit.statusBg, habit.statusBg.split(' ')[0].replace('bg-', 'border-').replace('100', '200'))}>
                {habit.status}
              </span>
            </div>
          </div>

          <Link href={`/user-dashboard/habits/${habitId}/progress`}>
            <button className="flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-lg font-medium hover:bg-opacity-90 transition-all text-sm cursor-pointer shadow-sm">
              <BarChart2 size={18} />
              View Progress
            </button>
          </Link>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Left Column (Why it matters & Patterns) */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            
            {/* Why This Matters */}
            <div className="bg-[#F8FBFF] rounded-2xl p-8 border border-blue-100/50 flex flex-col gap-3">
              <h3 className="text-[#1F2D2E] font-bold text-sm uppercase tracking-wider">WHY THIS MATTERS</h3>
              <p className="text-[#1F2D2E] italic leading-relaxed text-[15px]">
                {habit.why}
              </p>
            </div>

            {/* Current Pattern */}
            <div className="border border-gray-100 rounded-2xl p-8 flex flex-col gap-5">
              <div className="flex items-center justify-between">
                <h3 className="text-[#1F2D2E] font-bold text-sm sm:text-base tracking-wide uppercase">YOUR CURRENT PATTERN</h3>
                <span className="text-[#1F2D2E] font-bold text-sm sm:text-base">{habit.daysLogged} Days Logged</span>
              </div>
              
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                <div className="bg-[#EAF6F6] rounded-xl p-5 border border-teal-50">
                  <div className="text-[#94A3B8] font-bold text-[11px] uppercase tracking-wider mb-2">WEEKLY AVERAGE</div>
                  <div className="text-[28px] font-bold text-[#1F2D2E] leading-none">{habit.avg}</div>
                </div>
                <div className="bg-[#EAF6F6] rounded-xl p-5 border border-teal-50">
                  <div className="text-[#94A3B8] font-bold text-[11px] uppercase tracking-wider mb-2">CONSISTENCY</div>
                  <div className="text-[28px] font-bold text-[#1F2D2E] leading-none">{habit.consistency}</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column (Suggested Target & Log Button) */}
          <div className="flex flex-col gap-6">
            
            {/* Suggested Target */}
            <div className="border border-gray-100 rounded-2xl p-8 flex flex-col items-center justify-center text-center gap-3">
              <div className="text-[#94A3B8] font-bold text-[11px] uppercase tracking-wider">SUGGESTED TARGET</div>
              <div className="text-[32px] font-bold text-[#1F2D2E] leading-none my-1">{habit.target}</div>
              <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#1F2D2E]">
                <CheckCircle2 size={14} className="text-[#10B981] fill-[#10B981]/20" />
                COACH APPROVED
              </div>
            </div>

            {/* Log Button Box */}
            <div 
              onClick={() => setIsLogModalOpen(true)}
              className="border-2 border-[#3A86FF] rounded-2xl p-8 flex flex-col items-center justify-center text-center gap-4 bg-white hover:bg-blue-50/50 transition-colors cursor-pointer group flex-1 min-h-40"
            >
              <div className="w-12 h-12 rounded-[14px] bg-[#3A86FF] flex items-center justify-center group-hover:scale-110 transition-transform shadow-md">
                <Plus size={24} className="text-white" />
              </div>
              <span className="text-[#1F2D2E] font-medium text-[15px]">
                Log Today's {habit.logType}
              </span>
            </div>

          </div>
        </div>
      </div>

      <LogHabitModal 
        isOpen={isLogModalOpen} 
        onClose={() => setIsLogModalOpen(false)} 
        habitType={habit.logType} 
      />
    </div>
  );
}
