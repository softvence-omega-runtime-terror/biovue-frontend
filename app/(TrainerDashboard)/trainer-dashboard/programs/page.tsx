"use client";

import { useState, useMemo } from "react";
import DashboardHeading from "@/components/common/DashboardHeading";
import StatCards from "@/components/TrainerDashboard/programs/StatCard";
import {
  programs,
  Program,
} from "@/components/TrainerDashboard/programs/ProgramsData";
import { Funnel, Plus, ArrowDownUp } from "lucide-react";
import ProgramsTable from "@/components/TrainerDashboard/programs/ProgramsTable";

export default function ProgramsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<Program["status"] | "all">(
    "all",
  );
  const [sortOption, setSortOption] = useState("Most Recent Activity");
  const [showStatusDropdown, setShowStatusDropdown] = useState(false);
  const [showSortDropdown, setShowSortDropdown] = useState(false);

  // Derive dropdown options from programs data
  const statusOptions = [
    { value: "all", label: "All Programs" },
    ...Array.from(new Set(programs.map((p) => p.status))).map((status) => ({
      value: status,
      label: status.charAt(0) + status.slice(1).toLowerCase(),
    })),
  ];

  const sortOptions = [
    "Most Recent Activity",
    ...Array.from(new Set(programs.map((p) => p.primaryGoal))),
  ];

  // Filter and sort programs based on search, status, and sort
  const filteredPrograms = useMemo(() => {
    let result = [...programs];

    // Search by name
    if (searchTerm.trim()) {
      const lower = searchTerm.toLowerCase();
      result = result.filter((p) => p.name.toLowerCase().includes(lower));
    }

    // Status filter
    if (statusFilter !== "all") {
      result = result.filter((p) => p.status === statusFilter);
    }

    // Sort
    switch (sortOption) {
      case "Most Recent Activity":
        // since updatedAgo is string, just keep original order for demo
        break;
      default:
        // Sort by primaryGoal
        result = result.sort((a, b) =>
          a.primaryGoal.localeCompare(b.primaryGoal),
        );
        break;
    }

    return result;
  }, [searchTerm, statusFilter, sortOption]);
  return (
    <div className="space-y-5 md:space-y-10">
      {/* header */}
      <div className="flex items-start justify-between">
        <DashboardHeading
          heading="Programs"
          subheading="Create, manage, and assign coaching programs to your clients"
        />
        <div className="mb-6 flex justify-end items-center">
          <button className="flex cursor-pointer items-center gap-2 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700">
            <Plus size={18} />
            Invite Client
          </button>
        </div>
      </div>

      <StatCards />

      {/* Filters and search bar */}
      <div className="flex flex-wrap gap-3 items-center">
        {/* Search */}
        <input
          type="text"
          placeholder="Search programs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1 min-w-50 px-4 py-2 border bg-white rounded w-full max-w-sm focus:ring-2 focus:ring-teal-500"
        />

        {/* Status Dropdown */}
        <div className="relative bg-white">
          <button
            onClick={() => setShowStatusDropdown(!showStatusDropdown)}
            className="flex cursor-pointer items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50"
          >
            <Funnel size={16} className="text-[#5F6F73]" />
            {statusOptions.find((o) => o.value === statusFilter)?.label}
          </button>
          {showStatusDropdown && (
            <div className="absolute mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
              {statusOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => {
                    setStatusFilter(option.value as Program["status"] | "all");
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

        {/* Sort Dropdown */}
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

      <ProgramsTable programs={filteredPrograms} />
    </div>
  );
}
