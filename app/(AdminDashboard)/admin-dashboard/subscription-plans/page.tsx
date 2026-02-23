"use client";

import { useState } from "react";
import { Plus, Filter } from "lucide-react";
import {
  mockPlans,
  SubscriptionPlan,
} from "@/components/AdminDashboard/subscription-plans/MockData";
import SubscriptionPlansTable from "@/components/AdminDashboard/subscription-plans/SubscriptionTables";
import AddPlanModal from "@/components/AdminDashboard/subscription-plans/AddPlanModal";
import EditPlanModal from "@/components/AdminDashboard/subscription-plans/EditPlanModal";
import Toast from "@/components/AdminDashboard/subscription-plans/Toast";

export default function SubscriptionPlansPage() {
  const [plans, setPlans] = useState<SubscriptionPlan[]>(mockPlans);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<SubscriptionPlan | null>(
    null,
  );
  const [filterType, setFilterType] = useState("All");
  const [toast, setToast] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  const handleAddPlan = (
    newPlan: Omit<SubscriptionPlan, "id" | "createdDate" | "users">,
  ) => {
    const plan: SubscriptionPlan = {
      ...newPlan,
      id: Date.now().toString(),
      createdDate: new Date().toISOString().split("T")[0],
      users: Math.floor(Math.random() * 1000),
    };
    setPlans([...plans, plan]);
    setShowAddModal(false);
    setToast({ message: "Plan added successfully!", type: "success" });
  };

  const handleEditPlan = (updatedPlan: SubscriptionPlan) => {
    setPlans(
      plans.map((plan) => (plan.id === updatedPlan.id ? updatedPlan : plan)),
    );
    setShowEditModal(false);
    setSelectedPlan(null);
    setToast({ message: "Plan updated successfully!", type: "success" });
  };

  const handleDeletePlan = (id: string) => {
    setPlans(plans.filter((plan) => plan.id !== id));
    setToast({ message: "Plan deleted successfully!", type: "success" });
  };

  const handleEditClick = (plan: SubscriptionPlan) => {
    setSelectedPlan(plan);
    setShowEditModal(true);
  };

  const filteredPlans =
    filterType === "All"
      ? plans
      : plans.filter((plan) => plan.type === filterType);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Subscription Plans
              </h1>
              <p className="text-gray-600 mt-1">
                View and manage all platform users
              </p>
            </div>
            <button
              onClick={() => setShowAddModal(true)}
              className="flex items-center gap-2 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors w-fit"
            >
              <Plus size={20} />
              Add New Plan
            </button>
          </div>
        </div>

        {/* Filter Section */}
        <div className="mb-6 flex items-center gap-3">
          <Filter size={20} className="text-gray-600" />
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          >
            <option value="All">All</option>
            <option value="Individual">Individual</option>
            <option value="Professional">Professional</option>
          </select>
        </div>

        {/* Table Section */}
        <SubscriptionPlansTable
          plans={filteredPlans}
          onEdit={handleEditClick}
          onDelete={handleDeletePlan}
        />
      </div>

      {/* Modals */}
      <AddPlanModal
        isOpen={showAddModal}
        onClose={() => setShowAddModal(false)}
        onAdd={handleAddPlan}
      />

      <EditPlanModal
        isOpen={showEditModal}
        plan={selectedPlan}
        onClose={() => {
          setShowEditModal(false);
          setSelectedPlan(null);
        }}
        onSave={handleEditPlan}
      />

      {/* Toast Notification */}
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  );
}
