"use client";

import { X } from "lucide-react";
import { SubscriptionPlan } from "./MockData";

interface ViewPlanDetailsModalProps {
  isOpen: boolean;
  plan: SubscriptionPlan | null;
  onClose: () => void;
}

export default function ViewPlanDetailsModal({
  isOpen,
  plan,
  onClose,
}: ViewPlanDetailsModalProps) {
  if (!isOpen || !plan) return null;

  const activeFeatures = Object.entries(plan.features)
    .filter(([_, value]) => value)
    .map(([key]) => {
      switch (key) {
        case "aiProjections":
          return "AI Projections";
        case "aiHealthSuggestions":
          return "AI Health Suggestions";
        case "deviceSync":
          return "Device Sync";
        case "prioritySupport":
          return "Priority Support";
        default:
          return key;
      }
    });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md mx-4">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <h2 className="text-lg font-semibold text-gray-900">Plan Details</h2>
          <button
            onClick={onClose}
            className="text-gray-400 cursor-pointer hover:text-gray-600"
          >
            <X />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4 text-sm text-gray-700">
          <div>
            <span className="font-medium">Plan Name:</span> {plan.name}
          </div>
          <div>
            <span className="font-medium">Type:</span> {plan.type}
          </div>
          <div>
            <span className="font-medium">Billing Cycle:</span>{" "}
            {plan.billingCycle}
          </div>
          <div>
            <span className="font-medium">Price:</span> ${plan.price}
          </div>
          <div>
            <span className="font-medium">Projections / Month:</span>{" "}
            {plan.projectionsPerMonth}
          </div>
          <div>
            <span className="font-medium">Status:</span> {plan.status}
          </div>

          <div>
            <span className="font-medium">Features:</span>
            {activeFeatures.length > 0 ? (
              <ul className="list-disc pl-5 mt-1 space-y-1">
                {activeFeatures.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-400 mt-1">No features enabled</p>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 cursor-pointer text-sm bg-gray-100 rounded-lg hover:bg-gray-200"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
