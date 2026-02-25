"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { useState } from "react";
import { MessageSquare, Dumbbell, CheckSquare, Award } from "lucide-react";

export default function ProgramSettings() {
  const [settings, setSettings] = useState({
    progressUpdates: true,
    workoutReminders: true,
    weeklyReports: true,
    performanceTracking: true,
  });

  const settingItems = [
    {
      icon: MessageSquare,
      label: "Progress Updates",
      key: "progressUpdates",
      color: "bg-blue-50",
      iconColor: "text-blue-500",
    },
    {
      icon: Dumbbell,
      label: "Workout Reminders",
      key: "workoutReminders",
      color: "bg-green-50",
      iconColor: "text-green-500",
    },
    {
      icon: CheckSquare,
      label: "Weekly Reports",
      key: "weeklyReports",
      color: "bg-purple-50",
      iconColor: "text-purple-500",
    },
    {
      icon: Award,
      label: "Performance Tracking",
      key: "performanceTracking",
      color: "bg-orange-50",
      iconColor: "text-orange-500",
    },
  ];

  const handleToggle = (key: string) => {
    setSettings((prev) => ({
      ...prev,
      [key]: !prev[key as keyof typeof prev],
    }));
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Program Settings & Preferences</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {settingItems.map((item) => {
            const Icon = item.icon;
            const isEnabled = settings[item.key as keyof typeof settings];
            return (
              <div
                key={item.key}
                className={`${item.color} p-4 rounded-lg flex items-center justify-between`}
              >
                <div className="flex items-center gap-3">
                  <Icon className={`${item.iconColor} w-6 h-6`} />
                  <span className="font-medium text-[#1F2937]">
                    {item.label}
                  </span>
                </div>
                <button
                  onClick={() => handleToggle(item.key)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    isEnabled ? "bg-[#0D9488]" : "bg-[#D1D5DB]"
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      isEnabled ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
