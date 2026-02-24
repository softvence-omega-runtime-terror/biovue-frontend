"use client";

import BannersTable from "@/components/AdminDashboard/banner-management/BannersTable";
import DashboardHeading from "@/components/common/DashboardHeading";
import { Plus } from "lucide-react";

export default function BannerManagement() {
  return (
    <div>
      {/* header */}
      <div className="flex justify-between items-center">
        <DashboardHeading
          heading="Banner Management"
          subheading="Create, schedule, and control all advertising banners across the platform."
        />
        <div className="mb-6 flex justify-end items-center">
          <button className="flex cursor-pointer items-center gap-2 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700">
            <Plus size={18} />
            Add New Banner
          </button>
        </div>
      </div>

      <BannersTable />
    </div>
  );
}
