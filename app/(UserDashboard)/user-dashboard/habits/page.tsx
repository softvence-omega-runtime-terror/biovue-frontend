"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Plus, Bed, Apple, Footprints, Frown, Droplets, Calendar, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

// Mock Data
const HABITS = [
  {
    id: "sleep",
    title: "Sleep",
    subtitle: "\"7.4 hrs avg this week\"",
    icon: <Bed size={24} className="text-[#3A86FF]" />,
    iconBg: "bg-blue-100",
    status: "ON TRACK",
    statusBg: "bg-teal-100 text-[#0FA4A9]",
    consistency: [true, true, true, true, true, false, false], // 5/7
    consistencyText: "5/7 Days"
  },
  {
    id: "nutrition",
    title: "Nutrition",
    subtitle: "\"3 serv/day avg this week\"",
    icon: <Apple size={24} className="text-[#0FA4A9]" />,
    iconBg: "bg-[#E6F6F6]",
    status: "Need Attention",
    statusBg: "bg-pink-100 text-pink-500",
    consistency: [ true, true, false, false, false, false, false], // 2/7
    consistencyText: "2/7 Days",
    consistencyColor: "bg-[#EA580C]"
  },
  {
    id: "activity",
    title: "Activity",
    subtitle: "\"8,420 steps avg this week\"",
    icon: <Footprints size={24} className="text-[#3A86FF]" />,
    iconBg: "bg-blue-100",
    status: "ON TRACK",
    statusBg: "bg-teal-100 text-[#0FA4A9]",
    consistency: [true, true, true, true, true, true, false], // 6/7
    consistencyText: "6/7 Days"
  },
  {
    id: "stress",
    title: "Stress",
    subtitle: "\"4/10 avg this week\"",
    icon: <Frown size={24} className="text-[#A855F7]" />,
    iconBg: "bg-purple-100",
    status: "ON TRACK",
    statusBg: "bg-teal-100 text-[#0FA4A9]",
    consistency: [true, true, true, true, false, false, false], // 4/7
    consistencyText: "4/7 Days"
  },
  {
    id: "hydration",
    title: "Hydration",
    subtitle: "\"4 glasses avg this week\"",
    icon: <Droplets size={24} className="text-[#3A86FF]" />,
    iconBg: "bg-blue-100",
    status: "Need Attention",
    statusBg: "bg-pink-100 text-pink-500",
    consistency: [ true, false, false, false, false, false, false], // 1/7
    consistencyText: "1/7 Days",
    consistencyColor: "bg-[#EA580C]"
  }
];

export default function HabitsPage() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-80px)] p-6 md:p-8 container  mx-auto w-full">
      {/* Top Navigation */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
        <Link 
          href="/user-dashboard"
          className="flex items-center gap-2 px-4 py-2 border border-[#3A86FF]/30 text-[#5F6F73] hover:text-[#1F2D2E] hover:bg-blue-50/50 rounded-lg text-sm font-medium transition-colors"
        >
          <ArrowLeft size={16} />
          Back to Dashboard
        </Link>
        
        <button className="flex items-center gap-2 bg-[#0FA4A9] text-white px-5 py-2.5 rounded-lg font-medium hover:bg-opacity-90 transition-all text-sm shadow-sm cursor-pointer">
          <Plus size={18} />
          Log Today's Habit
        </button>
      </div>

      {/* Habits Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {HABITS.map((habit) => (
          <div key={habit.id} className="bg-white rounded-[16px] p-6 border border-[#3A86FF]/25 shadow-[0_2px_12px_rgba(0,0,0,0.02)] flex flex-col justify-between hover:border-blue-100 transition-colors">
            <div className="flex flex-col gap-4">
              <div className="flex items-start justify-between">
                <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center shrink-0", habit.iconBg)}>
                  {habit.icon}
                </div>
                <span className={cn("px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border", habit.statusBg, habit.statusBg.split(' ')[0].replace('bg-', 'border-').replace('100', '200'))}>
                  {habit.status}
                </span>
              </div>
              
              <div className="flex flex-col gap-1 mt-1">
                <h3 className="text-[22px] font-bold text-[#1F2D2E]">{habit.title}</h3>
                <p className="text-[#5F6F73] text-[15px] italic text-gray-500">
                  {habit.subtitle}
                </p>
              </div>

              {/* Consistency Bar */}
              <div className="flex flex-col gap-2 mt-4">
                <div className="flex items-center justify-between text-xs font-bold text-[#94A3B8] uppercase tracking-wider">
                  <span>Consistency</span>
                  <span>{habit.consistencyText}</span>
                </div>
                <div className="flex items-center gap-1.5 w-full">
                  {habit.consistency.map((isComplete, i) => (
                    <div 
                      key={i} 
                      className={cn(
                        "h-1.5 flex-1 rounded-full",
                        isComplete 
                          ? (habit.consistencyColor || "bg-[#0FA4A9]") 
                          : "bg-gray-100"
                      )}
                    />
                  ))}
                </div>
              </div>
            </div>

            <Link href={`/user-dashboard/habits/${habit.id}`} className="mt-8">
              <button className="w-full bg-[#5C82C8] text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-opacity-90 transition-all text-sm group cursor-pointer shadow-sm">
                View Details
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>
        ))}
      </div>

      {/* Focus on Trends Banner */}
      <div className="bg-[#EEF2FC] rounded-[16px] p-6 border border-[#2563EB]/10 flex items-center gap-4 mt-auto shadow-sm">
        <div className="w-12 h-12 rounded-xl bg-[#5C82C8] flex items-center justify-center shrink-0 shadow-sm">
          <Calendar size={24} className="text-white" />
        </div>
        <div className="flex flex-col gap-1">
          <h4 className="text-[#1F2D2E] font-bold text-lg">Focus on Trends</h4>
          <p className="text-[#5C82C8] text-sm italic">
            Missing a day happens. BioVue focuses on long-term consistency over perfection.
          </p>
        </div>
      </div>
    </div>
  );
}
