"use client";

import Image from "next/image";

const inquiries = [
  {
    id: 1,
    name: "David Chen",
    tag: "FAT LOSS",
    message:
      "I've Been Struggling With Late-Night Snacking. How Does Your Program Handle Cravings?",
  },
  {
    id: 2,
    name: "Esther Howard",
    tag: "Muscle Gain",
    message:
      "Do I Need A Full Gym Membership For This Or Can I Work From Home?",
  },
  {
    id: 3,
    name: "Cameron Williamson",
    tag: "Sleep Recovery",
    message:
      "I've Been Struggling With Late-Night Snacking. How Does Your Program Handle Cravings?",
  },
];

export default function PreHireInquiries() {
  return (
    <div className="flex-1 overflow-y-auto border-t border-[#E5E7EB] -mx-6 px-6 pt-6 space-y-6">
      {inquiries.map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-2xl p-5 shadow-sm border border-[#E5E7EB] hover:border-[#0D9488] transition-all"
        >
          <div className="flex justify-between items-start mb-3">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12">
                <Image
                  src="/images/user.png"
                  alt={item.name}
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-medium text-[#111827]">{item.name}</h3>
                <div className="flex gap-2 mt-1">
                  <span className="px-2 py-1 text-xs rounded-full bg-purple-100 text-purple-600">
                    David Chen
                  </span>
                  <span className="px-2 py-1 text-xs rounded-full bg-orange-100 text-orange-600">
                    {item.tag}
                  </span>
                </div>
              </div>
            </div>
            <span className="text-xs text-[#9CA3AF]">10 Min Ago</span>
          </div>

          <p className="text-sm text-[#374151] italic">{item.message}</p>
        </div>
      ))}
    </div>
  );
}
