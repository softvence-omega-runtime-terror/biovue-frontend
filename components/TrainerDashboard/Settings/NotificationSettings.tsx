"use client";

import React, { useState, useEffect } from "react";
import SettingsSection from "./SettingsSection";
import Toggle from "./Toggle";
import { 
  useGetNotificationSettingsQuery, 
  useUpdateNotificationSettingsMutation 
} from "@/redux/features/api/userDashboard/notificationApi";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

export default function NotificationSettings() {
  const { data: notificationSettingsData, isLoading: isLoadingSettings } = useGetNotificationSettingsQuery();
  const [updateNotificationSettings] = useUpdateNotificationSettingsMutation();
  
  // Local state for smooth toggles
  const [localSettings, setLocalSettings] = useState<any>(null);

  useEffect(() => {
    if (notificationSettingsData?.data && !localSettings) {
      setLocalSettings(notificationSettingsData.data);
    }
  }, [notificationSettingsData, localSettings]);

  const handleToggle = async (key: string) => {
    if (!localSettings) return;

    const currentValue = localSettings[key];
    const newValue = currentValue === 1 ? 0 : 1;

    // Optimistically update local state
    setLocalSettings((prev: any) => ({
      ...prev,
      [key]: newValue
    }));

    try {
      await updateNotificationSettings({
        [key]: newValue,
      }).unwrap();
      toast.success("Notification settings updated");
    } catch (error) {
      // Revert if API fails
      setLocalSettings((prev: any) => ({
        ...prev,
        [key]: currentValue
      }));
      toast.error("Failed to update notification settings");
    }
  };

  const notificationItems = [
    { 
      label: "Client Messages", 
      sub: "Instant alerts when your clients write to you", 
      active: localSettings?.client_messages === 1,
      key: "client_messages"
    },
    { 
      label: "Goal Updates", 
      sub: "Alerts when a client updates, edits, or completes their goals.", 
      active: localSettings?.goal_updates === 1,
      key: "goal_updates"
    },
    { 
      label: "Check-in & Reminder Alerts", 
      sub: "Reminders for scheduled client check-ins or missed logs.", 
      active: localSettings?.check_in_reminder_alerts === 1,
      key: "check_in_reminder_alerts"
    },
    { 
      label: "AI Insights & Recommendations", 
      sub: "Notifications when new AI-generated insights or suggestions are available.", 
      active: localSettings?.ai_insights === 1,
      key: "ai_insights"
    },
    { 
      label: "Subscription & Account Updates", 
      sub: "Billing reminders, plan changes, and important account notices.", 
      active: localSettings?.subscription_updates === 1,
      key: "subscription_updates"
    },
    { 
      label: "Missed Check-in Alerts", 
      sub: "Alerts when clients miss their scheduled check-ins.", 
      active: localSettings?.missed_checkin_alerts === 1,
      key: "missed_checkin_alerts"
    },
    { 
      label: "Program Milestone Updates", 
      sub: "Notifications about program progress and milestones.", 
      active: localSettings?.program_milestone_updates === 1,
      key: "program_milestone_updates"
    },
    { 
      label: "Weekly Summary Email", 
      sub: "Receive a weekly summary of client progress and engagement.", 
      active: localSettings?.weekly_summary_email === 1,
      key: "weekly_summary_email"
    },
    { 
      label: "Auto Remind Missed Check-ins", 
      sub: "Automatically send reminders to clients when they miss a check-in.", 
      active: localSettings?.auto_remind_missed_checkins === 1,
      key: "auto_remind_missed_checkins"
    },
  ];

  if (isLoadingSettings && !localSettings) {
    return (
        <SettingsSection className="border-none! shadow-none! bg-transparent! px-0!">
            <div className="bg-white rounded-3xl border border-[#F1F5F9] shadow-sm overflow-hidden p-12 flex items-center justify-center">
                <Loader2 className="animate-spin text-[#0FA4A9]" size={32} />
            </div>
        </SettingsSection>
    );
  }

  return (
    <SettingsSection
      className="border-none! shadow-none! bg-transparent! px-0!"
    >
      <div className="bg-white rounded-3xl border border-[#F1F5F9] shadow-sm overflow-hidden">
        <div className="px-8 py-6 border-b border-[#F1F5F9]">
          <h3 className="text-[17px] font-bold text-[#0FA4A9]">Notifications</h3>
        </div>
        <div className="px-8 py-4 divide-y divide-[#F1F5F9]">
          {notificationItems.map((item) => (
            <div key={item.key} className="py-6 flex items-center justify-between">
              <div className="max-w-[80%]">
                <h4 className="text-[15px] font-bold text-[#1E293B]">{item.label}</h4>
                <p className="text-[13px] text-[#94A3B8] font-medium mt-1">{item.sub}</p>
              </div>
              <Toggle enabled={item.active} onChange={() => handleToggle(item.key)} />
            </div>
          ))}
        </div>
        <div className="px-8 py-5 bg-[#F8FAFC]/50 border-t border-[#F1F5F9]">
          <p className="text-[13px] text-[#94A3B8] font-medium">
            Notifications help you stay updated on client progress and engagement.
          </p>
        </div>
      </div>
    </SettingsSection>
  );
}
