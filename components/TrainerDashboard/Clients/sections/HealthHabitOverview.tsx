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
          <h2 className="text-xl font-medium text-[#111827]">
            Health & Habit Overview
          </h2>
          <p className="text-lg text-[#6B7280] font-medium">
            Read-only live activity data.
          </p>
        </div>
        <p className="text-base text-[#9AAEB2] font-medium tracking-wide">
          All data synced from user device
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {metricCards.map((card, index) => (
          <Card key={index} className="border-none shadow-xs bg-white">
            <CardContent className="p-5 space-y-2">
              <div className=" text-[#0D9488]">
                <card.icon size={32} strokeWidth={1.5} />
              </div>
              <p className="text-base text-[#5F6F73] font-medium">
                {card.title}
              </p>
              <div className="space-y-3">
                <h3 className="text-2xl font-semibold text-[#111827]">
                  {card.value}
                </h3>
                {card.targetApplied && (
                  <Badge className="bg-[#22C55E1A] text-[#22C55E] border-none text-base font-medium py-1 uppercase tracking-tight">
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
