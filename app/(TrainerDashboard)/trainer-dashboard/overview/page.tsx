"use client";

import DashboardHeading from "@/components/common/DashboardHeading";
import Actions from "@/components/TrainerDashboard/overview/Actions";
import Clients from "@/components/TrainerDashboard/overview/Clients";
import GrowBusiness from "@/components/TrainerDashboard/overview/GrowBusiness";
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <RecentActivity />
          </div>
          <div>
            <GrowBusiness />
          </div>
        </div>
      </div>
    </div>
  );
}
