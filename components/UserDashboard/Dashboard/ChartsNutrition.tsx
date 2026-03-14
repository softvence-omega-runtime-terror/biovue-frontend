"use client";

import {
  activityData,
  nutritionData,
  weightData,
} from "@/app/(UserDashboard)/user-dashboard/data";
import { Archive } from "lucide-react";
import { ReactNode } from "react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

// --- Define Types ---
interface ChartCardProps {
  title: string;
  subtitle: string;
  total?: string;
  totalLabel?: string;
  children: ReactNode;
}

// --- ChartCard Component ---
export const ChartCard = ({
  title,
  subtitle,
  total,
  totalLabel,
  children,
}: ChartCardProps) => (
  <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-[0_2px_12px_rgba(0,0,0,0.02)] flex flex-col gap-4">
    <div className="flex items-start justify-between">
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-[#E4EFFF] flex items-center justify-center">
            <Archive size={16} className="text-[#3A86FF]" />
          </div>
          <h3 className="text-sm font-bold text-[#1F2D2E]">{title}</h3>
        </div>
        <p className="text-[10px] text-[#5F6F73] mt-1">{subtitle}</p>
      </div>
      {total && (
        <div className="text-right">
          <p className="text-[#5F6F73] text-[10px] font-medium">{totalLabel}</p>
          <p className="text-[#10B981] font-bold text-sm">{total}</p>
        </div>
      )}
    </div>
    <div className="mt-2 h-50 w-full">{children}</div>
  </div>
);
export default function ChartsNutrition() {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartCard
          title="Weight Progress"
          subtitle="Based on logged body weight"
          total="-8.0 lbs"
          totalLabel="Total Progress"
        >
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={weightData}>
              <defs>
                <linearGradient id="colorWeight" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10B981" stopOpacity={0.1} />
                  <stop offset="95%" stopColor="#10B981" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 10, fill: "#94A3B8" }}
              />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="val"
                stroke="#10B981"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#colorWeight)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard
          title="Activity Trends"
          subtitle="Daily movement from logged activity"
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={activityData}>
              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 10, fill: "#94A3B8" }}
              />
              <Tooltip cursor={{ fill: "transparent" }} />
              <Bar dataKey="val" fill="#C7F5CB" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard
          title="Nutrition Overview"
          subtitle="Based on logged meals and nutrition quality"
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={nutritionData}>
              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 10, fill: "#94A3B8" }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 10, fill: "#94A3B8" }}
                label={{
                  value: "Calories",
                  angle: -90,
                  position: "insideLeft",
                  offset: 0,
                  fill: "#94A3B8",
                  fontSize: 12,
                }}
              />
              <Tooltip
                formatter={(
                  value: any,
                  name: any,
                ) => {
                  const displayValue =
                    value !== undefined ? `${value} kcal` : "-";
                  const displayName = name ? name.toUpperCase() : "";
                  return [displayValue, displayName] as [string, string];
                }}
              />
              <Bar
                dataKey="p"
                stackId="a"
                fill="#10B981"
                radius={[0, 0, 4, 4]}
              />
              <Bar dataKey="c" stackId="a" fill="#3A86FF" />
              <Bar
                dataKey="f"
                stackId="a"
                fill="#F59E0B"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard
          title="Sleep patterns"
          subtitle="Based on logged sleep duration and consistency"
        >
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={weightData}>
              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 10, fill: "#94A3B8" }}
              />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="val"
                stroke="#10B981"
                strokeWidth={2}
                dot={false}
                strokeDasharray="5 5"
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>
    </div>
  );
}
