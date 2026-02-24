"use client";

import { AlertCircleIcon, Edit2, MoreVertical, Trash2 } from "lucide-react";
import { SubscriptionPlan } from "./MockData";
import { useState } from "react";
import ViewPlanDetailsModal from "./view-details";

interface SubscriptionPlansTableProps {
  plans: SubscriptionPlan[];
  onEdit: (plan: SubscriptionPlan) => void;
  onDelete: (id: string) => void;
}

export default function SubscriptionPlansTable({
  plans,
  onEdit,
  onDelete,
}: SubscriptionPlansTableProps) {
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);
  const [selectedPlan, setSelectedPlan] = useState<SubscriptionPlan | null>(
    null,
  );
  const [isViewOpen, setIsViewOpen] = useState(false);
  const getTypeColor = (type: string) => {
    if (type === "Individual") {
      return "bg-[#8746E726] text-[#8746E7] border-[#8746E7]";
    }
    return "bg-[#0FA4A926] text-[#0FA4A9] border-[#0FA4A9]";
  };

  return (
    <div className=" rounded-lg shadow overflow-visible">
      <table className="w-full">
        <thead className="bg-[#0FA4A91A] border-b border-gray-200">
          <tr>
            <th className="px-6 py-4 text-left text-base font-medium text-gray-700 uppercase tracking-wider">
              Users
            </th>
            <th className="px-6 py-4 text-left text-base font-medium text-gray-700 uppercase tracking-wider">
              Plan Type
            </th>
            <th className="px-6 py-4 text-left text-base font-medium text-gray-700 uppercase tracking-wider">
              Billing Cycle
            </th>
            <th className="px-6 py-4 text-left text-base font-medium text-gray-700 uppercase tracking-wider">
              Price
            </th>
            <th className="px-6 py-4 text-left text-base font-medium text-gray-700 uppercase tracking-wider">
              Status
            </th>
            <th className="px-6 py-4 text-left text-base font-medium text-gray-700 uppercase tracking-wider">
              Created Date
            </th>
            <th className="px-6 py-4 text-left text-base font-medium text-gray-700 uppercase tracking-wider">
              {""}
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {plans.map((plan) => (
            <tr key={plan.id} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {plan.users}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span
                  className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold ${getTypeColor(
                    plan.type,
                  )}`}
                >
                  {plan.type}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {plan.billingCycle}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                ${plan.price.toFixed(2)}/mo
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="flex items-center gap-2 text-sm text-[#22C55E]">
                  <span className="w-2 h-2 bg-[#22C55E] rounded-full"></span>
                  {plan.status}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {plan.createdDate}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="relative">
                  <button
                    onClick={() =>
                      setOpenMenuId(openMenuId === plan.id ? null : plan.id)
                    }
                    className="p-2 cursor-pointer text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100"
                  >
                    <MoreVertical size={18} />
                  </button>

                  {openMenuId === plan.id && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-10 border border-gray-200">
                      <button
                        onClick={() => {
                          setSelectedPlan(plan);
                          setIsViewOpen(true);
                          setOpenMenuId(null);
                        }}
                        className="w-full cursor-pointer text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2"
                      >
                        <AlertCircleIcon />
                        View Details
                      </button>
                      <button
                        onClick={() => {
                          onEdit(plan);
                          setOpenMenuId(null);
                        }}
                        className="w-full cursor-pointer text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2"
                      >
                        <Edit2 /> Edit Plan
                      </button>
                      <button
                        onClick={() => {
                          onDelete(plan.id);
                          setOpenMenuId(null);
                        }}
                        className="w-full cursor-pointer text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 flex items-center gap-2"
                      >
                        <Trash2 /> Delete Plan
                      </button>
                    </div>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ViewPlanDetailsModal
        isOpen={isViewOpen}
        plan={selectedPlan}
        onClose={() => {
          setIsViewOpen(false);
          setSelectedPlan(null);
        }}
      />
    </div>
  );
}
