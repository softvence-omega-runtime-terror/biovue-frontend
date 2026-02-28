"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Calendar, CheckCircle2, Save } from "lucide-react";
import { ClientDetails } from "../../overview/data";

// interface CoachSetGoalsProps {
//   goals: {
//     targetWeight: number;
//     weeklyWorkoutGoal: number;
//     dailyStepGoal: number;
//     sleepTargetHours: number;
//   };
// }
interface CoachSetGoalsProps {
  goals: ClientDetails["coachSetGoals"];
  clientDetails: ClientDetails;
}
export default function CoachSetGoals({
  goals,
  clientDetails,
}: CoachSetGoalsProps) {
  return (
    <Card className="border-none shadow-xs  ">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <CardContent className="p-6 bg-white md:col-span-2">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-lg font-bold text-[#111827]">
                Coach-set Goals & Targets
              </h2>
              <p className="text-xs text-[#6B7280]">
                Define benchmarks for the client's dashboard
              </p>
            </div>
            <button className="flex items-center gap-2 bg-[#0D9488] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#0A7A6F] transition-colors">
              <Save size={16} />
              Save Goal
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-[#374151]">
                Target weight (lbs)
              </label>
              <input
                type="text"
                defaultValue={goals.targetWeight}
                className="w-full px-4 py-3 bg-white border border-[#E5E7EB] rounded-lg focus:ring-2 focus:ring-[#0D9488] focus:border-transparent outline-none transition-all placeholder:text-[#9CA3AF]"
                placeholder="190"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-[#374151]">
                Weekly workout goal (sessions)
              </label>
              <input
                type="text"
                defaultValue={goals.weeklyWorkoutGoal}
                className="w-full px-4 py-3 bg-white border border-[#E5E7EB] rounded-lg focus:ring-2 focus:ring-[#0D9488] focus:border-transparent outline-none transition-all placeholder:text-[#9CA3AF]"
                placeholder="4"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-[#374151]">
                Daily step goal
              </label>
              <input
                type="text"
                defaultValue={`${goals.dailyStepGoal} Steps`}
                className="w-full px-4 py-3 bg-white border border-[#E5E7EB] rounded-lg focus:ring-2 focus:ring-[#0D9488] focus:border-transparent outline-none transition-all placeholder:text-[#9CA3AF]"
                placeholder="800 Steps"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-[#374151]">
                Sleep target (hours)
              </label>
              <input
                type="text"
                defaultValue={goals.sleepTargetHours}
                className="w-full px-4 py-3 bg-white border border-[#E5E7EB] rounded-lg focus:ring-2 focus:ring-[#0D9488] focus:border-transparent outline-none transition-all placeholder:text-[#9CA3AF]"
                placeholder="8"
              />
            </div>
          </div>
        </CardContent>
        {/* side component */}
        <div className="space-y-6 md:col-span-1" >
          <Card className="border-none shadow-xs bg-[#0D9488] text-white overflow-hidden">
            <CardContent className="p-6 space-y-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-[10px] font-bold tracking-wider uppercase opacity-80">
                  <Calendar size={14} />
                  NEXT CHECK-IN
                </div>
                <h3 className="text-xl font-bold leading-tight">
                  {clientDetails.nextCheckIn.day},{" "}
                  {clientDetails.nextCheckIn.date}
                </h3>
                <p className="text-xs font-medium opacity-80">
                  {clientDetails.nextCheckIn.time} (
                  {clientDetails.nextCheckIn.timezone})
                </p>
              </div>

              <button className="w-full bg-white text-[#0D9488] py-2.5 rounded-lg text-sm font-bold hover:bg-opacity-90 transition-all">
                Reschedule
              </button>
            </CardContent>
          </Card>

          <Card className="border-none shadow-xs bg-[#F0F9FF]">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center gap-2 text-[10px] font-bold text-[#0369A1] tracking-wider uppercase">
                <CheckCircle2 size={14} />
                COMPLIANCE
              </div>
              <div className="space-y-1">
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-bold text-[#111827]">
                    {clientDetails.compliance.score}%
                  </span>
                  <span className="text-xs text-[#6B7280] font-medium">
                    avg
                  </span>
                </div>
                <p className="text-xs text-[#0369A1] leading-relaxed font-medium">
                  {clientDetails.compliance.description}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Card>
  );
}
