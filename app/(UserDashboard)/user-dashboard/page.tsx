"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Bell, 
  Crown, 
  ArrowRight, 
  Plus, 
  Activity,
  Calendar,
  Archive,
  Moon,
  Repeat,
  X,
  Weight,
  Cigarette,
  GlassWater,
  Footprints,
  Dumbbell,
  Utensils,
  Droplets,
  Zap,
  Smartphone,
  PencilLine
} from "lucide-react";
import { 
  AreaChart, 
  Area, 
  XAxis, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar,
  LineChart,
  Line
} from "recharts";
import { cn } from "@/lib/utils";
import LogTodayModal from "@/components/dashboard/LogTodayModal";
import ChangeSourceModal from "@/components/dashboard/ChangeSourceModal";
import NotificationDropdown, { MOCK_NOTIFICATIONS } from "@/components/dashboard/NotificationDropdown";

// --- Mock Data ---
const weightData = [
  { name: 'M', val: 217 }, { name: 'T', val: 214 }, { name: 'W', val: 216 }, { name: 'T', val: 212 }, { name: 'F', val: 214 }, { name: 'S', val: 210 }, { name: 'S', val: 209 }
];
const activityData = [
  { name: 'M', val: 2000 }, { name: 'T', val: 2400 }, { name: 'W', val: 2700 }, { name: 'T', val: 1800 }, { name: 'F', val: 2200 }, { name: 'S', val: 1500 }, { name: 'S', val: 1000 }
];
const nutritionData = [
  { name: 'M', p: 30, c: 40, f: 30 }, { name: 'T', p: 35, c: 35, f: 30 }, { name: 'W', p: 40, c: 30, f: 30 }, { name: 'T', p: 30, c: 45, f: 25 }, { name: 'F', p: 35, c: 40, f: 25 }, { name: 'S', p: 25, c: 35, f: 40 }, { name: 'S', p: 30, c: 30, f: 40 }
];

// --- Sub-components ---
const ChartCard = ({ title, subtitle, total, totalLabel, children }: any) => (
  <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-[0_2px_12px_rgba(0,0,0,0.02)] flex flex-col gap-4">
    <div className="flex items-start justify-between">
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
           <div className="w-8 h-8 rounded-lg bg-[#E4EFFF] flex items-center justify-center">
              <Archive size={16} className="text-[#3A86FF]" />
           </div>
           <h3 className="text-sm font-bold text-[#1F2D2E]">{title}</h3>
        </div>
        <p className="text-[10px] text-[#5F6F73] mt-1">{subtitle}</p>
      </div>
      {total && (
        <div className="text-right">
          <p className="text-[#5F6F73] text-[10px] font-medium">{totalLabel}</p>
          <p className="text-[#10B981] font-bold text-sm">{total}</p>
        </div>
      )}
    </div>
    <div className="mt-2 h-[200px] w-full">{children}</div>
  </div>
);

// --- Main Page ---
const UserDashboard = () => {
  const [showLogModal, setShowLogModal] = useState(false);
  const [showSourceModal, setShowSourceModal] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [notifications, setNotifications] = useState(MOCK_NOTIFICATIONS);
  const [dataSource, setDataSource] = useState<"device" | "manual">("device");
  const [habitData, setHabitData] = useState({
    weight: "", bodyFat: "", smoking: "", alcohol: "",
    steps: "7500", workout: "5", strength: "2", sleep: "7.5",
    diet: "", fastFood: "", stress: "", water: ""
  });

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header - Only for Dashboard Overview */}
      <header className="sticky top-0 z-20 flex items-center justify-between py-4 bg-white border-b border-gray-100 px-6 w-full">
        <h1 className="text-xl font-semibold text-[#1F2D2E]">Dashboard</h1>
        <div className="flex items-center gap-4 ml-auto">
          <div className="relative">
            <button 
              onClick={() => setIsNotificationOpen(!isNotificationOpen)}
              className="relative p-2 rounded-full bg-[#F4FBFA] hover:bg-gray-100 transition-colors cursor-pointer" 
              aria-label="Notifications"
            >
              <Bell size={20} className="text-[#5F6F73]" />
              {notifications.some(n => !n.isRead) && (
                <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
              )}
            </button>
            <NotificationDropdown 
              isOpen={isNotificationOpen}
              onClose={() => setIsNotificationOpen(false)}
              onMarkAllAsRead={() => setNotifications(prev => prev.map(n => ({...n, isRead: true})))}
              notifications={notifications.filter(n => !n.isRead)} // Show only unread or all based on preference, Image 2 seems to show unread, but let's just show all recent or unread. I'll pass all for now since there's only 5. Let's pass all.
            />
          </div>
          <div className="flex items-center gap-3 pr-2">
            <Image
              src="/images/avatar.png"
              alt="User Profile"
              width={40}
              height={40}
              className="rounded-full border-2 border-[#F4FBFA] cursor-pointer"
            />
          </div>
          <Link href="/user-dashboard/upgrade">
            <button className="flex items-center gap-2 bg-[#0FA4A9] text-white px-4 py-2 rounded-lg font-medium hover:bg-opacity-90 transition-all text-sm cursor-pointer">
              <Crown size={18} fill="currentColor" />
              Upgrade
            </button>
          </Link>

        </div>
      </header>

      {/* Main Content Area with Padding */}
      <div className="flex flex-col gap-6 py-6 container mx-auto pb-12">
        {/* Welcome Message */}
      <div className="bg-white rounded-xl p-4 md:p-6 border border-gray-100 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
        <h2 className="text-lg font-bold text-[#1F2D2E] mb-1">Welcome, Shamim.airclub!</h2>
        <p className="text-sm text-[#5F6F73]">Complete your setup to unlock future features</p>
      </div>

      {/* AI Projections Banner */}
      <div className="relative overflow-hidden bg-white border-[1.5px] border-[#3A86FF] rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 min-h-[180px]">
        <div className="flex-1 flex flex-col items-start gap-4">
          <h2 className="text-2xl md:text-3xl font-bold text-[#3A86FF]">AI-Powered Body Projections</h2>
          <p className="text-[#5F6F73] text-sm md:text-base max-w-xl">
            Upload your photo and see your future body transformation with AI predictions
          </p>
          <Link href="/user-dashboard/projections">
            <button className="bg-[#0FA4A9] text-white px-6 py-2.5 rounded-lg font-semibold flex items-center gap-2 hover:bg-opacity-90 transition-all mt-2 group cursor-pointer">
              Generate AI Body Projections
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>
        <div className="w-full md:w-auto flex flex-col gap-3 min-w-[200px]">
           <div className="bg-white border border-[#3A86FF] rounded-xl p-4 flex flex-col transition-all cursor-pointer hover:bg-blue-50">
             <span className="text-[10px] font-bold text-[#5F6F73] uppercase tracking-wider mb-2">Current Goal</span>
             <span className="text-[#3A86FF] font-bold text-lg">Build Athletic Lean Mass</span>
           </div>
        </div>
      </div>

      {/* Summary Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Wellness Score */}
        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-[0_2px_12px_rgba(0,0,0,0.02)] flex items-center justify-between group hover:border-[#0FA4A9] transition-all">
          <div className="flex flex-col gap-1">
            <span className="text-[10px] font-bold text-[#5F6F73] uppercase tracking-wider">Wellness Score</span>
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-bold text-[#1F2D2E]">72</span>
              <span className="text-[#5F6F73] text-sm font-medium">/ 100</span>
            </div>
            <span className="text-[#2DD4BF] text-[10px] font-medium flex items-center gap-1 mt-1">
              <Plus size={10} /> 4 vs last week
            </span>
          </div>
          <div className="w-16 h-16 rounded-full border-[1.5px] border-[#3A86FF] border-t-transparent flex items-center justify-center transform group-hover:rotate-12 transition-transform">
             <Activity size={24} className="text-[#3A86FF]" />
          </div>
        </div>

        {/* Days Active */}
        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-[0_2px_12px_rgba(0,0,0,0.02)] flex items-center justify-between group hover:border-[#0FA4A9] transition-all">
          <div className="flex flex-col gap-1">
            <span className="text-[10px] font-bold text-[#5F6F73] uppercase tracking-wider">Days Active</span>
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-bold text-[#1F2D2E]">3</span>
              <span className="text-[#5F6F73] text-sm font-medium">/ 7</span>
            </div>
            <span className="text-[#2DD4BF] text-[10px] font-medium flex items-center gap-1 mt-1">
              On track for your goal
            </span>
          </div>
          <div className="w-16 h-16 rounded-xl bg-[#E4EFFF] flex items-center justify-center group-hover:bg-blue-100 transition-colors">
             <Calendar size={24} className="text-[#3A86FF]" />
          </div>
        </div>

        {/* Data Logged */}
        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-[0_2px_12px_rgba(0,0,0,0.02)] flex items-center justify-between group hover:border-[#0FA4A9] transition-all">
          <div className="flex flex-col gap-1">
            <span className="text-[10px] font-bold text-[#5F6F73] uppercase tracking-wider">Data Logged</span>
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-bold text-[#1F2D2E]">12</span>
            </div>
            <span className="text-[#2DD4BF] text-[10px] font-medium flex items-center gap-1 mt-1">
              Entries this week
            </span>
          </div>
          <div className="w-16 h-16 rounded-xl bg-[#E4EFFF] flex items-center justify-center group-hover:bg-blue-100 transition-colors">
             <Archive size={24} className="text-[#3A86FF]" />
          </div>
        </div>
      </div>

      {/* Current Health Overview */}
      <div className="flex items-center justify-between mt-4">
        <h2 className="text-xl font-bold text-[#1F2D2E]">Current Health Overview</h2>
        <button
          onClick={() => setShowLogModal(true)}
          className="flex items-center gap-2 bg-[#0FA4A9] text-white px-4 py-2 rounded-lg font-medium hover:bg-opacity-90 transition-all text-sm group cursor-pointer"
        >
          <Plus size={18} />
          Log today's data
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { label: "Current Weight", value: "204.0", unit: "lbs", status: "+12 lbs above ideal", desc: "Based on standard wellness ranges", color: "text-[#3A86FF]" },
          { label: "BMI", value: "29.3", unit: "", status: "Healthy range : 18.5 - 24.9", desc: "Your Body fat is higher than the recommended range", color: "text-[#F59E0B]" },
          { label: "Nutrition Quality", value: "80/100", unit: "", status: "Balanced", desc: "your meals are fueling you well today", color: "text-[#10B981]" },
          { label: "Weekly Workouts", value: "2", unit: "session", status: "Recommended : 4-5 sessions", desc: "Regular workouts help reach your wellness goal faster", color: "text-[#EF4444]" },
          { label: "Daily Steps", value: "29.3", unit: "", status: "Goal : 8000 steps", desc: "Increasing daily movement improves overall health", color: "text-[#EF4444]" },
          { label: "Sleep Hours", value: "6.5", unit: "hrs", status: "Recommended : 7-9 hours", desc: "Quality sleep supports recovery & focus.", color: "text-[#EF4444]" },
        ].map((metric, i) => (
          <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-[0_2px_12px_rgba(0,0,0,0.02)] flex flex-col gap-3">
            <span className="text-[#5F6F73] text-[10px] font-bold uppercase tracking-wider">{metric.label}</span>
            <div className="flex items-baseline gap-1">
              <span className={cn("text-3xl font-bold", metric.color)}>{metric.value}</span>
              <span className="text-[#5F6F73] text-sm font-medium">{metric.unit}</span>
            </div>
            <div className="flex flex-col gap-1 mt-1">
              <span className={cn("text-xs font-semibold", 
                metric.color.includes('EF4444') ? 'text-[#EF4444]' : 
                metric.color.includes('3A86FF') ? 'text-[#2DD4BF]' : 'text-[#F59E0B]'
              )}>
                {metric.status}
              </span>
              <span className="text-[#5F6F73] text-[11px] leading-tight">{metric.desc}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Your Progress & Trends */}
      <div className="mt-8 flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-[#1F2D2E]">Your Progress & Trends</h2>
          <div className="flex p-1 bg-white border border-gray-100 rounded-lg">
             {["Weekly", "Monthly", "Last 3 months"].map((t) => (
               <button key={t} className={cn("px-4 py-1.5 text-xs font-semibold rounded-md transition-all cursor-pointer", 
                 t === "Weekly" ? "bg-[#E4EFFF] text-[#3A86FF]" : "text-[#5F6F73] hover:text-[#1F2D2E]"
               )}>
                 {t}
               </button>
             ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ChartCard title="Weight Progress" subtitle="Based on logged body weight" total="-8.0 lbs" totalLabel="Total Progress">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={weightData}>
                <defs>
                  <linearGradient id="colorWeight" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10B981" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 10, fill: '#94A3B8'}} />
                <Tooltip />
                <Area type="monotone" dataKey="val" stroke="#10B981" strokeWidth={2} fillOpacity={1} fill="url(#colorWeight)" />
              </AreaChart>
            </ResponsiveContainer>
          </ChartCard>

          <ChartCard title="Activity Trends" subtitle="Daily movement from logged activity">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={activityData}>
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 10, fill: '#94A3B8'}} />
                <Tooltip cursor={{fill: 'transparent'}} />
                <Bar dataKey="val" fill="#C7F5CB" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>

          <ChartCard title="Nutrition Overview" subtitle="Based on logged meals and nutrition quality">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={nutritionData}>
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 10, fill: '#94A3B8'}} />
                <Tooltip />
                <Bar dataKey="p" stackId="a" fill="#10B981" radius={[0, 0, 4, 4]} />
                <Bar dataKey="c" stackId="a" fill="#3A86FF" />
                <Bar dataKey="f" stackId="a" fill="#F59E0B" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>

          <ChartCard title="Sleep patterns" subtitle="Based on logged sleep duration and consistency">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={weightData}>
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 10, fill: '#94A3B8'}} />
                <Tooltip />
                <Line type="monotone" dataKey="val" stroke="#10B981" strokeWidth={2} dot={false} strokeDasharray="5 5" />
              </LineChart>
            </ResponsiveContainer>
          </ChartCard>
        </div>
      </div>

      {/* Today's Focus */}
      <div className="mt-8 flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-[#1F2D2E]">Today's focus</h2>
          <button className="flex items-center gap-2 bg-[#0FA4A9] text-white px-4 py-2 rounded-lg font-medium hover:bg-opacity-90 transition-all text-sm group cursor-pointer">
            View All Insights
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { 
              title: "Improve Diet Quality", 
              desc: "\"Based on logged meals and nutrition quality\"", 
              icon: <Repeat size={20} className="text-[#3A86FF]" />,
              badge: "HIGH PRIORITY",
              iconBg: "bg-[#E4EFFF]"
            },
            { 
              title: "Optimize Sleep Duration", 
              desc: "\"Better recovery and mental clarity\"", 
              icon: <Moon size={20} className="text-[#3A86FF]" />,
              badge: "HIGH PRIORITY",
              iconBg: "bg-[#E4EFFF]"
            }
          ].map((focus, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-[0_2px_12px_rgba(0,0,0,0.02)] flex flex-col gap-4 group hover:border-[#0FA4A9] transition-all cursor-pointer">
              <div className="flex items-start justify-between">
                <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center transition-colors", focus.iconBg)}>
                   {focus.icon}
                </div>
                <span className="text-[10px] font-bold text-red-500 bg-red-50 px-2 py-1 rounded-full uppercase tracking-wider">
                  {focus.badge}
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-base font-bold text-[#1F2D2E]">{focus.title}</h3>
                <p className="text-xs text-[#5F6F73] italic">{focus.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>

      <LogTodayModal 
        isOpen={showLogModal}
        onClose={() => setShowLogModal(false)}
        onChangeSource={() => {
          setShowLogModal(false);
          setShowSourceModal(true);
        }}
        habitData={habitData}
        setHabitData={setHabitData}
      />

      <ChangeSourceModal 
        isOpen={showSourceModal}
        onClose={() => setShowSourceModal(false)}
        dataSource={dataSource}
        setDataSource={setDataSource}
      />
    </div>
  );
};

export default UserDashboard;
