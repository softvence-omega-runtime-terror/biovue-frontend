"use client";
import FiltersDropdown from "@/components/calendar/FilterDropdown";
import WeeklyCalendar from "@/components/calendar/WeeklyCalendar";
import DashboardHeading from "@/components/common/DashboardHeading";
import { ChevronLeft, ChevronRight, Filter, Plus } from "lucide-react";
import { useState } from "react";

export default function CalenderPage() {
  const [view, setView] = useState<"day" | "week" | "month">("week");
  const [openFilter, setOpenFilter] = useState(false);
  const views: Array<"day" | "week" | "month"> = ["day", "week", "month"];
  return (
    <div>
      <div className="flex justify-between">
        <DashboardHeading
          heading="Calender"
          subheading="Manage check-ins, workouts, and reminders"
        />
        <div className="flex items-center gap-4">
          <div className="flex hover:opacity-80 border rounded-lg items-center gap-2 p-4">
            <Plus />
            <button className="cursor-pointer">Add Reminder</button>
          </div>
          <div className="flex  hover:opacity-80 rounded-lg bg-[#0D9488] text-white items-center gap-2 p-4">
            <Plus />
            <button className="cursor-pointer">Schedule Check-in</button>
          </div>
        </div>
      </div>

      <div className="p-8 bg-[#F9FAFB] min-h-screen">
        {/* Top Controls */}
        <div className="flex items-center justify-between mb-6">
          {/* View Toggle */}
          <div className="bg-[#E5E7EB] rounded-lg p-1 flex">
            {views.map((item) => (
              <button
                key={item}
                onClick={() => setView(item)}
                className={`px-6 py-2 text-sm rounded-md capitalize transition ${
                  view === item
                    ? "bg-white shadow text-[#111827]"
                    : "text-[#6B7280]"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Date + Filters */}
          <div className="flex items-center gap-4 relative">
            <div className="flex items-center gap-3 text-sm font-medium text-[#111827]">
              <ChevronLeft className="w-4 h-4 cursor-pointer" />
              <span>Oct 12 - Oct 18, 2023</span>
              <ChevronRight className="w-4 h-4 cursor-pointer" />
            </div>

            <button
              onClick={() => setOpenFilter(!openFilter)}
              className="flex items-center gap-2 border border-[#E5E7EB] px-4 py-2 rounded-lg bg-white text-sm"
            >
              <Filter className="w-4 h-4" />
              All Clients
            </button>

            {openFilter && <FiltersDropdown />}
          </div>
        </div>

        {/* Calendar Grid */}
        <WeeklyCalendar />
      </div>
    </div>
  );
}
