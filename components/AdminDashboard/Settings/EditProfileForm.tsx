"use client";

import Image from "next/image";
import { User, Mail, Lock, Camera } from "lucide-react";

export default function EditProfileForm() {
  return (
    <div className="bg-white rounded-3xl shadow-sm border border-[#F1F5F9] p-8 md:p-12 mb-8">
      <h3 className="text-lg md:text-2xl font-bold text-[#1E293B] mb-10">
        Edit Profile
      </h3>

      <div className="flex flex-col items-center mb-12">
        <div className="relative group">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-md">
            <Image
              src="/images/avatar.png" // Using the provided avatar image
              alt="Admin Profile"
              width={128}
              height={128}
              className="object-cover w-full h-full"
            />
          </div>
          <button className="absolute bottom-1 right-1 bg-[#4F46E5] text-white p-2 rounded-full border-4 border-white shadow-sm hover:scale-105 transition-transform cursor-pointer">
            <Camera size={18} />
          </button>
        </div>
        <button className="mt-4 text-[#4F46E5] font-bold text-sm hover:underline cursor-pointer">
          Upload New Image
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        <div className="space-y-2">
          <label className="text-sm font-bold text-[#374151] uppercase tracking-wide">
            Full Name
          </label>
          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#94A3B8]">
              <User size={18} />
            </div>
            <input
              type="text"
              placeholder="John Anderson"
              className="w-full bg-slate-50 border border-slate-200 text-[#1E293B] pl-12 pr-4 py-4 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500/50 transition-all"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-bold text-[#374151] uppercase tracking-wide">
            Email Address
          </label>
          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#94A3B8]">
              <Mail size={18} />
            </div>
            <input
              type="email"
              placeholder="john.anderson@example.com"
              className="w-full bg-slate-50 border border-slate-200 text-[#1E293B] pl-12 pr-4 py-4 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500/50 transition-all"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-bold text-[#374151] uppercase tracking-wide">
            New Password
          </label>
          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#94A3B8]">
              <Lock size={18} />
            </div>
            <input
              type="password"
              placeholder="Enter new password"
              className="w-full bg-slate-50 border border-slate-200 text-[#1E293B] pl-12 pr-4 py-4 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500/50 transition-all"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-bold text-[#374151] uppercase tracking-wide">
            Confirm Password
          </label>
          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#94A3B8]">
              <Lock size={18} />
            </div>
            <input
              type="password"
              placeholder="Confirm new password"
              className="w-full bg-slate-50 border border-slate-200 text-[#1E293B] pl-12 pr-4 py-4 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500/50 transition-all"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-end gap-4 pt-4">
        <button className="px-8 py-3.5 rounded-xl border border-slate-200 text-[#1E293B] font-bold text-sm hover:bg-slate-50 transition-colors cursor-pointer">
          Cancel
        </button>
        <button className="px-8 py-3.5 rounded-xl bg-linear-to-r from-[#6366F1] to-[#4F46E5] hover:opacity-80 text-white font-bold text-sm hover:bg-blue-700 transition-all shadow-md active:scale-95 cursor-pointer">
          Save Changes
        </button>
      </div>
    </div>
  );
}
