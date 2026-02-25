"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingDown, TrendingUp } from "lucide-react";

export default function ProgressTrends() {
  const trends = [
    {
      title: "Weight Trend",
      data: "Declining trend",
      change: -2.5,
      unit: "kg",
      positive: true,
    },
    {
      title: "Calorie Burned",
      data: "Increasing trend",
      change: 150,
      unit: "kcal/week",
      positive: true,
    },
    {
      title: "Workout Consistency",
      data: "Maintaining steady",
      change: 0,
      unit: "",
      positive: false,
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Progress & Trends</CardTitle>
        <p className="text-sm text-[#6B7280] mt-2">
          Weekly performance analysis
        </p>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {trends.map((trend, index) => {
            const Icon = trend.change < 0 ? TrendingDown : TrendingUp;
            return (
              <div
                key={index}
                className="bg-[#F9FAFB] p-4 rounded-lg border border-[#E5E7EB]"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="font-semibold text-[#1F2937]">
                      {trend.title}
                    </h4>
                    <p className="text-xs text-[#6B7280] mt-1">{trend.data}</p>
                  </div>
                  <Icon
                    className={`w-5 h-5 ${
                      trend.positive ? "text-green-500" : "text-yellow-500"
                    }`}
                  />
                </div>
                {trend.change !== 0 && (
                  <p className="text-lg font-bold text-[#1F2937]">
                    {trend.change > 0 ? "+" : ""}
                    {trend.change} {trend.unit}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
