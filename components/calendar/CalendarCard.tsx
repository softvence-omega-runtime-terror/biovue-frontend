interface Props {
  title: string;
  name: string;
  time: string;
  status: "missed" | "scheduled" | "completed";
}

export default function CalendarCard({ title, name, time, status }: Props) {
  const statusStyles = {
    missed: "bg-red-100 text-red-600",
    scheduled: "bg-purple-100 text-purple-600",
    completed: "bg-green-100 text-green-600",
  };

  return (
    <div className="border border-[#F3F4F6] p-3 relative">
      <div className="absolute top-2 right-2">
        <span
          className={`text-[10px] px-2 py-1 rounded-full ${
            statusStyles[status]
          }`}
        >
          {status}
        </span>
      </div>

      <div className="bg-white shadow-sm border border-[#E5E7EB] rounded-lg p-3">
        <h4 className="text-sm font-medium text-[#111827] mb-1">{title}</h4>
        <p className="text-xs text-[#6B7280]">{name}</p>
        <p className="text-xs text-[#9CA3AF] mt-2">{time}</p>
      </div>
    </div>
  );
}
