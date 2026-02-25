"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Activity, Heart, Droplet } from "lucide-react";
import { ClientDetails } from "../../overview/data";


export default function HealthHabitOverview({
  clientDetails,
}: {
  clientDetails: ClientDetails;
}) {
  const metrics = [
    {
      icon: Heart,
      label: "Current Weight",
      value: `${clientDetails.currentWeight} kg`,
      color: "text-red-500",
      bgColor: "bg-red-50",
    },
    {
      icon: Activity,
      label: "Weekly Workouts",
      value: `${clientDetails.workouts.weekly}/${clientDetails.workouts.goal}`,
      color: "text-green-500",
      bgColor: "bg-green-50",
    },
    {
      icon: Droplet,
      label: "Water Intake",
      value: `${clientDetails.waterIntake.current}L`,
      color: "text-blue-500",
      bgColor: "bg-blue-50",
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Health & Habit Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div
                key={index}
                className={`${metric.bgColor} p-4 rounded-lg flex items-start gap-4`}
              >
                <div className={`p-3 rounded-lg bg-white`}>
                  <Icon className={`${metric.color} w-6 h-6`} />
                </div>
                <div>
                  <p className="text-[#6B7280] text-sm font-medium">
                    {metric.label}
                  </p>
                  <p className="text-xl font-bold text-[#1F2937] mt-1">
                    {metric.value}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
