"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Calendar, CheckCircle2, Loader2, Save } from "lucide-react";
import { ClientDetails } from "../../overview/data";
import { useEffect, useState } from "react";
import {
  useCreateTargetGoalMutation,
  useGetTargetGoalQuery,
} from "@/redux/features/api/TrainerDashboard/Clients/TargetGoal/PostTargetGoal";
import { toast } from "sonner";

interface CoachSetGoalsProps {
  goals: ClientDetails["coachSetGoals"];
  clientDetails: ClientDetails;
}

export default function CoachSetGoals({
  goals,
  clientDetails,
}: CoachSetGoalsProps) {
  const [targetWeight, setTargetWeight] = useState<string>(
    goals?.targetWeight?.toString() ?? "",
  );
  const [weeklyWorkoutGoal, setWeeklyWorkoutGoal] = useState<string>(
    goals?.weeklyWorkoutGoal?.toString() ?? "",
  );
  const [dailyStepGoal, setDailyStepGoal] = useState<string>(
    goals?.dailyStepGoal?.toString() ?? "",
  );
  const [sleepTarget, setSleepTarget] = useState<string>(
    goals?.sleepTargetHours?.toString() ?? "",
  );

  const [createTargetGoal, { isLoading }] = useCreateTargetGoalMutation();
  const { data: goalData, isLoading: goalLoading } = useGetTargetGoalQuery();

  useEffect(() => {
    if (goalData?.data) {
      setTargetWeight(goalData.data.target_weight?.toString() ?? "");
      setWeeklyWorkoutGoal(goalData.data.weekly_workout_goal?.toString() ?? "");
      setDailyStepGoal(goalData.data.daily_step_goal?.toString() ?? "");
      setSleepTarget(goalData.data.sleep_target?.toString() ?? "");
    }
  }, [goalData]);

  const handleSave = async () => {
    try {
      const now = new Date();
      const startDate = now.toISOString().split("T")[0];
      const endDate = new Date(now.setDate(now.getDate() + 30))
        .toISOString()
        .split("T")[0];

      const payload = {
        user_id: clientDetails.id,
        target_weight: parseFloat(targetWeight),
        weekly_workout_goal: parseInt(weeklyWorkoutGoal),
        daily_step_goal: parseInt(dailyStepGoal),
        sleep_target: parseFloat(sleepTarget),
        start_date: startDate,
        end_date: endDate,
      };

      const response = await createTargetGoal(payload).unwrap();

      if (response.success) {
        toast.success(response.message || "Goal saved successfully");
      } else {
        toast.error(response.message || "Failed to save goal");
      }
    } catch (error: any) {
      toast.error(error?.data?.message || "An error occurred while saving");
    }
  };

  if (goalLoading) {
    return (
      <div className="flex items-center justify-center h-50">
        <Loader2 className="animate-spin" />
      </div>
    );
  }
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
                Define benchmarks for the client&apos;s dashboard
              </p>
            </div>
            <button
              onClick={handleSave}
              disabled={isLoading}
              className="flex items-center gap-2 bg-[#0D9488] text-white p-4 cursor-pointer rounded-lg text-base font-medium hover:bg-[#0A7A6F] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <Loader2 size={16} className="animate-spin" />
              ) : (
                <Save size={16} />
              )}
              {isLoading ? "Saving..." : "Save Goal"}
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="">
              <label className="text-lg font-medium text-[#374151]">
                Target weight (lbs)
              </label>
              <input
                type="number"
                value={targetWeight}
                onChange={(e) => setTargetWeight(e.target.value)}
                className="w-full mt-5 px-4 py-3 bg-white border border-[#E5E7EB] rounded-lg focus:ring-2 focus:ring-[#0D9488] focus:border-transparent outline-none transition-all placeholder:text-[#9AAEB2]"
                placeholder="190"
              />
            </div>

            <div className="">
              <label className="text-lg font-medium text-[#374151]">
                Weekly workout goal (sessions)
              </label>
              <input
                type="number"
                value={weeklyWorkoutGoal}
                onChange={(e) => setWeeklyWorkoutGoal(e.target.value)}
                className="w-full mt-5 px-4 py-3 bg-white border border-[#E5E7EB] rounded-lg focus:ring-2 focus:ring-[#0D9488] focus:border-transparent outline-none transition-all placeholder:text-[#9AAEB2]"
                placeholder="4"
              />
            </div>

            <div className="">
              <label className="text-lg font-medium text-[#374151]">
                Daily step goal
              </label>
              <input
                type="number"
                value={dailyStepGoal}
                onChange={(e) => setDailyStepGoal(e.target.value)}
                className="w-full mt-5 px-4 py-3 bg-white border border-[#E5E7EB] rounded-lg focus:ring-2 focus:ring-[#0D9488] focus:border-transparent outline-none transition-all placeholder:text-[#9AAEB2]"
                placeholder="800"
              />
            </div>

            <div className="">
              <label className="text-lg font-medium text-[#374151]">
                Sleep target (hours)
              </label>
              <input
                type="number"
                value={sleepTarget}
                onChange={(e) => setSleepTarget(e.target.value)}
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
