"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Scale, Utensils, Activity, Moon, Wind, Droplet } from "lucide-react";
import { ClientDetails } from "../../overview/data";

export default function HealthHabitOverview({
  clientDetails,
}: {
  clientDetails: ClientDetails;
}) {
  const { healthHabitOverview: metrics } = clientDetails;

  const metricCards = [
    {
      title: "Weight",
      value: `${metrics.weight.value} ${metrics.weight.unit}`,
      icon: Scale,
      targetApplied: metrics.weight.targetApplied,
    },
    {
      title: "Nutrition Quality",
      value: `${metrics.nutritionQuality.value}%`,
      icon: Utensils,
      targetApplied: metrics.nutritionQuality.targetApplied,
    },
    {
      title: "Activity",
      value: `${metrics.activity.steps.toLocaleString()} steps`,
      icon: Activity,
    },
    {
      title: "Sleep",
      value: `${metrics.sleep.hours}h ${metrics.sleep.minutes}m`,
      icon: Moon,
      targetApplied: metrics.sleep.targetApplied,
    },
    {
      title: "Stress",
      value: metrics.stress,
      icon: Wind,
    },
    {
      title: "Hydration",
      value: `${metrics.hydration.value} ${metrics.hydration.unit}`,
      icon: Droplet,
    },
  ];

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-lg font-bold text-[#111827]">
            Health & Habit Overview
          </h2>
          <p className="text-xs text-[#6B7280]">
            Read-only live activity data.
          </p>
        </div>
        <p className="text-[10px] text-[#9CA3AF] font-medium tracking-wide">
          All data synced from user device
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {metricCards.map((card, index) => (
          <Card key={index} className="border-none shadow-xs bg-white">
            <CardContent className="p-5 space-y-4">
              <div className="flex items-center gap-2 text-[#0D9488]">
                <card.icon size={18} strokeWidth={1.5} />
                <span className="text-xs font-medium">{card.title}</span>
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-[#111827]">
                  {card.value}
                </h3>
                {card.targetApplied && (
                  <Badge className="bg-[#10B9811A] text-[#059669] border-none text-[10px] font-bold py-1 uppercase tracking-tight">
                    COACH TARGET APPLIED
                  </Badge>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
