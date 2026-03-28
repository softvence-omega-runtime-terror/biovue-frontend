"use client";

import { useState } from "react";
import SettingsSection from "./SettingsSection";
import Toggle from "./Toggle";
import { initialSettings } from "./SettingsData";



export default function NotificationSettings() {
  const [settings, setSettings] = useState(initialSettings);

  const handleToggle = (id: string) => {
    setSettings(prev => prev.map(s => s.id === id ? { ...s, enabled: !s.enabled } : s));
  };

  return (
    <SettingsSection
      className="border-none! shadow-none! bg-transparent! px-0!"
    >
      <div className="bg-white rounded-3xl border border-[#F1F5F9] shadow-sm overflow-hidden">
        <div className="px-8 py-6 border-b border-[#F1F5F9]">
          <h3 className="text-[17px] font-bold text-[#0FA4A9]">Notifications</h3>
        </div>
        <div className="px-8 py-4 divide-y divide-[#F1F5F9]">
          {settings.map((item) => (
            <div key={item.id} className="py-6 flex items-center justify-between">
              <div className="max-w-[80%]">
                <h4 className="text-[15px] font-bold text-[#1E293B]">{item.title}</h4>
                <p className="text-[13px] text-[#94A3B8] font-medium mt-1">{item.description}</p>
              </div>
              <Toggle enabled={item.enabled} onChange={() => handleToggle(item.id)} />
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
