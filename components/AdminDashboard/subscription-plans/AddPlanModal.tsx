"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { SubscriptionPlan } from "./MockData";

interface AddPlanModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (plan: Omit<SubscriptionPlan, "id" | "createdDate" | "users">) => void;
}

function Toggle({
  checked,
  onChange,
}: {
  checked: boolean;
  onChange: (val: boolean) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onChange(!checked)}
      className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
        checked ? "bg-[#4F39F6]" : "bg-[#D1D5DC]"
      }`}
    >
      <span
        className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
          checked ? "translate-x-4" : "translate-x-0"
        }`}
      />
    </button>
  );
}
type PlanType = "Individual" | "Professional";
type BillingCycle = "Monthly" | "Yearly" | "Annual";

interface FormData {
  name: string;
  type: PlanType;
  billingCycle: BillingCycle;
  price: number;
  status: "Active";
  features: {
    aiProjections: boolean;
    aiHealthSuggestions: boolean;
    coachRecommendations: boolean;
    deviceSync: boolean;
    prioritySupport: boolean;
  };
  projectionsPerMonth: number;
  isActive: boolean;
  featuresList: string[];
}

export default function AddPlanModal({
  isOpen,
  onClose,
  onAdd,
}: AddPlanModalProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    type: "Individual",
    billingCycle: "Monthly",
    price: 0,
    status: "Active",
    features: {
      aiProjections: false,
      aiHealthSuggestions: false,
      coachRecommendations: false,
      deviceSync: false,
      prioritySupport: false,
    },
    projectionsPerMonth: 0,
    isActive: true,
    featuresList: [],
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd(formData);
    setFormData({
      name: "",
      type: "Individual",
      billingCycle: "Monthly",
      price: 0,
      status: "Active",
      features: {
        aiProjections: false,
        aiHealthSuggestions: false,
        coachRecommendations: false,
        deviceSync: false,
        prioritySupport: false,
      },
      projectionsPerMonth: 0,
      isActive: true,
      featuresList: [] as string[],
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl mx-4 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Add New Plan</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Left Column - Main Fields */}
            <div className="md:col-span-2 space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Plan Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter plan name"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Plan Type
                  </label>
                  <select
                    value={formData.type}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        type: e.target.value as "Individual" | "Professional",
                      })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="Individual">Individual</option>
                    <option value="Professional">Professional</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Billing Cycle
                  </label>
                  <select
                    value={formData.billingCycle}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        billingCycle: e.target.value as
                          | "Monthly"
                          | "Yearly"
                          | "Annual",
                      })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="Monthly">Monthly</option>
                    <option value="Yearly">Yearly</option>
                    <option value="Annual">Annual</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Price
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="number"
                      value={formData.price}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          price: parseFloat(e.target.value),
                        })
                      }
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="0"
                      min="0"
                      step="0.01"
                    />
                    <span className="px-3 py-2 bg-gray-100 text-gray-600 rounded-lg">
                      USD
                    </span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Projections per month
                  </label>
                  <input
                    type="number"
                    value={formData.projectionsPerMonth}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        projectionsPerMonth: parseInt(e.target.value),
                      })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="0"
                    min="0"
                  />
                </div>
                {/* features */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Features
                  </label>
                  <div className="w-full min-h-10 px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-700">
                    {formData.featuresList.length > 0 ? (
                      <ul className="list-disc pl-5 space-y-1">
                        {formData.featuresList.map((feature) => (
                          <li key={feature}>{feature}</li>
                        ))}
                      </ul>
                    ) : (
                      <span className="text-gray-400">
                        No features selected yet
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Features */}
            <div className="md:col-span-1">
              <label className="block text-sm font-medium text-gray-700 mb-4">
                Features List
              </label>
              <div className="space-y-3">
                {[
                  { key: "aiProjections", label: "AI Projections" },
                  {
                    key: "aiHealthSuggestions",
                    label: "AI Health Suggestions",
                  },
                  {
                    key: "coachRecommendations",
                    label: "Coach Recommendations",
                  },
                  { key: "deviceSync", label: "Device Sync" },
                  { key: "prioritySupport", label: "Priority Support" },
                ].map((feature) => (
                  <div
                    key={feature.key}
                    className="flex items-center justify-between gap-3"
                  >
                    <span className="text-sm text-gray-700">
                      {feature.label}
                    </span>

                    <Toggle
                      checked={
                        formData.features[
                          feature.key as keyof typeof formData.features
                        ]
                      }
                      onChange={(val) =>
                        setFormData({
                          ...formData,
                          features: {
                            ...formData.features,
                            [feature.key]: val,
                          },
                          featuresList: val
                            ? [...formData.featuresList, feature.label] // add feature
                            : formData.featuresList.filter(
                                (f) => f !== feature.label,
                              ), // remove feature
                        })
                      }
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-[#00A63E]">
                Plan is Active
              </span>
              <Toggle
                checked={formData.isActive}
                onChange={(val) => setFormData({ ...formData, isActive: val })}
              />
            </div>
          </div>
          {/* Form Actions */}
          <div className="flex gap-3 justify-end mt-8 pt-6 ">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2  cursor-pointer text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-[#0D9488] text-white rounded-lg hover:opacity-80 cursor-pointer"
            >
              Add Plan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
