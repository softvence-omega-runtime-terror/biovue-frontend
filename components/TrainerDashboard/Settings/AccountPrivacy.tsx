"use client";

import { Shield, User, LogOut, CheckCircle2 } from "lucide-react";

export default function AccountPrivacy() {
  return (
    <div className="flex flex-col md:flex-row gap-6 mb-12">
      {/* Privacy & Data */}
      <div className="bg-white w-full md:w-1/3 rounded-3xl border border-[#F1F5F9] shadow-sm p-8 flex flex-col h-full">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 rounded-2xl bg-[#F3E8FF] flex items-center justify-center text-[#8B5CF6]">
            <Shield size={24} />
          </div>
          <h3 className="text-[18px] font-bold text-[#1E293B]">Privacy & Data</h3>
        </div>

        <div className="space-y-5 flex-1">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-full bg-[#EAFAF1] flex items-center justify-center text-[#22C55E]">
              <CheckCircle2 size={16} />
            </div>
            <span className="text-[14px] font-medium text-[#475569]">Client data is private and encrypted</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-full bg-[#EAFAF1] flex items-center justify-center text-[#22C55E]">
              <CheckCircle2 size={16} />
            </div>
            <span className="text-[14px] font-medium text-[#475569]">Wellness-only (non-medical) usage</span>
          </div>
        </div>
      </div>

      {/* Account Management */}
      <div className="bg-white w-full md:w-2/3 rounded-3xl border border-[#F1F5F9] shadow-sm p-8 flex flex-col h-full">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 rounded-2xl bg-[#E0F2F1] flex items-center justify-center text-[#0D9488]">
            <User size={24} />
          </div>
          <h3 className="text-[18px] font-bold text-[#1E293B]">Account Management</h3>
        </div>

        <div className="flex items-start gap-3 mb-8">
          <div className="mt-0.5 w-6 h-6 rounded-full bg-[#EAFAF1] flex items-center justify-center text-[#22C55E] flex-shrink-0">
            <CheckCircle2 size={16} />
          </div>
          <p className="text-[13px] font-medium text-[#475569] leading-relaxed">
            Deactivating your account will remove client access and pause all programs. 
            This action is not reversible without admin support.
          </p>
        </div>

        <div className="flex items-center gap-4 mt-auto">
          <button className="flex-1 bg-[#0D9488] text-white font-bold py-4 px-6 rounded-2xl flex items-center justify-center gap-2 hover:opacity-90 transition-opacity cursor-pointer">
            <LogOut size={20} />
            Sign Out
          </button>
          <button className="flex-1 bg-[#F1F5F9] text-[#1E293B] font-bold py-4 px-6 rounded-2xl hover:bg-gray-100 transition-colors cursor-pointer">
            Deactivate Account
          </button>
        </div>
      </div>
    </div>
  );
}
