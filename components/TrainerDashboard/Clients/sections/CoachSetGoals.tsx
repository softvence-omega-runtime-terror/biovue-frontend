"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Save } from "lucide-react";

interface CoachSetGoalsProps {
  goals: {
    targetWeight: number;
    weeklyWorkoutGoal: number;
    dailyStepGoal: number;
    sleepTargetHours: number;
  };
}

export default function CoachSetGoals({ goals }: CoachSetGoalsProps) {
  return (
    <Card className="border-none shadow-xs bg-white">
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="text-lg font-bold text-[#111827]">Coach-set Goals & Targets</h2>
            <p className="text-xs text-[#6B7280]">Define benchmarks for the client's dashboard</p>
          </div>
          <button className="flex items-center gap-2 bg-[#0D9488] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#0A7A6F] transition-colors">
            <Save size={16} />
            Save Goal
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-[#374151]">Target weight (lbs)</label>
            <input 
              type="text" 
              defaultValue={goals.targetWeight}
              className="w-full px-4 py-3 bg-white border border-[#E5E7EB] rounded-lg focus:ring-2 focus:ring-[#0D9488] focus:border-transparent outline-none transition-all placeholder:text-[#9CA3AF]"
              placeholder="190"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-[#374151]">Weekly workout goal (sessions)</label>
            <input 
              type="text" 
              defaultValue={goals.weeklyWorkoutGoal}
              className="w-full px-4 py-3 bg-white border border-[#E5E7EB] rounded-lg focus:ring-2 focus:ring-[#0D9488] focus:border-transparent outline-none transition-all placeholder:text-[#9CA3AF]"
              placeholder="4"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-[#374151]">Daily step goal</label>
            <input 
              type="text" 
              defaultValue={`${goals.dailyStepGoal} Steps`}
              className="w-full px-4 py-3 bg-white border border-[#E5E7EB] rounded-lg focus:ring-2 focus:ring-[#0D9488] focus:border-transparent outline-none transition-all placeholder:text-[#9CA3AF]"
              placeholder="800 Steps"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-[#374151]">Sleep target (hours)</label>
            <input 
              type="text" 
              defaultValue={goals.sleepTargetHours}
              className="w-full px-4 py-3 bg-white border border-[#E5E7EB] rounded-lg focus:ring-2 focus:ring-[#0D9488] focus:border-transparent outline-none transition-all placeholder:text-[#9CA3AF]"
              placeholder="8"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
