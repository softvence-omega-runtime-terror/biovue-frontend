"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const subscriptionsData = [
  { month: "Jan", value: 100 },
  { month: "Feb", value: 250 },
  { month: "Mar", value: 900 },
  { month: "Apr", value: 450 },
  { month: "May", value: 550 },
  { month: "Jun", value: 380 },
];

const revenueData = [
  { month: "Jan", value: 5000 },
  { month: "Feb", value: 12000 },
  { month: "Mar", value: 45000 },
  { month: "Apr", value: 20000 },
  { month: "May", value: 25000 },
  { month: "Jun", value: 18000 },
];

function Chart({
  title,
  data,
  color,
}: {
  title: string;
  data: { month: string; value: number }[];
  color: string;
}) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h3 className="text-sm font-semibold text-gray-900 mb-6">{title}</h3>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart
          data={data}
          margin={{ top: 5, right: 10, left: -20, bottom: 0 }}
        >
          <XAxis
            dataKey="month"
            tick={{ fontSize: 12, fill: "#9CA3AF" }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tick={{ fontSize: 12, fill: "#9CA3AF" }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip
            contentStyle={{
              borderRadius: "8px",
              border: "1px solid #E5E7EB",
              backgroundColor: "#FFFFFF",
              fontSize: "12px",
            }}
          />
          <Line
            type="monotone"
            dataKey="value"
            stroke={color}
            strokeWidth={2}
            strokeDasharray="5 4"
            dot={false}
            activeDot={{ r: 4, fill: color }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default function Graphs() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Chart
        title="Subscriptions Over Time"
        data={subscriptionsData}
        color="#8B5CF6"
      />
      <Chart title="Revenue Over Time" data={revenueData} color="#0FA4A9" />
    </div>
  );
}
