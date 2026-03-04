"use client";

import { Clock } from "lucide-react";
import Image from "next/image";

interface Props {
  title: string;
  name: string;
  time: string;
  status: "missed" | "scheduled" | "completed";
  avatar?: string;
  onClick?: () => void;
}

export default function CalendarCard({
  title,
  name,
  time,
  status,
  avatar,
  onClick,
}: Props) {
  const statusConfig = {
    missed: {
      badge: "bg-[#FEE2E2] text-[#EF4444]",
      label: "Missed",
    },
    scheduled: {
      badge: "bg-[#F3E8FF] text-[#A855F7]",
      label: "Scheduled",
    },
    completed: {
      badge: "bg-[#DCFCE7] text-[#22C55E]",
      label: "Completed",
    },
  };

  const config = statusConfig[status];

  return (
    <div 
      onClick={onClick}
      className="rounded-2xl border border-[#CCFBF1] bg-white overflow-hidden h-full flex flex-col shadow-sm hover:shadow-md transition-shadow cursor-pointer"
    >
      <div className="border-l-[6px] border-[#0FA4A9] p-4 flex flex-col h-full">
        {/* Status Badge */}
        <div className="flex justify-between items-start mb-3">
          <div className="bg-[#F0FDFD] p-2 rounded-lg text-[#0D9488]">
            <Clock size={16} />
          </div>
          <div className={`px-3 py-1 rounded-full text-[11px] font-bold ${config.badge}`}>
            {config.label}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1">
          <h4 className="text-[15px] font-bold text-[#1E293B] mb-3 leading-tight">{title}</h4>

          {/* Client Info */}
          <div className="flex items-center gap-2 mb-4">
            <div className="relative w-7 h-7">
              {avatar ? (
                <Image
                  src={avatar}
                  alt={name}
                  fill
                  className="rounded-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-[#0FA4A9] rounded-full flex items-center justify-center text-white text-[10px] font-bold">
                  {name.charAt(0)}
                </div>
              )}
            </div>
            <p className="text-[13px] text-[#475569] font-medium">{name}</p>
          </div>
        </div>

        {/* Time */}
        <div className="flex items-center gap-2 mt-auto">
          <Clock className="w-4 h-4 text-[#94A3B8]" />
          <p className="text-[13px] text-[#64748B] font-semibold">{time}</p>
        </div>
      </div>
    </div>
  );
}
