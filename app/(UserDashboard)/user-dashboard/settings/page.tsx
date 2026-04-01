"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  ArrowLeft,
  User,
  CreditCard,
  Smartphone,
  Plus,
  Info,
  Bell,
  ShieldCheck,
  Download,
  Trash2,
  LogOut,
  Calendar,
  ChevronDown,
  Check,
  Crown,
} from "lucide-react";
import { cn } from "@/lib/utils";

// --- Types ---
type ViewState = "overview" | "profile" | "subscription";

// --- Main Page ---
const SettingsPage = () => {
  const [view, setView] = useState<ViewState>("overview");

  if (view === "profile")
    return <ProfileEditView onBack={() => setView("overview")} />;
  if (view === "subscription")
    return <SubscriptionView onBack={() => setView("overview")} />;

  return (
    <div className="flex flex-col gap-10 p-6 md:p-8 w-full min-h-screen pb-24">
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-bold text-[#1F2D2E]">Settings</h1>
        <p className="text-[#5F6F73] text-sm font-medium">
          Manage your account, data, and preferences
        </p>
      </div>

      {/* Account Section */}
      <section className="flex flex-col gap-6">
        <h2 className="text-xl font-bold text-[#1F2D2E]">Account</h2>
        <div className="bg-white rounded-[16px] border border-[#3A86FF]/25 shadow-sm overflow-hidden">
          {/* Profile Information */}
          <div className="p-6 flex items-center justify-between hover:bg-gray-50/50 transition-colors border-b border-gray-50">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#F8FAFB] flex items-center justify-center text-[#94A3B8]">
                <User size={20} />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-[#1F2D2E]">
                  Profile Information
                </span>
                <span className="text-[11px] text-[#5F6F73] font-medium">
                  Name, age, height, and health markers
                </span>
              </div>
            </div>
            <button
              onClick={() => setView("profile")}
              className="text-[#3A86FF] text-xs font-bold hover:underline cursor-pointer"
            >
              Edit
            </button>
          </div>

          {/* Subscription & Billing */}
          <div className="p-6 flex items-center justify-between hover:bg-gray-50/50 transition-colors">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#F8FAFB] flex items-center justify-center text-[#94A3B8]">
                <CreditCard size={20} />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-[#1F2D2E]">
                  Subscription & Billing
                </span>
                <span className="text-[11px] text-[#5F6F73] font-medium">
                  Premium Wellness Plan • Next billing Mar 15
                </span>
              </div>
            </div>
            <button
              onClick={() => setView("subscription")}
              className="text-[#3A86FF] text-xs font-bold hover:underline cursor-pointer"
            >
              Manage Plan
            </button>
          </div>
        </div>
      </section>

      {/* Data & Integrations */}
      <section className="flex flex-col gap-6">
        <div className="flex flex-col gap-1">
          <h2 className="text-xl font-bold text-[#1F2D2E]">
            Data & Integrations
          </h2>
        </div>

        <div className="flex flex-col gap-8">
          {/* Input Preference */}
          <div className="flex flex-col gap-4">
            <h3 className="text-[10px] font-bold text-[#5F6F73] uppercase tracking-widest">
              DATA INPUT PREFERENCE
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#EAFBF7] rounded-[16px] p-4 border-2 border-[#0FA4A9] flex items-center gap-3 cursor-pointer">
                <div className="w-5 h-5 rounded-full border-2 border-[#0FA4A9] flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#0FA4A9]" />
                </div>
                <span className="text-sm font-bold text-[#0FA4A9]">
                  Automatic
                </span>
              </div>
              <div className="bg-white rounded-[16px] p-4 border border-gray-100 flex items-center gap-3 cursor-pointer hover:bg-gray-100 transition-all">
                <div className="w-5 h-5 rounded-full border-2 border-gray-200" />
                <span className="text-sm font-bold text-[#5F6F73]">
                  Manual Entry
                </span>
              </div>
            </div>
          </div>

          {/* Connected Devices */}
          <div className="flex flex-col gap-4">
            <h3 className="text-[10px] font-bold text-[#5F6F73] uppercase tracking-widest">
              CONNECTED DEVICES
            </h3>
            <div className="flex flex-col gap-3">
              {/* Device Item */}
              <div className="bg-white rounded-[16px] p-6 border border-gray-50 shadow-[0_2px_12px_rgba(0,0,0,0.02)] flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#F8FAFB] flex items-center justify-center text-[#94A3B8]">
                    <Smartphone size={20} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-[#1F2D2E]">
                      Fitbit Charge 5
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] text-[#0FA4A9] font-bold flex items-center gap-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#0FA4A9]" />
                        Connected
                      </span>
                      <span className="text-[10px] text-[#94A3B8] font-medium">
                        • Synced 2m ago
                      </span>
                    </div>
                  </div>
                </div>
                <button className="text-[#94A3B8] text-xs font-bold hover:text-red-500 transition-colors">
                  Disconnect
                </button>
              </div>

              {/* Browse Devices */}
              {["Google Fit", "My FitnessPal", "Apple health"].map(
                (device, idx) => (
                  <div
                    key={idx}
                    className="bg-[#E4FBF7] rounded-[16px] p-6 border border-[#0FA4A9]/10 shadow-[0_2px_12px_rgba(0,0,0,0.02)] flex items-center justify-between"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[#94A3B8]">
                        <Smartphone size={20} />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-bold text-[#1F2D2E]">
                          {device}
                        </span>
                        <span className="text-[10px] text-[#0FA4A9] font-medium">
                          Connect your Android health metrics.
                        </span>
                      </div>
                    </div>
                    <button className="text-[#0FA4A9] text-xs font-bold hover:underline">
                      Connect
                    </button>
                  </div>
                ),
              )}

              {/* Connect New */}
              <button className="w-full py-6 border-2 border-dashed border-gray-100 rounded-[16px] flex items-center justify-center gap-2 text-[#94A3B8] hover:bg-gray-50/50 transition-all group">
                <Plus
                  size={18}
                  className="group-hover:scale-110 transition-transform"
                />
                <span className="text-sm font-bold">Connect new device</span>
              </button>
            </div>
          </div>

          {/* Data Note */}
          <div className="bg-[#F8FAFB] rounded-[12px] p-4 flex items-center gap-3">
            <Info size={16} className="text-[#94A3B8]" />
            <p className="text-[10px] text-[#94A3B8] font-medium italic">
              Automatically synced data will appear in your dashboard and habits
              to provide more accurate wellness insights.
            </p>
          </div>
        </div>
      </section>

      {/* Notifications Section */}
      <section className="flex flex-col gap-6">
        <h2 className="text-xl font-bold text-[#1F2D2E]">Notifications</h2>
        <div className="bg-white rounded-[16px] p-8 border border-[#3A86FF]/25 shadow-sm flex flex-col gap-8">
          {[
            {
              label: "Coach messages",
              sub: "Instant alerts when your coach writes to you",
              active: true,
            },
            {
              label: "Goal Updates",
              sub: "Alerts when a coach approves, edits, or comments on your goals.",
              active: true,
            },
            {
              label: "Check-in & Reminder Alerts",
              sub: "Reminders for scheduled check-ins, habits, or missed logs.",
              active: true,
            },
            {
              label: "AI Insights & Recommendations",
              sub: "Notifications when new AI-generated insights or suggestions are available.",
              active: false,
            },
            {
              label: "Subscription & Account Updates",
              sub: "Billing reminders, plan changes, and important account notices.",
              active: false,
            },
          ].map((item, idx) => (
            <div key={idx} className="flex items-center justify-between">
              <div className="flex flex-col gap-1">
                <span className="text-sm font-bold text-[#1F2D2E]">
                  {item.label}
                </span>
                <span className="text-[10px] text-[#5F6F73] font-medium leading-relaxed max-w-sm">
                  {item.sub}
                </span>
              </div>
              {/* Toggle */}
              <div
                className={cn(
                  "w-12 h-6 rounded-full p-1 cursor-pointer transition-all",
                  item.active ? "bg-[#0FA4A9]" : "bg-gray-200",
                )}
              >
                <div
                  className={cn(
                    "w-4 h-4 bg-white rounded-full transition-all",
                    item.active ? "ml-6" : "ml-0",
                  )}
                />
              </div>
            </div>
          ))}

          <div className="pt-4 border-t border-gray-50">
            <p className="text-[11px] text-[#94A3B8] font-medium italic">
              Choose what you want to be notified about. You can change these
              settings at any time.
            </p>
          </div>
        </div>
      </section>

      {/* Privacy & Security Section */}
      <section className="flex flex-col gap-6">
        <h2 className="text-xl font-bold text-[#1F2D2E]">Privacy & Security</h2>
        <div className="bg-white rounded-[16px] border border-[#3A86FF]/25 shadow-sm overflow-hidden">
          {/* Data visibility */}
          <div className="p-8 flex items-start gap-6 border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-[#E4EFFF] flex items-center justify-center text-[#3A86FF] shrink-0">
              <ShieldCheck size={24} />
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-sm font-bold text-[#1F2D2E]">
                Data visibility
              </span>
              <p className="text-[11px] text-[#5F6F73] font-medium leading-relaxed">
                Your biometric and activity data is private by default. It is
                only shared with connected professionals you have explicitly
                authorized.
              </p>
            </div>
          </div>

          {/* Download Data */}
          <div className="p-8 flex items-center justify-between border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center text-[#1F2D2E] shrink-0">
                <Download size={24} />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-sm font-bold text-[#1F2D2E]">
                  Download your data
                </span>
                <span className="text-[11px] text-[#5F6F73] font-medium">
                  Get a copy of your health records in CSV format
                </span>
              </div>
            </div>
            <button className="text-[#0FA4A9] text-xs font-bold hover:underline">
              Export
            </button>
          </div>

          {/* Delete Account */}
          <div className="p-8 flex items-center justify-between">
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center text-red-500 shrink-0">
                <Trash2 size={24} />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-sm font-bold text-[#1F2D2E]">
                  Delete account
                </span>
                <span className="text-[11px] text-[#5F6F73] font-medium">
                  Permanently remove your account and all associated data
                </span>
              </div>
            </div>
            <button className="flex items-center gap-2 bg-[#F8FAFB] px-4 py-2 rounded-xl border border-gray-100 group transition-all cursor-pointer">
              <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center text-red-500">
                <LogOut size={16} />
              </div>
              <span className="text-red-500 text-xs font-bold">Sign Out</span>
            </button>
          </div>
        </div>

        {/* Compliant Storage */}
        {/* <div className="bg-[#F8FAFB] rounded-[16px] py-4 flex items-center justify-center gap-3">
           <Info size={16} className="text-[#94A3B8]" />
           <span className="text-[10px] text-[#5F6F73] font-bold uppercase tracking-widest">
             END-TO-END ENCRYPTED • HIPAA COMPLIANT STORAGE
           </span>
        </div> */}
      </section>
    </div>
  );
};

// --- Sub-components (Views) ---

const ProfileEditView = ({ onBack }: { onBack: () => void }) => {
  const [unit, setUnit] = useState<"metric" | "imperial">("imperial");

  return (
    <div className="flex flex-col gap-8 p-6 md:p-8 w-full min-h-screen pb-24">
      <button
        onClick={onBack}
        className="flex items-center gap-2 px-4 py-2 bg-white border border-[#3A86FF]/30 rounded-lg text-[#3A86FF] text-xs font-semibold hover:bg-blue-50/50 transition-all w-fit cursor-pointer"
      >
        <ArrowLeft size={14} />
        Back to Settings
      </button>

      <div className="bg-[#EAFBF7] rounded-[16px] p-6 flex items-center gap-4 text-[#0FA4A9]">
        <Info size={20} />
        <p className="text-xs font-medium">
          This information helps personalize your wellness insights and
          projections. Your privacy is our priority.
        </p>
      </div>

      <div className="bg-white rounded-[16px] p-8 border border-[#3A86FF]/25 shadow-sm flex flex-col gap-8">
        <h2 className="text-xl font-bold text-[#1F2D2E]">Personal Details</h2>

        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <label className="text-sm font-bold text-[#1F2D2E]">
              Full Name
            </label>
            <input
              type="text"
              defaultValue="Alex Rivera"
              className="w-full bg-white border border-gray-200 rounded-[12px] py-4 px-6 text-sm md:text-base outline-none focus:ring-2 focus:ring-[#3A86FF]/10 transition-all"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-3">
              <label className="text-sm font-bold text-[#1F2D2E]">
                Date of Birth
              </label>
              <div className="relative">
                <input
                  type="text"
                  defaultValue="06/15/1992"
                  className="w-full bg-white border border-gray-200 rounded-[12px] py-4 px-6 text-sm md:text-base outline-none pr-12"
                />
                <Calendar
                  size={20}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#0FA4A9]"
                />
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <label className="text-sm font-bold text-[#1F2D2E]">Gender</label>
              <div className="relative">
                <select className="w-full bg-white border border-gray-200 rounded-[12px] py-4 px-6 text-sm md:text-base outline-none appearance-none">
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
                <ChevronDown
                  size={20}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#0FA4A9] pointer-events-none"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-[#1F2D2E]">
                Preferred Units
              </h3>
              {/* <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest">
                       <span className="text-[#0FA4A9] underline underline-offset-4">Metric</span>
                       <span className="text-gray-300">Imperial</span>
                    </div> */}
              <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest">
                <span
                  onClick={() => setUnit("metric")}
                  className={cn(
                    "cursor-pointer",
                    unit === "metric"
                      ? "text-[#0FA4A9] underline underline-offset-4"
                      : "text-gray-300",
                  )}
                >
                  Metric
                </span>
                <span
                  onClick={() => setUnit("imperial")}
                  className={cn(
                    "cursor-pointer",
                    unit === "imperial"
                      ? "text-[#0FA4A9] underline underline-offset-4"
                      : "text-gray-300",
                  )}
                >
                  Imperial
                </span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-col gap-3">
                {/* <label className="text-xs text-[#5F6F73] font-bold uppercase tracking-widest">
                  HEIGHT (CM)
                </label> */}
                <label className="text-xs text-[#5F6F73] font-bold uppercase tracking-widest">
                  HEIGHT ({unit === "metric" ? "CM" : "FT"})
                </label>
                <input
                  type="text"
                  defaultValue="178"
                  className="w-full bg-white border border-gray-200 rounded-[12px] py-4 px-6 text-sm md:text-base outline-none"
                />
              </div>
              <div className="flex flex-col gap-3">
                {/* <label className="text-xs text-[#5F6F73] font-bold uppercase tracking-widest">
                  WEIGHT (KG)
                </label> */}
                <label className="text-xs text-[#5F6F73] font-bold uppercase tracking-widest">
                  WEIGHT ({unit === "metric" ? "KG" : "LBS"})
                </label>
                <input
                  type="text"
                  defaultValue="74"
                  className="w-full bg-white border border-gray-200 rounded-[12px] py-4 px-6 text-sm md:text-base outline-none"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-[16px] p-8 border border-[#3A86FF]/25 shadow-sm flex flex-col gap-8">
        <h2 className="text-xl font-bold text-[#1F2D2E]">
          Lifestyle Context (Optional)
        </h2>

        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <label className="text-sm font-bold text-[#1F2D2E]">
              Activity Level
            </label>
            <div className="grid grid-cols-3 gap-4">
              {["Low", "Moderate", "High"].map((item) => (
                <div
                  key={item}
                  className={cn(
                    "py-4 border rounded-[12px] text-center font-bold text-sm cursor-pointer transition-all",
                    item === "Moderate"
                      ? "bg-[#EAFBF7] border-[#0FA4A9] text-[#0FA4A9]"
                      : "bg-white border-gray-100 text-[#5F6F73] hover:bg-gray-50",
                  )}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <label className="text-sm font-bold text-[#1F2D2E]">
              Primary Wellness Goal
            </label>
            <div className="relative">
              <select className="w-full bg-white border border-gray-200 rounded-[12px] py-4 px-6 text-sm md:text-base outline-none appearance-none">
                <option>General wellness</option>
                <option>Muscle gain</option>
                <option>Weight loss</option>
              </select>
              <ChevronDown
                size={20}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#0FA4A9] pointer-events-none"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="flex-1 bg-[#0FA4A9] text-white py-4 rounded-[12px] font-bold text-base hover:bg-[#0d8e92] transition-all cursor-pointer shadow-lg shadow-[#0FA4A9]/20">
          Save Changes
        </button>
        <button
          onClick={onBack}
          className="flex-1 bg-white border border-gray-100 text-[#5F6F73] py-4 rounded-[12px] font-bold text-base hover:bg-gray-50 transition-all cursor-pointer"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

const SubscriptionView = ({ onBack }: { onBack: () => void }) => {
  return (
    <div className="flex flex-col gap-8 p-6 md:p-8 w-full min-h-screen pb-24">
      <button
        onClick={onBack}
        className="flex items-center gap-2 px-4 py-2 bg-white border border-[#3A86FF]/30 rounded-lg text-[#3A86FF] text-xs font-semibold hover:bg-blue-50/50 transition-all w-fit cursor-pointer"
      >
        <ArrowLeft size={14} />
        Back to Settings
      </button>

      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-extrabold text-[#1F2D2E]">
          Manage Subscription
        </h1>
        <p className="text-[#5F6F73] text-sm font-medium">
          Control your plan, billing, and access
        </p>
      </div>

      {/* Current Plan Banner */}
      <div className="bg-[#0FA4A9] rounded-[16px] p-8 text-white relative overflow-hidden">
        <div className="flex flex-col gap-6 relative z-10">
          <div className="flex items-start justify-between">
            <div className="flex flex-col gap-1">
              <span className="text-xs font-bold uppercase tracking-widest opacity-80">
                Current Plan
              </span>
              <h2 className="text-3xl font-extrabold">Premium</h2>
            </div>
            <div className="flex flex-col items-end gap-2">
              <span className="text-xs font-bold opacity-80 uppercase tracking-widest">
                Monthly Billing
              </span>
              <div className="bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#4ADE80]" />
                <span className="text-[10px] font-extrabold uppercase tracking-widest">
                  Active
                </span>
              </div>
            </div>
          </div>
          <div className="h-px bg-white/20 w-full" />
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold opacity-80">
              Next Billing: Mar 15, 2024
            </span>
            <button className="text-[10px] font-extrabold uppercase tracking-widest border border-white/40 px-4 py-1.5 rounded-lg hover:bg-white/10 transition-all">
              Cancel Subscription
            </button>
          </div>
        </div>
        {/* Decorative Crown */}
        <Crown
          size={120}
          className="absolute -right-4 top-1/2 -translate-y-1/2 text-white opacity-5 rotate-[15deg] pointer-events-none"
        />
      </div>

      {/* Billing Cycle */}
      <div className="bg-white rounded-[16px] p-8 border border-[#3A86FF]/25 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col gap-1">
          <h3 className="text-xl font-bold text-[#1F2D2E]">Billing Cycle</h3>
          <p className="text-[#5F6F73] text-sm font-medium">
            Save up to 15% with annual billing
          </p>
        </div>
        <div className="flex text-sm font-bold items-center gap-4">
          <span className="text-[#94A3B8] font-bold">Monthly</span>
          <span className="text-[#0FA4A9] underline underline-offset-4">
            Annual
          </span>
        </div>
      </div>

      {/* Plan Tiers */}
      <div className="flex flex-col gap-4">
        {/* Free */}
        <div className="bg-white rounded-[16px] p-6 border border-[#3A86FF]/25 shadow-sm flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="w-12 h-12 bg-[#E4EFFF] rounded-xl flex items-center justify-center text-[#3A86FF]">
              <User size={24} />
            </div>
            <div className="flex flex-col gap-1">
              <h4 className="text-xl font-bold text-[#1F2D2E]">Free</h4>
              <span className="text-xs text-[#5F6F73] font-medium">
                3 Projection / month
              </span>
            </div>
          </div>
          <div className="flex flex-col items-end gap-1">
            <span className="text-2xl font-extrabold text-[#1F2D2E]">
              $0<span className="text-sm font-medium text-[#94A3B8]">/yr</span>
            </span>
            <span className="text-[10px] font-bold text-[#94A3B8] uppercase tracking-widest">
              No coach access
            </span>
          </div>
        </div>

        {/* Plus */}
        <div className="bg-white rounded-[16px] p-6 border border-[#3A86FF]/25 shadow-sm flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="w-12 h-12 bg-[#E4EFFF] rounded-xl flex items-center justify-center text-[#3A86FF]">
              <User size={24} />
            </div>
            <div className="flex flex-col gap-1">
              <h4 className="text-xl font-bold text-[#1F2D2E]">Plus</h4>
              <span className="text-xs text-[#5F6F73] font-medium">
                10 Projection / month
              </span>
            </div>
          </div>
          <div className="flex flex-col items-end gap-1">
            <span className="text-2xl font-extrabold text-[#1F2D2E]">
              $314
              <span className="text-sm font-medium text-[#94A3B8]">/yr</span>
            </span>
            <span className="text-[10px] font-bold text-[#94A3B8] uppercase tracking-widest">
              Limited messaging
            </span>
          </div>
        </div>

        {/* Premium (Selected) */}
        <div className="bg-[#EAFBF7] rounded-[16px] p-6 border-2 border-[#0FA4A9] shadow-sm flex items-center justify-between ring-4 ring-[#0FA4A9]/5">
          <div className="flex items-center gap-6">
            <div className="w-12 h-12 bg-[#0FA4A9] rounded-xl flex items-center justify-center text-white">
              <Crown size={24} />
            </div>
            <div className="flex flex-col gap-1">
              <h4 className="text-xl font-bold text-[#1F2D2E]">Premium</h4>
              <span className="text-xs text-[#0FA4A9] font-bold">
                Unlimited Projection
              </span>
            </div>
          </div>
          <div className="flex flex-col items-end gap-1">
            <span className="text-2xl font-extrabold text-[#1F2D2E]">
              $378
              <span className="text-sm font-medium text-[#94A3B8]">/yr</span>
            </span>
            <span className="text-[10px] font-bold text-[#0FA4A9] uppercase tracking-widest">
              Full Coach Access
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="flex-[2] bg-primary text-white py-4 rounded-[12px] font-bold text-base hover:bg-[#0d8e92] transition-all cursor-pointer shadow-lg shadow-[#0FA4A9]/20">
          Confirm Changes
        </button>
        <button
          onClick={onBack}
          className="flex-1 bg-white border border-gray-100 text-[#5F6F73] py-4 rounded-[12px] font-bold text-base hover:bg-gray-50 transition-all cursor-pointer"
        >
          Back To Settings
        </button>
      </div>
    </div>
  );
};

export default SettingsPage;
