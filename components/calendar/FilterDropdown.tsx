"use client";

export default function FiltersDropdown({
  type,
}: {
  type: "client" | "type";
}) {
  return (
    <div className="absolute top-14 right-0 bg-[#3F3A3A] text-white p-6 rounded-md w-64 shadow-xl z-50">
      {type === "client" ? (
        <>
          <p className="mb-2 font-medium">All clients</p>
          <ul className="space-y-1 text-xs text-gray-200">
            <li>All Clients</li>
            <li>Alex Johnson</li>
            <li>Sarah Miller</li>
            <li>Marcus Chen</li>
            <li>Elena Rodriguez</li>
          </ul>
        </>
      ) : (
        <>
          <p className="mb-2 font-medium">All Types</p>
          <ul className="space-y-1 text-xs text-gray-200">
            <li>All Status</li>
            <li>Scheduled</li>
            <li>Completed</li>
            <li>Missed</li>
          </ul>
        </>
      )}
    </div>
  );
}