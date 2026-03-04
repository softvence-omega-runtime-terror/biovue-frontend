"use client";

import FiltersDropdown from "@/components/calendar/FilterDropdown";
import WeeklyCalendar from "@/components/calendar/WeeklyCalendar";
import DashboardHeading from "@/components/common/DashboardHeading";
import { ChevronLeft, ChevronRight, Filter, Plus } from "lucide-react";
import { useState } from "react";

export default function CalendarPage() {
  const [view, setView] = useState<"day" | "week" | "month">("week");

  const [currentDate, setCurrentDate] = useState(new Date());

  const [openClientFilter, setOpenClientFilter] = useState(false);
  const [openTypeFilter, setOpenTypeFilter] = useState(false);

  const [selectedClient, setSelectedClient] = useState("All Clients");
  const [selectedType, setSelectedType] = useState("All Types");

  const views: Array<"day" | "week" | "month"> = ["day", "week", "month"];

  // 🔹 Helpers
  const getWeekRange = (date: Date) => {
    const start = new Date(date);
    start.setDate(date.getDate() - date.getDay());

    const end = new Date(start);
    end.setDate(start.getDate() + 6);

    return { start, end };
  };

  const { start, end } = getWeekRange(currentDate);

  const formatRange = (s: Date, e: Date) =>
    `${s.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    })} - ${e.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    })}`;

  const changeWeek = (direction: "prev" | "next") => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() + (direction === "next" ? 7 : -7));
    setCurrentDate(newDate);
  };

  return (
    <div className="min-h-screen ">
      {/* Header */}

      <div className="mb-5 flex flex-col md:flex-row md:justify-between md:items-start">
        <DashboardHeading
          heading="Calendar"
          subheading="Manage check-ins, workouts, and reminders"
        />
        <div className="flex ietms-center gap-4">
          <button className="flex p-4 text-sm cursor-pointer border rounded-lg hover:opacity-80 items-center gap-2">
            <Plus size={14} /> <span>Add Reminder</span>
          </button>
          <button className="flex p-4 text-sm cursor-pointer bg-[#0D9488] text-white border rounded-lg hover:opacity-80 items-center gap-2">
            <Plus size={14} /> <span>Schedule Check-in</span>
          </button>
        </div>
      </div>

      {/* Top Controls */}
      <div className="bg-white rounded-lg px-3 md:px-6  py-2 mb-6">
        <div className="flex items-center justify-between">
          {/* View Toggle */}
          <div className="bg-[#0FA4A926] rounded-lg p-3 flex gap-4">
            {views.map((item) => (
              <button
                key={item}
                onClick={() => setView(item)}
                className={`px-6 py-2 text-sm rounded-md capitalize transition font-medium ${
                  view === item
                    ? "bg-white text-gray-900 shadow-sm"
                    : "text-[gray-600] hover:text-gray-900"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Date Navigation + Filters */}
          <div className="flex items-center gap-6">
            {/* Date Navigation */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => changeWeek("prev")}
                className="p-1 hover:bg-gray-100 rounded"
              >
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </button>

              <span className="text-sm font-medium text-gray-900 whitespace-nowrap">
                {formatRange(start, end)}
              </span>

              <button
                onClick={() => changeWeek("next")}
                className="p-1 hover:bg-gray-100 rounded"
              >
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            {/* Filter Buttons */}
            <div className="flex items-center gap-3 relative">
              {/* Client Filter */}
              <button
                onClick={() => {
                  setOpenClientFilter((v) => !v);
                  setOpenTypeFilter(false);
                }}
                className="flex items-center gap-2 border px-4 py-2 rounded-lg bg-white text-sm"
              >
                <Filter className="w-4 h-4" />
                {selectedClient}
              </button>

              {/* Type Filter */}
              <button
                onClick={() => {
                  setOpenTypeFilter((v) => !v);
                  setOpenClientFilter(false);
                }}
                className="flex items-center gap-2 border px-4 py-2 rounded-lg bg-white text-sm"
              >
                <Filter className="w-4 h-4" />
                {selectedType}
              </button>

              {openClientFilter && <FiltersDropdown type="client" />}
              {openTypeFilter && <FiltersDropdown type="type" />}
            </div>
          </div>
        </div>
      </div>

      {/* Calendar */}
      <div className="bg-white rounded-lg">
        <WeeklyCalendar startDate={start} />
      </div>
    </div>
  );
}
