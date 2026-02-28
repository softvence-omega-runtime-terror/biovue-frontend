"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Calendar, CheckCircle2, Save } from "lucide-react";
import { ClientDetails } from "../../overview/data";

interface CoachSetGoalsProps {
  goals: ClientDetails["coachSetGoals"];
  clientDetails: ClientDetails;
}
export default function CoachSetGoals({
  goals,
  clientDetails,
}: CoachSetGoalsProps) {
  return (
    <Card className="border-none ">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <CardContent className="p-6 bg-white rounded-lg md:col-span-2">
          <div className="flex justify-between items-start mb-4 md:mb-7">
            <div>
              <h2 className="text-xl mb-2 font-medium text-[#111827]">
                Coach-set Goals & Targets
              </h2>
              <p className="text-base text-[#666666]">
                Define benchmarks for the client's dashboard
              </p>
            </div>
            <button className="flex items-center gap-2 bg-[#0D9488] text-white p-4 cursor-pointer rounded-lg text-base font-medium hover:bg-[#0A7A6F] transition-colors">
              <Save size={16} />
              Save Goal
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="">
              <label className="text-lg font-medium text-[#374151]">
                Target weight (lbs)
              </label>
              <input
                type="text"
                defaultValue={goals.targetWeight}
                className="w-full mt-5 px-4 py-3 bg-white border border-[#E5E7EB] rounded-lg focus:ring-2 focus:ring-[#0D9488] focus:border-transparent outline-none transition-all placeholder:text-[#9AAEB2]"
                placeholder="190"
              />
            </div>

            <div className="">
              <label className="text-lg font-medium text-[#374151]">
                Weekly workout goal (sessions)
              </label>
              <input
                type="text"
                defaultValue={goals.weeklyWorkoutGoal}
                className="w-full mt-5 px-4 py-3 bg-white border border-[#E5E7EB] rounded-lg focus:ring-2 focus:ring-[#0D9488] focus:border-transparent outline-none transition-all placeholder:text-[#9AAEB2]"
                placeholder="4"
              />
            </div>

            <div className="">
              <label className="text-lg font-medium text-[#374151]">
                Daily step goal
              </label>
              <input
                type="text"
                defaultValue={`${goals.dailyStepGoal} Steps`}
                className="w-full mt-5 px-4 py-3 bg-white border border-[#E5E7EB] rounded-lg focus:ring-2 focus:ring-[#0D9488] focus:border-transparent outline-none transition-all placeholder:text-[#9AAEB2]"
                placeholder="800 Steps"
              />
            </div>

            <div className="">
              <label className="text-lg font-medium text-[#374151]">
                Sleep target (hours)
              </label>
              <input
                type="text"
                defaultValue={goals.sleepTargetHours}
                className="w-full mt-5 px-4 py-3 bg-white border border-[#E5E7EB] rounded-lg focus:ring-2 focus:ring-[#0D9488] focus:border-transparent outline-none transition-all placeholder:text-[#9AAEB2]"
                placeholder="8"
              />
            </div>
          </div>
        </CardContent>
        {/* side component */}
        <div className="space-y-6 md:col-span-1">
          <Card className="border-none  bg-[#0D9488] text-white overflow-hidden">
            <CardContent className="p-5 space-y-3">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-base font-medium tracking-wider uppercase opacity-80">
                  <Calendar size={24} />
                  NEXT CHECK-IN
                </div>
                <h3 className="text-2xl font-bold leading-tight">
                  {clientDetails.nextCheckIn.day},{" "}
                  {clientDetails.nextCheckIn.date}
                </h3>
                <p className="text-base font-medium opacity-80">
                  {clientDetails.nextCheckIn.time} (
                  {clientDetails.nextCheckIn.timezone})
                </p>
              </div>

              <button className="w-full bg-white text-[#0D9488] cursor-pointer p-4 rounded-lg text-sm font-bold hover:opacity-80 transition-all">
                Reschedule
              </button>
            </CardContent>
          </Card>

          <Card className="border border-[#0D9488]!  bg-[#9AAEB21A]">
            <CardContent className="p-5 space-y-4">
              <div className="flex items-center gap-2 text-base font-medium text-[#0D9488] tracking-wider uppercase">
                <CheckCircle2 size={24} />
                COMPLIANCE
              </div>
              <div className="space-y-1">
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-semibold text-[#0D9488]">
                    {clientDetails.compliance.score}%
                  </span>
                  <span className="text-sm text-[#0D9488] font-medium">
                    avg
                  </span>
                </div>
                <p className="text-base text-[#0D9488] leading-relaxed font-medium">
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
