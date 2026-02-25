"use client";

import DashboardHeading from "@/components/common/DashboardHeading";
import Actions from "@/components/TrainerDashboard/overview/Actions";
import Clients from "@/components/TrainerDashboard/overview/Clients";
import RecentActivity from "@/components/TrainerDashboard/overview/RecentActivities";
import StatCards from "@/components/TrainerDashboard/overview/StatCard";

export default function TrainerOverviewPage() {
  return (
    <div className="min-h-screen ">
      <div className="mb-4 md:mb-8">
        <DashboardHeading
          heading="Overview"
          subheading="Your coaching activity at a glance"
        />
      </div>
      <div className="space-y-5 md:space-y-10">
        <StatCards />
        <Clients />
        <Actions />
        <RecentActivity />
      </div>
    </div>
  );
}
