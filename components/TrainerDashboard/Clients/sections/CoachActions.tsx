"use client";

import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, FileText, Calendar, Edit, Activity } from "lucide-react";

export default function CoachActions() {
  const actions = [
    { icon: MessageSquare, label: "Send Message" },
    { icon: FileText, label: "Add Motivation Note" },
    { icon: Calendar, label: "Schedule Check-in" },
    { icon: Edit, label: "Adjust Program" },
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 text-[#111827]">
        <Activity size={18} />
        <h2 className="text-sm font-bold tracking-wider uppercase">COACH ACTIONS</h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {actions.map((action, index) => (
          <button 
            key={index}
            className="flex items-center justify-center gap-3 p-4 bg-white border border-[#E5E7EB] rounded-lg hover:bg-[#F9FAFB] transition-colors group"
          >
            <action.icon size={18} className="text-[#0D9488] group-hover:scale-110 transition-transform" />
            <span className="text-xs font-semibold text-[#374151]">{action.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
