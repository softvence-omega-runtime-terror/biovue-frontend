"use client";

import { useState } from "react";
import DashboardHeading from "@/components/common/DashboardHeading";
import ClientsTable from "@/components/TrainerDashboard/overview/ClientsTable";
import {
  clients as allClients,
  Client,
} from "@/components/TrainerDashboard/overview/data";
import { ArrowDownUp, Funnel, UserPlus } from "lucide-react";

export default function ClientsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<Client["status"] | "all">(
    "all",
  );
  const [sortOption, setSortOption] = useState("Most Recent Activity");
  const [showStatusDropdown, setShowStatusDropdown] = useState(false);

  const [showSortDropdown, setShowSortDropdown] = useState(false);
  const statusOptions = [
    { value: "all", label: "All Clients" },
    { value: "on-track", label: "On Track" },
    { value: "need-attention", label: "Needs Attention" },
    { value: "inactive", label: "Inactive" },
  ];

  const sortOptions = [
    "Most Recent Activity",
    "Least Recent Activity",
    "Name (A-Z)",
    "Name (Z-A)",
  ];

  // Filter logic
  const filteredClients = allClients.filter((client) => {
    const matchesSearch =
      client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.goal.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      statusFilter === "all" || client.status === statusFilter;
    return matchesSearch && matchesStatus;
  });
  // Sort logic
  const SorteredClients = allClients.sort((a, b) => {
    if (sortOption === "Name (A-Z)") return a.name.localeCompare(b.name);
    if (sortOption === "Name (Z-A)") return b.name.localeCompare(a.name);
    // Activity-based sorting can be extended with real timestamps
    return 0;
  });
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <DashboardHeading
          heading="Clients"
          subheading="Manage and monitor your coaching roster"
        />
        <div className="mb-6 flex justify-end items-center">
          <button className="flex cursor-pointer items-center gap-2 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700">
            <UserPlus size={18} />
            Invite Client
          </button>
        </div>
      </div>
      {/* Summary cards */}
      <div className="flex flex-wrap gap-4">
        <div className="px-4 py-3 border rounded-lg bg-white">
          Total Clients: {allClients.length}
        </div>
        <div className="px-4 py-3 border rounded-lg bg-[#C7343405] text-[#C73434]">
          Needs Attention:{" "}
          {allClients.filter((c) => c.status === "need-attention").length}
        </div>
        <div className="px-4 py-3 border rounded-lg bg-white">
          Active This Week: 18
        </div>
      </div>
      <div className="flex flex-wrap gap-3 items-center py-3">
        {/* Search */}
        <input
          type="text"
          placeholder="Search clients..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1 min-w-[200px] px-4 py-2 border bg-white rounded w-full max-w-sm focus:ring-2 focus:ring-teal-500"
        />

        {/* Status Dropdown */}
        <div className="relative bg-white">
          <button
            onClick={() => setShowStatusDropdown(!showStatusDropdown)}
            className="flex cursor-pointer items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50"
          >
            <span className="flex items-center gap-2">
              {/* Only show funnel icon before the first option (All Clients) */}

              <Funnel size={16} className="text-[#5F6F73]" />
            </span>
            {statusOptions.find((o) => o.value === statusFilter)?.label}
          </button>

          {showStatusDropdown && (
            <div className="absolute mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
              {statusOptions.map((option, index) => (
                <button
                  key={option.value}
                  onClick={() => {
                    setStatusFilter(option.value as Client["status"] | "all");
                    setShowStatusDropdown(false);
                  }}
                  className={`w-full cursor-pointer px-3 py-2 text-left flex justify-between items-center hover:bg-gray-100 ${
                    statusFilter === option.value ? "bg-gray-100" : ""
                  }`}
                >
                  {option.label}
                  {statusFilter === option.value && (
                    <svg
                      className="w-5 h-5 text-[#0D9488]"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19l12-12-1.41-1.41z" />
                    </svg>
                  )}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* sort */}
        <div className="relative bg-white">
          <button
            onClick={() => {
              setShowSortDropdown(!showSortDropdown);
              setShowStatusDropdown(false);
            }}
            className="flex cursor-pointer items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50"
          >
            <ArrowDownUp size={16} className="text-[#5F6F73]" />
            {sortOption}
          </button>

          {showSortDropdown && (
            <div className="absolute mt-2 w-52 bg-white border border-gray-300 rounded-lg shadow-lg z-10 right-0">
              {sortOptions.map((option) => (
                <button
                  key={option}
                  onClick={() => {
                    setSortOption(option);
                    setShowSortDropdown(false);
                  }}
                  className="w-full cursor-pointer px-4 py-2.5 text-left text-sm flex justify-between items-center hover:bg-gray-100"
                >
                  {option}
                  {sortOption === option && (
                    <svg
                      className="w-5 h-5 text-[#0D9488]"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19l12-12-1.41-1.41z" />
                    </svg>
                  )}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Table */}
      <ClientsTable clients={filteredClients} />
    </div>
  );
}
