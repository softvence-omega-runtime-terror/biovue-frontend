"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Plus, Filter } from "lucide-react";
import {
  mockPlans,
  SubscriptionPlan,
} from "@/components/AdminDashboard/subscription-plans/MockData";
import SubscriptionPlansTable from "@/components/AdminDashboard/subscription-plans/SubscriptionTables";
import AddPlanModal from "@/components/AdminDashboard/subscription-plans/AddPlanModal";
import EditPlanModal from "@/components/AdminDashboard/subscription-plans/EditPlanModal";
import Toast from "@/components/AdminDashboard/subscription-plans/Toast";
import DashboardHeading from "@/components/common/DashboardHeading";

export default function SubscriptionPlansPage() {
  const searchParams = useSearchParams();
  const planType = searchParams.get("type"); // individual | professional | null

  const [plans, setPlans] = useState<SubscriptionPlan[]>(mockPlans);
  const [billingCycle, setBillingCycle] = useState<
    "All" | "Monthly" | "Yearly"
  >("All");

  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<SubscriptionPlan | null>(
    null,
  );

  const [toast, setToast] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  /* ---------------- FILTER LOGIC ---------------- */

  const filteredPlans = plans.filter((plan) => {
    const matchType = planType ? plan.type.toLowerCase() === planType : true;

    const matchBilling =
      billingCycle === "All" ? true : plan.billingCycle === billingCycle;

    return matchType && matchBilling;
  });

  /* ---------------- CRUD ---------------- */

  const handleAddPlan = (
    newPlan: Omit<SubscriptionPlan, "id" | "createdDate" | "users">,
  ) => {
    const plan: SubscriptionPlan = {
      ...newPlan,
      id: Date.now().toString(),
      createdDate: new Date().toISOString().split("T")[0],
      users: Math.floor(Math.random() * 1000).toString(),
    };
    setPlans((prev) => [...prev, plan]);
    setShowAddModal(false);
    setToast({ message: "Plan added successfully!", type: "success" });
  };

  const handleEditPlan = (updatedPlan: SubscriptionPlan) => {
    setPlans((prev) =>
      prev.map((plan) => (plan.id === updatedPlan.id ? updatedPlan : plan)),
    );
    setShowEditModal(false);
    setSelectedPlan(null);
    setToast({ message: "Plan updated successfully!", type: "success" });
  };

  const handleDeletePlan = (id: string) => {
    setPlans((prev) => prev.filter((plan) => plan.id !== id));
    setToast({ message: "Plan deleted successfully!", type: "success" });
  };

  /* ---------------- UI ---------------- */

  return (
    <div className="min-h-screen">
      <div className="mx-auto">
        {/* Header */}
        <div className="mb-6 flex justify-end items-center">
          <button
            onClick={() => setShowAddModal(true)}
            className="flex items-center gap-2 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700"
          >
            <Plus size={18} />
            Add New Plan
          </button>
        </div>

        <div className="mb-7 flex justify-between items-center">
          <div>
            <DashboardHeading
              heading="Subscription Plans"
              subheading="View and manage subscription plans"
            />
          </div>
          {/* Billing Cycle Filter */}
          <div className="mb-6 flex text-center  items-center gap-3">
            <Filter size={18} className="text-gray-600" />
            <select
              value={billingCycle}
              onChange={(e) => setBillingCycle(e.target.value as any)}
              className="px-6 py-2 border cursor-pointer rounded-lg text-sm"
            >
              <option value="All">All</option>
              <option value="Monthly">Monthly</option>
              <option value="Yearly">Yearly</option>
            </select>
          </div>
        </div>

        {/* Table */}
        <SubscriptionPlansTable
          plans={filteredPlans}
          onEdit={setSelectedPlan}
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
        isOpen={!!selectedPlan}
        plan={selectedPlan}
        onClose={() => setSelectedPlan(null)}
        onSave={handleEditPlan}
      />

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
