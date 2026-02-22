"use client";

import OverviewCharts from "@/components/AdminDashboard/Overview/OverViewCharts";
import PlanSummaryTable from "@/components/AdminDashboard/Overview/PlanSummeryTable";
import StatCard from "@/components/AdminDashboard/Overview/StatCard";
import SystemStatus from "@/components/AdminDashboard/Overview/SystemStatus";
import DashboardHeading from "@/components/common/DashboardHeading";

export default function AdminOverviewPage() {
  return (
    <div className="flex flex-col gap-6">
      {/* Page title */}
      <DashboardHeading
        heading="Overview"
        subheading="Your coaching activity at a glance"
      />

      {/* Stat cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatCard
          title="Total Signups"
          value="12,482"
          sub="All registered users"
        />
        <StatCard
          title="Active Users"
          value="10,000"
          sub="Active in last 30 days"
        />
        <StatCard
          title="Total Subscriptions"
          value="3,549"
          sub="Paid subscriptions"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatCard
          title="Total Revenue"
          value="$128,450"
          sub="Lifetime revenue"
        />
        <StatCard title="Monthly Revenue" value="$32,800" sub="Current month" />
        <StatCard title="Churn Rate" value="3.4%" sub="Monthly churn" />
      </div>

      {/* Charts */}
      <div className="">
        <OverviewCharts />
      </div>

      {/* Tables */}
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-2/3">
          <PlanSummaryTable />
        </div>
        <div className="w-full md:w-1/3">
          <SystemStatus />
        </div>
      </div>
    </div>
  );
}

