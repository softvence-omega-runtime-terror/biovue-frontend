"use client";

import Image from "next/image";
import { Globe, Clock } from "lucide-react";
import SettingsSection from "./SettingsSection";

export default function ProfilePreferences() {
  return (
    <SettingsSection
      title="Profile & Preferences"
      action={
        <button className="text-[#8746E7] font-bold text-sm hover:opacity-80 transition-opacity cursor-pointer">
          Save Changes
        </button>
      }
    >
      <div className="flex flex-col gap-8 p-3 md:p-6">
        {/* Trainer Details */}
        <div className="flex items-center gap-4">
          <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#F1F5F9]">
            <Image
              src="/images/avatar-trainer.png" // Fallback to a placeholder if not exists
              alt="Coach Sarah Miller"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-widest font-bold text-[#94A3B8]">Trainer Details</p>
            <h4 className="text-[17px] font-bold text-[#1E293B]">Coach Sarah Miller</h4>
            <p className="text-[13px] text-[#94A3B8] font-medium">sarah.miller@biovue.fit</p>
          </div>
        </div>

        {/* Form Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <label className="text-xs font-bold text-[#94A3B8] uppercase tracking-wide">Time Zone</label>
            <div className="relative group">
              <div className="w-full bg-[#F0FDFD] border border-[#CCFBF1] text-[#0D9488] px-5 py-4 rounded-xl text-sm font-medium flex items-center justify-between pointer-events-none group-hover:border-[#0D9488]/50 transition-all">
                <span className="truncate">Pacific Time (PT) - Los Angeles</span>
                <Globe size={20} className="text-[#1E293B]" />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-[#94A3B8] uppercase tracking-wide">Time Zone</label>
            <div className="relative group">
              <div className="w-full bg-[#F0FDFD] border border-[#CCFBF1] text-[#0D9488] px-5 py-4 rounded-xl text-sm font-medium flex items-center justify-between pointer-events-none group-hover:border-[#0D9488]/50 transition-all">
                <span>8:00 AM</span>
                <Clock size={20} className="text-[#1E293B]" />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-[#94A3B8] uppercase tracking-wide">Time Zone</label>
            <div className="relative group">
              <div className="w-full bg-[#F0FDFD] border border-[#CCFBF1] text-[#0D9488] px-5 py-4 rounded-xl text-sm font-medium flex items-center justify-between pointer-events-none group-hover:border-[#0D9488]/50 transition-all">
                <span>6:00 PM</span>
                <Clock size={20} className="text-[#1E293B]" />
              </div>
            </div>
          </div>
        </div>

        <p className="text-[#8746E7] italic text-[13px] font-medium">
          These settings affect scheduling, reminders, and client communications.
        </p>
      </div>
    </SettingsSection>
  );
}
