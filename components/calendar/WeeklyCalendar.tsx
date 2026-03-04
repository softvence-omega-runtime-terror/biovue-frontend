"use client";

import { CalendarEvent } from "@/app/(TrainerDashboard)/trainer-dashboard/calendar/page";
import CalendarCard from "./CalendarCard";

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

interface Props {
  startDate: Date;
  onEventClick: (event: CalendarEvent) => void;
}

export default function WeeklyCalendar({ startDate, onEventClick }: Props) {
  const dates = Array.from({ length: 7 }).map((_, i) => {
    const d = new Date(startDate);
    d.setDate(startDate.getDate() + i);
    return d;
  });

  return (
    <div className="border border-[#F1F5F9] rounded-2xl overflow-hidden">
      {/* Header */}
      <div className="grid grid-cols-7 border-b border-[#F1F5F9] bg-[#F8FAFC]">
        {days.map((day, i) => (
          <div
            key={day}
            className="py-6 text-center border-r border-[#F1F5F9] last:border-r-0"
          >
            <p className="text-[13px] font-medium text-[#64748B] mb-1">{day}</p>
            <p className="text-xl font-bold text-[#1E293B]">
              {dates[i].getDate()}
            </p>
          </div>
        ))}
      </div>

      {/* Body - Calendar Grid */}
      <div className="grid grid-cols-7 gap-px bg-[#F1F5F9]">
        {/* Row 1 */}
        <div className="bg-white p-4 min-h-55">
          <CalendarCard
            name="Elena Rodrigues"
            title="Progress Review"
            time="10:00"
            status="missed"
            avatar="/images/avatar2.png"
            onClick={() =>
              onEventClick({
                name: "Elena Rodrigues",
                title: "Progress Review",
                time: "10:00",
                status: "missed",
                avatar: "/images/avatar2.png",
              })
            }
          />
        </div>

        <EmptyCell />
        <EmptyCell />

        <div className="bg-white p-4 min-h-55">
          <CalendarCard
            name="Jenny Wilson"
            title="Weekly Review"
            time="10:00"
            status="scheduled"
            avatar="/images/avatar3.png"
            onClick={() =>
              onEventClick({
                name: "Jenny Wilson",
                title: "Weekly Review",
                time: "10:00",
                status: "scheduled",
                avatar: "/images/avatar3.png",
              })
            }
          />
        </div>

        <EmptyCell />
        <EmptyCell />
        <EmptyCell />

        {/* Row 2 */}
        <EmptyCell />
        <EmptyCell />

        <div className="bg-white p-4 min-h-55">
          <CalendarCard
            name="Robert Fox"
            title="Water Intake"
            time="10:00"
            status="missed"
            avatar="/images/avatar4.png"
            onClick={() =>
              onEventClick({
                name: "Robert Fox",
                title: "Water Intake",
                time: "10:00",
                status: "missed",
                avatar: "/images/avatar4.png",
              })
            }
          />
        </div>

        <div className="bg-white p-4 min-h-55">
          <CalendarCard
            name="Jacob Jones"
            title="Upper Body"
            time="10:00"
            status="completed"
            avatar="/images/avatar5.png"
            onClick={() =>
              onEventClick({
                name: "Jacob Jones",
                title: "Upper Body",
                time: "10:00",
                status: "completed",
                avatar: "/images/avatar5.png",
              })
            }
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
    <div className="bg-white p-4 min-h-55 flex items-center justify-center text-[#CBD5E1] text-3xl font-light hover:bg-[#F8FAFC] cursor-pointer transition-colors">
      <div className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white hover:shadow-sm transition-all">
        +
      </div>
    </div>
  );
}
