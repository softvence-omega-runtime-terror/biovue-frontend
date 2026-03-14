"use client";

import { useState } from "react";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import ClientDetailModal from "@/components/TrainerDashboard/overview/ClientNeedAttentionModal";
import {
  ClientNeedingAttention,
  clientsNeedingAttention,
} from "./ClientsAttentiondata";

const getStatusColor = (status: "need-attention" | "on-track" | "inactive") => {
  switch (status) {
    case "need-attention":
      return "bg-[#D3BB5B1A] text-[#D3BB5B]";
    case "on-track":
      return "bg-[#22C55E1A] text-[#22C55E]";
    case "inactive":
      return "bg-[#9AAEB24D] text-[#5F6F73]";
  }
};

const getTurningRateColor = (rate: number) => {
  if (rate < 30) return "text-green-600";
  if (rate < 60) return "text-yellow-600";
  return "text-red-600";
};

export default function ClientsNeedingAttentionPage() {
  const [selectedClient, setSelectedClient] =
    useState<ClientNeedingAttention | null>(null);

  return (
    <div className="min-h-screen ">
      <div className="">
        {/* Header */}
        <div className="mb-4 cursor-pointer ">
          <Link
            href="/trainer-dashboard"
            className="flex items-center hover:opacity-80 gap-2"
          >
            <button className="  rounded-lg transition-all">
              <ChevronLeft className="w-5 h-5 cursor-pointer " />
            </button>
            <span>Back to Overview</span>
          </Link>
        </div>
        <div className="flex flex-col mb-8 gap-3">
          <h1 className="text-[20px] font-medium">Clients Needing Attention</h1>
          <p className="text-[14px] font-normal">
            {clientsNeedingAttention.length} clients require immediate attention
          </p>
        </div>

        {/* Table */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                    CLIENT NAME
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                    GOAL
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                    STATUS
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                    TURNING POSSIBILITY
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                    LAST ACTIVITY
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                    ACTION
                  </th>
                </tr>
              </thead>
              <tbody>
                {clientsNeedingAttention.map((client) => (
                  <tr
                    key={client.id}
                    className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                      {client.name}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {client.goal}
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                          client.status,
                        )}`}
                      >
                        Need Attention
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div
                            className={`h-full transition-all ${
                              client.turningRate < 30
                                ? "bg-green-500"
                                : client.turningRate < 60
                                  ? "bg-yellow-500"
                                  : "bg-red-500"
                            }`}
                            style={{ width: `${client.turningRate}%` }}
                          />
                        </div>
                        <span
                          className={`font-semibold text-sm ${getTurningRateColor(
                            client.turningRate,
                          )}`}
                        >
                          {client.turningRate}%
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {client.lastActivity}
                    </td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => setSelectedClient(client)}
                        className="px-4 cursor-pointer py-1.5 rounded-full border border-teal-600 text-teal-600 text-sm font-medium hover:bg-teal-50 transition-colors"
                      >
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Detail Modal */}
      {selectedClient && (
        <ClientDetailModal
          client={selectedClient}
          onClose={() => setSelectedClient(null)}
        />
      )}
    </div>
  );
}
