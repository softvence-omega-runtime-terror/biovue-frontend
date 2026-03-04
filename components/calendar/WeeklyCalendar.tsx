"use client";

import CalendarCard from "./CalendarCard";

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

interface Props {
  startDate: Date;
}

export default function WeeklyCalendar({ startDate }: Props) {
  const dates = Array.from({ length: 7 }).map((_, i) => {
    const d = new Date(startDate);
    d.setDate(startDate.getDate() + i);
    return d;
  });

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      {/* Header */}
      <div className="grid grid-cols-7 border-b border-gray-200 bg-gray-50">
        {days.map((day, i) => (
          <div
            key={day}
            className="p-4 text-center border-r border-gray-200 last:border-r-0"
          >
            <p className="text-xs font-medium text-gray-600 uppercase">{day}</p>
            <p className="text-lg font-semibold text-gray-900 mt-1">
              {dates[i].getDate()}
            </p>
          </div>
        ))}
      </div>

      {/* Body - Calendar Grid */}
      <div className="grid grid-cols-7 gap-px bg-gray-200 p-px">
        {/* Row 1 */}
        <div className="bg-white p-3 min-h-45 border-r border-gray-200">
          <CalendarCard
            name="Elena Rodrigues"
            title="Progress Review"
            time="10:00"
            status="missed"
            avatar="/images/avatar2.png"
          />
        </div>

        <EmptyCell />
        <EmptyCell />

        <div className="bg-white p-3 min-h-45 border-r border-gray-200">
          <CalendarCard
            name="Jenny Wilson"
            title="Weekly Review"
            time="10:00"
            status="scheduled"
            avatar="/images/avatar3.png"
          />
        </div>

        <EmptyCell />
        <EmptyCell />
        <EmptyCell />

        {/* Row 2 */}
        <EmptyCell />
        <EmptyCell />

        <div className="bg-white p-3 min-h-45 border-r border-gray-200">
          <CalendarCard
            name="Robert Fox"
            title="Water Intake"
            time="10:00"
            status="missed"
            avatar="/images/avatar4.png"
          />
        </div>

        <div className="bg-white p-3 min-h-45 border-r border-gray-200">
          <CalendarCard
            name="Jacob Jones"
            title="Upper Body"
            time="10:00"
            status="completed"
            avatar="/images/avatar5.png"
          />
        </div>

        <EmptyCell />
        <EmptyCell />
        <EmptyCell />

        {/* Row 3 */}
        {Array.from({ length: 7 }).map((_, i) => (
          <EmptyCell key={`empty-${i}`} />
        ))}
      </div>
    </div>
  );
}

function EmptyCell() {
  return (
    <div className="bg-white p-3 min-h-45 flex items-center justify-center text-gray-400 text-2xl border-r border-gray-200 last:border-r-0 hover:bg-gray-50 cursor-pointer transition">
      +
    </div>
  );
}
