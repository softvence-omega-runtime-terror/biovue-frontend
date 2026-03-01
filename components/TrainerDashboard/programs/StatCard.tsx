"use client";

import {
  Users,
  AlertCircle,
  MessageSquare,
  Calendar,
  Activity,
  User,
} from "lucide-react";
import { Card } from "@/components/ui/card";

export interface StatCard {
  icon: React.ReactNode;
  number: string | number;
  label: string;
  description: string;
}
const statCards: StatCard[] = [
  {
    icon: <Activity className="w-6 h-6" />,
    number: 3,
    label: "Active Programs",
    description: "Currently assigned to clients",
  },
  {
    icon: <AlertCircle className="w-6 h-6" />,
    number: 2,
    label: "Draft Programs",
    description: "Not yet assigned",
  },
  {
    icon: <User className="w-6 h-6" />,
    number: 18,
    label: "Clients in Programs",
    description: "Active participants",
  },
];

export default function StatCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
      {statCards.map((stat, index) => (
        <Card key={index} className="p-5 bg-white">
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
