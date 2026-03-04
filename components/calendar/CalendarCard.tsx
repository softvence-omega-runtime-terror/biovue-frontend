"use client";

import { Clock } from "lucide-react";
import Image from "next/image";

interface Props {
  title: string;
  name: string;
  time: string;
  status: "missed" | "scheduled" | "completed";
  avatar?: string;
}

export default function CalendarCard({
  title,
  name,
  time,
  status,
  avatar,
}: Props) {
  const statusConfig = {
    missed: {
      badge: "bg-red-100 text-red-700",
      label: "Missed",
    },
    scheduled: {
      badge: "bg-purple-100 text-purple-700",
      label: "Scheduled",
    },
    completed: {
      badge: "bg-green-100 text-green-700",
      label: "Completed",
    },
  };

  const config = statusConfig[status];

  return (
    <div className={`rounded-xl border-2 border-[#0FA4A9] `}>
      {/* Status Badge */}
      <div className="border-l-5 border-[#0FA4A9] p-3 rounded-lg flex flex-col h-full bg-white">
        <div className="flex justify-between items-start mb-2">
          <div
            className={`flex items-center gap-2 rounded-full px-2 py-1 ${config.badge}`}
          >
            <Clock className="w-3 h-3" />
            <span className="text-xs font-medium">{config.label}</span>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1">
          <h4 className="text-sm font-semibold text-gray-900 mb-2">{title}</h4>

          {/* Client Info */}
          <div className="flex items-center gap-2 mb-2">
            {avatar ? (
              <Image
                src={avatar}
                alt={name}
                width={24}
                height={24}
                className="w-6 h-6 rounded-full object-cover"
              />
            ) : (
              <div className="w-6 h-6 bg-linear-to-br from-teal-400 to-cyan-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                {name.charAt(0)}
              </div>
            )}

            <p className="text-xs text-gray-700 font-medium">{name}</p>
          </div>
        </div>

        {/* Time */}
        <div className="flex items-center gap-1">
          <Clock className="w-3 h-3 text-gray-500" />
          <p className="text-xs text-gray-600">{time}</p>
        </div>
      </div>
    </div>
  );
}
