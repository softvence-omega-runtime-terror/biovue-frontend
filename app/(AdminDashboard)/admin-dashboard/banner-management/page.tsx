"use client";

import AddEditBannerModal from "@/components/AdminDashboard/banner-management/AddEditBanner";
import BannersTable from "@/components/AdminDashboard/banner-management/BannersTable";
import { Banner } from "@/components/AdminDashboard/banner-management/data";
import DashboardHeading from "@/components/common/DashboardHeading";
import { Plus } from "lucide-react";
import { useState } from "react";

export default function BannerManagement() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingBanner, setEditingBanner] = useState<Banner | null>(null);

  const handleAddNew = () => {
    setEditingBanner(null); // clear any edit state
    setIsModalOpen(true);
  };

  const handleEdit = (banner: Banner) => {
    setEditingBanner(banner);
    setIsModalOpen(true);
  };

  const handleSave = (data: Partial<Banner>) => {
    if (editingBanner) {
      // TODO: update banner in state/API
      console.log("Update banner:", { ...editingBanner, ...data });
    } else {
      // TODO: add new banner to state/API
      console.log("Add new banner:", data);
    }
    setIsModalOpen(false);
  };
  return (
    <div>
      {/* header */}
      <div className="flex justify-between items-center">
        <DashboardHeading
          heading="Banner Management"
          subheading="Create, schedule, and control all advertising banners across the platform."
        />
        <div className="mb-6 flex justify-end items-center">
          <button
            onClick={handleAddNew}
            className="flex cursor-pointer items-center gap-2 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700"
          >
            <Plus size={18} />
            Add New Banner
          </button>
        </div>
      </div>

      <BannersTable
        onEdit={(banner) => {
          setEditingBanner(banner);
          setIsModalOpen(true);
        }}
      />

      <AddEditBannerModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSave}
        existingBanner={editingBanner}
      />
    </div>
  );
}
