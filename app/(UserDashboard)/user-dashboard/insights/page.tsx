"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Info, 
  X, 
  Zap, 
  HeartPulse, 
  Dumbbell, 
  Moon, 
  Scale, 
  RefreshCcw,
  CheckCircle2,
  Calendar,
  ArrowRight
} from "lucide-react";
import { cn } from "@/lib/utils";

// --- Mock Data ---

const FIVE_YEAR_PROJECTIONS = [
  {
    icon: <Zap size={20} className="text-[#1F2D2E]" />,
    iconBg: "bg-[#FDE68A]/30",
    title: "Metabolic Efficiency Decline",
    impact: "HIGH IMPACT",
    impactBg: "bg-pink-100",
    impactText: "text-pink-500",
    bullets: [
      "Slower calorie utilization efficiency",
      "Increased fat storage tendency",
      "Reduced daily energy stability",
      "Lower metabolic adaptability"
    ]
  },
  {
    icon: <HeartPulse size={20} className="text-[#1F2D2E]" />,
    iconBg: "bg-[#FDE68A]/30",
    title: "Cardiovascular Endurance Reduction",
    impact: "HIGH IMPACT",
    impactBg: "bg-pink-100",
    impactText: "text-pink-500",
    bullets: [
      "Reduced aerobic capacity over time",
      "Faster fatigue during physical activity",
      "Lower stamina for daily movement",
      "Slower recovery after exertion"
    ]
  },
  {
    icon: <Dumbbell size={20} className="text-[#1F2D2E]" />,
    iconBg: "bg-[#FDE68A]/30",
    title: "Muscle Strength & Mobility Decline",
    impact: "HIGH IMPACT",
    impactBg: "bg-pink-100",
    impactText: "text-pink-500",
    bullets: [
      "Gradual loss of lean muscle tone",
      "Reduced joint flexibility",
      "Increased stiffness during movement",
      "Lower functional strength consistency"
    ]
  },
  {
    icon: <Moon size={20} className="text-[#1F2D2E]" />,
    iconBg: "bg-green-100",
    title: "Sleep & Recovery Quality Risk",
    impact: "MODERATE IMPACT",
    impactBg: "bg-green-100",
    impactText: "text-green-500",
    bullets: [
      "Irregular sleep cycle consistency",
      "Reduced deep recovery quality",
      "Increased daytime fatigue",
      "Slower physical regeneration"
    ]
  },
  {
    icon: <Moon size={20} className="text-[#1F2D2E]" />,
    iconBg: "bg-green-100",
    title: "Mental Focus & Resilience Outlook",
    impact: "MODERATE IMPACT",
    impactBg: "bg-green-100",
    impactText: "text-green-500",
    bullets: [
      "Reduced stress tolerance",
      "Lower motivation consistency",
      "Mental fatigue during high workload periods",
      "Reduced focus sustainability"
    ]
  },
  {
    icon: <Scale size={20} className="text-[#1F2D2E]" />,
    iconBg: "bg-[#FDE68A]/30",
    title: "Body Composition Drift",
    impact: "HIGH IMPACT",
    impactBg: "bg-pink-100",
    impactText: "text-pink-500",
    bullets: [
      "Increased fat-to-muscle ratio",
      "Reduced lean mass retention",
      "Slower physical performance gains",
      "Lower long-term fitness efficiency"
    ]
  },
  {
    icon: <RefreshCcw size={20} className="text-[#1F2D2E]" />,
    iconBg: "bg-green-100",
    title: "Lifestyle Sustainability Risk",
    impact: "MODERATE IMPACT",
    impactBg: "bg-green-100",
    impactText: "text-green-500",
    bullets: [
      "Difficulty maintaining routines long-term",
      "Increased habit inconsistency",
      "Reduced goal adherence over time",
      "Higher likelihood of wellness regression"
    ]
  }
];

const CURRENT_PROJECTIONS = [
  {
    priority: "HIGH PRIORITY",
    category: "NUTRITION",
    priorityBg: "bg-pink-100 text-pink-500",
    categoryBg: "bg-[#E6F6F6] text-[#0FA4A9]",
    title: "Improve Diet Quality",
    why: "low micronutrient variety can reduce energy levels and slow recovery, especially during rest",
    impact: "better energy levels, improved body composition, and enhanced recovery.",
    steps: [
      "Increase vegetable intake to 5+ servings daily",
      "Choose whole grains over refined carbohydrates",
      "Include lean protein with each meal",
      "Reduce processed food consumption by 20%",
      "Focus on high-fiber snacks between main meals"
    ],
    trainerNote: "\"I Noticed Your Caloric Intake Spikes On Weekends While Protein Drops. Try Prepping 3 High-Protein Snack Packs On Friday Nights To Keep Your Metabolic Rate Stable.\"",
    buttonText: "Go Nutrition Habit"
  },
  {
    priority: "HIGH PRIORITY",
    category: "SLEEP",
    priorityBg: "bg-pink-100 text-pink-500",
    categoryBg: "bg-[#E6F6F6] text-[#0FA4A9]",
    title: "Optimize Sleep Duration",
    why: "biometric data shows a consistent deficit in deep sleep cycles. increasing total duration is the most direct path to restoring hormonal balance and cognitive sharpness.",
    impact: "faster physical recovery, significantly better mental clarity, and improved mood stability.",
    steps: [
      "Maintain a consistent sleep/wake schedule within 30 minutes",
      "Dim lights 1 hour before scheduled sleep time",
      "Maintain bedroom temperature between 65-68°F",
      "Avoid blue light (phones/TV) 45 minutes before bed",
      "Implement a 5-minute progressive muscle relaxation routine"
    ],
    trainerNote: "\"Your HRV (Heart Rate Variability) Is Consistently Lower On Tuesday Mornings. This Correlates With Your Monday Night Late-Night Emails. Try A 'digital Sunset' At 9 PM On Mondays Specifically.\"",
    buttonText: "Open Sleep Habit"
  },
  {
    priority: "MEDIUM PRIORITY",
    category: "EXERCISE",
    priorityBg: "bg-pink-100 text-pink-500",
    categoryBg: "bg-[#E6F6F6] text-[#0FA4A9]",
    title: "Consistent Low-Intensity Cardio",
    why: "maintaining a steady aerobic base helps with cardiovascular efficiency without putting excessive stress on your central nervous system.",
    impact: "lower resting heart rate and increased endurance for daily activities.",
    steps: [
      "Aim for 30 minutes of Zone 2 activity (brisk walking)",
      "Use stairs instead of elevators when possible",
      "Take a short walk after your largest meal",
      "Monitor your heart rate to stay in the recovery zone"
    ],
    trainerNote: "\"Don't Overthink This. Even A 20-Minute Brisk Walk To The Coffee Shop Counts. Keep It Effortless So You Actually Do It.\"",
    buttonText: "Go To Activity Habit"
  }
];

export default function InsightsPage() {
  const [activeTab, setActiveTab] = useState<"5-year" | "current">("5-year");
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-[calc(100vh-80px)] p-6 md:p-8 container mx-auto w-full">
      {/* Top Navigation */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-1 bg-[#E6F6F6] p-1 rounded-lg border border-[#BDE8E8]">
          <button
            onClick={() => setActiveTab("5-year")}
            className={cn(
              "px-4 py-2 text-sm font-semibold rounded-md transition-all cursor-pointer",
              activeTab === "5-year"
                ? "bg-[#0FA4A9] text-white shadow-sm"
                : "text-[#5F6F73] hover:text-[#1F2D2E]"
            )}
          >
            5 - Year Projection
          </button>
          <button
            onClick={() => setActiveTab("current")}
            className={cn(
              "px-4 py-2 text-sm font-semibold rounded-md transition-all cursor-pointer",
              activeTab === "current"
                ? "bg-[#0FA4A9] text-white shadow-sm"
                : "text-[#5F6F73] hover:text-[#1F2D2E]"
            )}
          >
            Current Projection
          </button>
        </div>
        
        <button 
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-1.5 text-xs font-semibold hover:underline text-[#5F6F73] hover:text-[#1F2D2E] transition-colors cursor-pointer"
        >
          View Remain Projection Limits
          <Info size={16} />
        </button>
      </div>

      <AnimatePresence mode="wait">
        {activeTab === "5-year" ? (
          <motion.div
            key="5-year"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col"
          >
            <div className="text-center mb-10">
              <h1 className="text-2xl md:text-3xl font-bold text-[#0FA4A9] mb-3">
                Future Wellness Outlook(5-Year Projection)
              </h1>
              <p className="text-[#5F6F73] max-w-2xl mx-auto">
                Based on your current habits and lifestyle patterns if no changes are made over the next 5 years.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {FIVE_YEAR_PROJECTIONS.map((proj, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-[0_2px_12px_rgba(0,0,0,0.02)] flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center", proj.iconBg)}>
                       {proj.icon}
                    </div>
                    <span className={cn("px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider border", proj.impactBg, proj.impactText, proj.impactBg.replace('bg-', 'border-').replace('100', '200'))}>
                      {proj.impact}
                    </span>
                  </div>
                  
                  <div className="flex flex-col mt-2">
                    <h3 className="text-[#1F2D2E] font-medium text-[15px]">{proj.title}</h3>
                    <p className="text-[#5F6F73] text-[10px] uppercase font-bold tracking-wider mt-1">
                      PROJECTED OVER 5 YEARS
                    </p>
                  </div>

                  <ul className="flex flex-col gap-2.5 mt-2">
                    {proj.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-3">
                        <div className="mt-0.5 relative shrink-0">
                          <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center text-[#3A86FF]">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                          </div>
                        </div>
                        <span className="text-[#5F6F73] text-[13px]">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="current"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col gap-6"
          >
            {CURRENT_PROJECTIONS.map((proj, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-[0_2px_12px_rgba(0,0,0,0.02)] flex flex-col gap-6">
                
                {/* Header */}
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 mb-1">
                    <span className={cn("px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider border", proj.priorityBg, proj.priorityBg.split(' ')[0].replace('bg-', 'border-').replace('100', '200'))}>
                      {proj.priority}
                    </span>
                    <span className={cn("px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider border", proj.categoryBg, proj.categoryBg.split(' ')[0].replace('bg-', 'border-').replace('100', '200'))}>
                      {proj.category}
                    </span>
                  </div>
                  <h2 className="text-[22px] font-bold text-[#3A86FF]">{proj.title}</h2>
                  
                  <div className="flex flex-col mt-2">
                    <div className="flex items-center gap-1.5 text-[#5F6F73] font-bold text-xs uppercase tracking-wider mb-2">
                      <Info size={14} /> WHY THIS MATTERS
                    </div>
                    <p className="text-[#5F6F73] italic text-sm">
                      {proj.why}
                    </p>
                  </div>
                </div>

                {/* Expected Impact Box */}
                <div className="bg-[#F8FBFF] rounded-xl p-5 border border-blue-50">
                  <h4 className="text-[#1F2D2E] font-bold text-sm mb-1.5">Expected Impact</h4>
                  <p className="text-[#3A86FF] text-sm">{proj.impact}</p>
                </div>

                {/* Body: Action list & Trainer note */}
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mt-2">
                  <div className="flex-1 flex flex-col gap-4">
                    <h4 className="text-[#1F2D2E] font-bold text-sm">Action Steps</h4>
                    <ul className="flex flex-col gap-3">
                      {proj.steps.map((step, sIdx) => (
                        <li key={sIdx} className="flex items-start gap-3">
                          <div className="mt-0.5 shrink-0">
                            <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center text-[#3A86FF]">
                              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="20 6 9 17 4 12"></polyline>
                              </svg>
                            </div>
                          </div>
                          <span className="text-[#5F6F73] text-[13px]">{step}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {/* Footer Button - Only on left side in image */}
                    <div className="mt-2">
                      <button className="bg-[#0FA4A9] text-white px-5 py-2.5 rounded-lg font-medium hover:bg-opacity-90 transition-all text-[13px] flex items-center gap-2 group w-fit cursor-pointer">
                        {proj.buttonText}
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>

                  <div className="lg:w-[320px] shrink-0 bg-[#FFF5EB] rounded-2xl p-6 border border-orange-100/50 flex flex-col gap-4 h-fit">
                    <div className="flex items-center gap-2 text-orange-500 font-bold text-[10px] uppercase tracking-wider">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m5 16 1.5-1.5"></path>
                        <path d="m19 8-1.5 1.5"></path>
                        <path d="m4 8 2.5 2.5"></path>
                        <path d="m20 16-2.5-2.5"></path>
                        <circle cx="12" cy="12" r="4"></circle>
                      </svg>
                      TRAINER'S NOTE
                    </div>
                    <p className="text-[#1F2D2E] text-xs font-medium leading-relaxed">
                      {proj.trainerNote}
                    </p>
                  </div>
                </div>

              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Projection Usage Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm"
            />
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 10 }}
                className="bg-white rounded-[24px] p-6 shadow-2xl w-full max-w-[360px] pointer-events-auto relative pt-8"
              >
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="absolute p-0.5 top-4 right-4 text-gray-500 hover:text-gray-800 border border-gray-300 rounded-full cursor-pointer transition-colors"
                >
                  <X size={14} />
                </button>
                
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-1">
                    <h3 className="text-[#A855F7] text-[17px] font-semibold">Projection Usage</h3>
                    <p className="text-[#5F6F73] text-[13px]">Track how many AI projections you've used this cycle</p>
                  </div>
                  
                  {/* Progress Line */}
                  <div className="relative w-full h-2.5 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div 
                      className="absolute top-0 left-0 h-full bg-[#0FA4A9] rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-[13px] text-[#1F2D2E]">
                      You've used 2 of 2 projections
                    </div>
                    <div className="bg-gray-100 text-[#1F2D2E] px-2.5 py-1.5 rounded-md text-[11px] font-semibold flex items-center gap-1.5">
                      <Calendar size={12} />
                      Resets in 8 days
                    </div>
                  </div>

                  <div className="text-[#0FA4A9] font-medium text-[13px]">
                    Last projection: 12 days ago
                  </div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
