"use client";

import { Users, AlertCircle, MessageSquare, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";
import { StatCard } from "./data";

const statCards: StatCard[] = [
  {
    icon: <Users className="w-6 h-6" />,
    number: 24,
    label: "Active Clients",
    description: "Currently coached",
  },
  {
    icon: <AlertCircle className="w-6 h-6" />,
    number: 5,
    label: "Clients Needing Attention",
    description: "Off-track or low activity",
  },
  {
    icon: <MessageSquare className="w-6 h-6" />,
    number: 3,
    label: "Pending Messages",
    description: "Unread client messages",
  },
  {
    icon: <Calendar className="w-6 h-6" />,
    number: 7,
    label: "Todays Check-ins",
    description: "Scheduled Today",
  },
];

export default function StatCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
      {statCards.map((stat, index) => (
        <Card key={index} className="p-5">
          <div className="flex flex-col items-start gap-4">
            <div className="p-3 w-13 h-13 bg-[#9AAEB233] rounded-lg text-[#0D9488]">
              {stat.icon}
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-medium text-foreground">
                {stat.number}
              </div>
              <div className="text-lg font-medium text-foreground">
                {stat.label}
              </div>
              <div className="text-base text-[#5F6F73] ">
                {stat.description}
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
