"use client";

import CalendarCard from "./CalendarCard";

const days = ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"];
const dates = [18, 19, 20, 21, 22, 23, 24];

export default function WeeklyCalendar() {
  return (
    <div className="bg-white rounded-xl border border-[#E5E7EB] overflow-hidden">
      {/* Header */}
      <div className="grid grid-cols-7 border-b border-[#E5E7EB]">
        {days.map((day, i) => (
          <div key={day} className="p-4 text-center">
            <p className="text-xs text-[#6B7280]">{day}</p>
            <p className="text-sm font-medium text-[#111827]">{dates[i]}</p>
          </div>
        ))}
      </div>

      {/* Body */}
      <div className="grid grid-cols-7 auto-rows-[160px]">
        {/* Example Filled Cells */}
        <CalendarCard
          name="Elena Rodrigues"
          title="Progress Review"
          time="10:00"
          status="missed"
        />

        <EmptyCell />
        <EmptyCell />

        <CalendarCard
          name="Jenny Wilson"
          title="Weekly Review"
          time="10:00"
          status="scheduled"
        />

        <EmptyCell />
        <EmptyCell />
        <EmptyCell />

        {/* Second Row Example */}
        <EmptyCell />
        <EmptyCell />

        <CalendarCard
          name="Robert Fox"
          title="Water Intake"
          time="10:00"
          status="missed"
        />

        <CalendarCard
          name="Jacob Jones"
          title="Upper Body"
          time="10:00"
          status="completed"
        />

        <EmptyCell />
        <EmptyCell />
        <EmptyCell />
      </div>
    </div>
  );
}

function EmptyCell() {
  return (
    <div className="border border-[#F3F4F6] flex items-center justify-center text-[#9CA3AF] text-xl">
      +
    </div>
  );
}