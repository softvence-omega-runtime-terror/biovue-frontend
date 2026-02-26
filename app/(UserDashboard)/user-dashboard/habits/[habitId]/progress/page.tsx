"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeft, Bed, Apple, Footprints, Frown, Droplets, Calendar, Sparkles, User, FileText } from "lucide-react";
import { cn } from "@/lib/utils";
import { 
  AreaChart, 
  Area, 
  XAxis, 
  Tooltip, 
  ResponsiveContainer 
} from "recharts";
import LogHabitModal from "@/components/dashboard/LogHabitModal";

const MOCK_DATA = [
  { name: 'M', val: 2 }, 
  { name: 'T', val: 6 }, 
  { name: 'W', val: 4 }, 
  { name: 'T', val: 8 }, 
  { name: 'F', val: 6 }, 
  { name: 'S', val: 9 }, 
  { name: 'S', val: 12 }
];

const HABIT_META: Record<string, any> = {
  "sleep": {
    title: "Sleep",
    icon: <Bed size={24} className="text-[#3A86FF]" />,
    iconBg: "bg-blue-100/50",
    avgStr: "7.4 Hrs",
    unit: "Hrs",
    consistency: "71%",
    streak: "7 DAYS",
    trend: "Improving",
    trendColor: "text-[#10B981]",
    insight: "your sleep consistency improved this weekly after tuesday, maintaining regular timing will significantly increase your physical recovery markers.",
    coachNote: "your sleep consistency improved this weekly after tuesday, maintaining regular timing will significantly increase your physical recovery markers.",
    coachName: "JORDAN",
    coachTime: "2H AGO"
  },
  "nutrition": {
    title: "Nutrition",
    icon: <Apple size={24} className="text-[#0FA4A9]" />,
    iconBg: "bg-[#E6F6F6]",
    avgStr: "3 Serv",
    consistency: "28%",
    streak: "1 DAY",
    trend: "Needs Attention",
    trendColor: "text-red-500",
    insight: "you are missing protein targets on weekends consistently.",
    coachNote: "Ensure you meal prep on Friday to stay on track over the weekend.",
    coachName: "SARAH",
    coachTime: "1D AGO"
  }
};

export default function HabitProgressPage() {
  const params = useParams();
  const router = useRouter();
  const habitId = params.habitId as string;
  const habit = HABIT_META[habitId] || HABIT_META["sleep"];
  
  const [timeframe, setTimeframe] = useState("Weekly");
  const [isLogModalOpen, setIsLogModalOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-[calc(100vh-80px)] p-6 md:p-8 container mx-auto w-full">
      {/* Top Navigation */}
      <div className="mb-8">
        <button 
          onClick={() => router.push(`/user-dashboard/habits/${habitId}`)}
          className="flex items-center gap-2 px-4 py-2 border border-[#3A86FF]/30 text-[#5F6F73] hover:text-[#1F2D2E] hover:bg-blue-50/50 rounded-lg text-sm font-medium transition-colors cursor-pointer w-fit"
        >
          <ArrowLeft size={16} />
          Back To Habit
        </button>
      </div>

      <div className="flex flex-col gap-6 w-full">
        
        {/* Main Chart Card */}
        <div className="bg-white rounded-[24px] p-6 md:p-8 border border-gray-100 shadow-[0_2px_12px_rgba(0,0,0,0.02)] flex flex-col gap-8 w-full">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 text-[#3A86FF]", habit.iconBg)}>
                 {habit.icon}
              </div>
              <div className="flex flex-col gap-1">
                <h2 className="text-2xl font-bold text-[#3A86FF]">{habit.title} Progress</h2>
                <p className="text-[#94A3B8] text-sm italic font-medium">Based on your logged {habit.title.toLowerCase()} data</p>
              </div>
            </div>

            <div className="flex p-1 bg-white border border-gray-200 rounded-xl overflow-hidden self-start md:self-auto shrink-0">
               {["Weekly", "Monthly", "Last 3 months"].map((t) => (
                 <button 
                   key={t}
                   onClick={() => setTimeframe(t)} 
                   className={cn("px-4 py-2 text-sm font-semibold rounded-lg transition-all cursor-pointer", 
                   t === timeframe ? "bg-[#D9E6FF] text-[#1F2D2E]" : "text-[#5F6F73] hover:bg-gray-50"
                 )}>
                   {t}
                 </button>
               ))}
            </div>
          </div>

          <div className="h-[240px] w-full mt-4 -ml-4 pr-4">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={MOCK_DATA} margin={{ top: 10, right: 10, left: 10, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorVal" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#4ade80" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#4ade80" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{fontSize: 12, fill: '#94A3B8', fontWeight: 600}} 
                  dy={10}
                />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                  labelStyle={{ fontWeight: 600, color: '#1F2D2E' }}
                />
                <Area 
                  type="monotone" 
                  dataKey="val" 
                  stroke="#4ade80" 
                  strokeWidth={2} 
                  fillOpacity={1} 
                  fill="url(#colorVal)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-[0_2px_12px_rgba(0,0,0,0.02)] flex flex-col gap-2">
            <span className="text-[#3A86FF] font-bold text-[13px] uppercase tracking-wider">AVERAGE</span>
            <span className="text-[17px] font-bold text-[#1F2D2E]">{habit.avgStr}</span>
          </div>
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-[0_2px_12px_rgba(0,0,0,0.02)] flex flex-col gap-2">
            <span className="text-[#3A86FF] font-bold text-[13px] uppercase tracking-wider">CONSISTENCY</span>
            <span className="text-[17px] font-bold text-[#1F2D2E]">{habit.consistency}</span>
          </div>
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-[0_2px_12px_rgba(0,0,0,0.02)] flex flex-col gap-2">
            <span className="text-[#3A86FF] font-bold text-[13px] uppercase tracking-wider">BEST STREAK</span>
            <span className="text-[17px] font-bold text-[#1F2D2E]">{habit.streak}</span>
          </div>
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-[0_2px_12px_rgba(0,0,0,0.02)] flex flex-col gap-2">
            <span className="text-[#3A86FF] font-bold text-[13px] uppercase tracking-wider">CURRENT TREND</span>
            <span className={cn("text-[17px] font-bold", habit.trendColor)}>{habit.trend}</span>
          </div>
        </div>

        {/* BIOVUE Insight */}
        <div className="bg-[#EAF6F6] rounded-[20px] p-6 md:p-8 border border-teal-100 flex flex-col gap-3">
          <div className="flex items-center gap-2 text-[#0FA4A9] font-bold text-sm tracking-widest uppercase">
            <Sparkles size={18} />
            BIOVUE INSIGHT
          </div>
          <p className="text-[#1F2D2E] italic">
            {habit.insight}
          </p>
        </div>

        {/* Coach Note */}
        <div className="bg-[#F5F3FF] rounded-[20px] p-6 md:p-8 border border-purple-100 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#8B5CF6] flex items-center justify-center text-white shrink-0 shadow-sm">
               <User size={20} />
            </div>
            <h3 className="text-[#8B5CF6] font-bold text-[17px]">Coach Note</h3>
          </div>
          <p className="text-[#1F2D2E] italic text-[15px] leading-relaxed">
            {habit.coachNote}
          </p>
          <span className="text-[#94A3B8] font-bold text-[11px] uppercase tracking-widest italic mt-1">
            {habit.coachName}. {habit.coachTime}
          </span>
        </div>

        {/* Sticky-like Footer Button */}
        <div className="mt-4 mb-8">
          <button 
            onClick={() => setIsLogModalOpen(true)}
            className="w-full bg-[#0FA4A9] text-white py-4 rounded-xl font-medium text-[17px] hover:bg-opacity-90 transition-all cursor-pointer shadow-sm flex items-center justify-center gap-2 group"
          >
            <Calendar size={20} />
            Log Today's {habit.title}
          </button>
        </div>
      </div>

      <LogHabitModal 
        isOpen={isLogModalOpen} 
        onClose={() => setIsLogModalOpen(false)} 
        habitType={habit.title} 
      />
    </div>
  );
}
