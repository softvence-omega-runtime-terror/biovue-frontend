"use client";

import Image from "next/image";
import { X, Target, Dumbbell, Footprints, Moon, Droplets, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { User } from "@/redux/features/api/SupplierDashboard/AllUsers";

interface TargetGoalsModalProps {
  isOpen: boolean;
  onClose: () => void;
  user: User | null;
}

const getSafeImageSrc = (src: string | null | undefined) => {
  if (!src) return null;
  if (src.startsWith("/") || src.startsWith("http://") || src.startsWith("https://")) {
    try {
      if (src.startsWith("http")) {
        new URL(src);
      }
      return src;
    } catch (e) {
      return null;
    }
  }
  return null;
};

export default function TargetGoalsModal({
  isOpen,
  onClose,
  user,
}: TargetGoalsModalProps) {
  if (!isOpen || !user) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      <div className="w-full max-w-2xl bg-white rounded-[40px] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
        {/* Header */}
        <div className="relative p-8 bg-linear-to-br from-[#3A86FF] to-[#2563EB] text-white">
          <button
            onClick={onClose}
            className="absolute right-6 top-6 text-white/80 hover:text-white transition-colors cursor-pointer"
          >
            <X size={24} />
          </button>

          <div className="flex items-center gap-6">
            <div className="relative w-24 h-24 rounded-3xl border-4 border-white/20 overflow-hidden bg-white/10 flex items-center justify-center">
              {getSafeImageSrc(user.profile_image) ? (
                <Image
                  src={getSafeImageSrc(user.profile_image)!}
                  alt={user.name}
                  fill
                  className="object-cover"
                />
              ) : (
                <span className="text-3xl font-bold">
                  {user.name.charAt(0)}
                </span>
              )}
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-1 tracking-tight">
                {user.name}
              </h2>
              <p className="text-white/80 font-medium">
                Target Goals & Benchmarks
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          {user.target_goals && user.target_goals.length > 0 ? (
            <div className="space-y-6 max-h-120 overflow-y-auto pr-2 custom-scrollbar">
              {[...user.target_goals].reverse().map((goal, index) => (
                <div
                  key={goal.id}
                  className="p-6 bg-[#F8FBFA] rounded-3xl border border-[#D9E6FF] space-y-6"
                >
                  <div className="flex items-center justify-between border-b border-[#D9E6FF] pb-4">
                    <div className="flex items-center gap-2 text-[#3A86FF]">
                      <Calendar size={18} />
                      <span className="font-bold text-sm uppercase tracking-wider">
                        Goal Period {user.target_goals.length - index}
                      </span>
                    </div>
                    <span className="text-xs font-bold text-[#94A3B8]">
                      {new Date(goal.start_date).toLocaleDateString()} - {new Date(goal.end_date).toLocaleDateString()}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-[#94A3B8] mb-1">
                        <Target size={14} />
                        <span className="text-[10px] font-black uppercase tracking-widest">Target Weight</span>
                      </div>
                      <p className="text-xl font-bold text-[#041228]">{goal.target_weight}</p>
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-[#94A3B8] mb-1">
                        <Dumbbell size={14} />
                        <span className="text-[10px] font-black uppercase tracking-widest">Weekly Workouts</span>
                      </div>
                      <p className="text-xl font-bold text-[#041228]">{goal.weekly_workout_goal} sessions</p>
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-[#94A3B8] mb-1">
                        <Footprints size={14} />
                        <span className="text-[10px] font-black uppercase tracking-widest">Daily Steps</span>
                      </div>
                      <p className="text-xl font-bold text-[#041228]">{goal.daily_step_goal.toLocaleString()}</p>
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-[#94A3B8] mb-1">
                        <Moon size={14} />
                        <span className="text-[10px] font-black uppercase tracking-widest">Sleep Target</span>
                      </div>
                      <p className="text-xl font-bold text-[#041228]">{goal.sleep_target}</p>
                    </div>

                    {goal.water_target && (
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-[#94A3B8] mb-1">
                          <Droplets size={14} />
                          <span className="text-[10px] font-black uppercase tracking-widest">Water Target</span>
                        </div>
                        <p className="text-xl font-bold text-[#10B981]">{goal.water_target} ml</p>
                      </div>
                    )}
                  </div>

                  {goal.supplement_recommendation && (
                    <div className="pt-4 border-t border-[#D9E6FF]">
                       <div className="flex items-center gap-2 text-[#94A3B8] mb-2">
                        <span className="text-[10px] font-black uppercase tracking-widest">Supplement Notes</span>
                      </div>
                      <p className="text-sm text-[#5F6F73] bg-white p-4 rounded-2xl border border-[#D9E6FF]">
                        {goal.supplement_recommendation}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="py-20 text-center space-y-4">
              <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto border border-gray-100">
                <Target size={40} className="text-gray-200" />
              </div>
              <p className="text-gray-400 font-medium">No target goals set for this user yet.</p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-8 pt-0 flex justify-end">
          <Button
            onClick={onClose}
            className="bg-[#3A86FF] hover:bg-[#2563EB] text-white rounded-xl px-10 h-11 font-bold transition-all cursor-pointer shadow-lg shadow-[#3A86FF]/20"
          >
            Close
          </Button>
        </div>
      </div>
    </div>
  );
}
