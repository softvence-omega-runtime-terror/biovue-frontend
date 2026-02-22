
"use client";

import React from "react";

export default function PlanSummaryTable() {
  return (
    <div className="bg-white rounded-xl border-2 border-[#F3F4F6]! p-6">
      <p className="text-sm border-b-2 pb-4 border-[#F3F4F6]! font-medium mb-4">
        Plan Wise Summary
      </p>

      <table className="w-full text-sm">
        <thead className="text-gray-400">
          <tr>
            <th className="text-left py-2">PLAN NAME</th>
            <th>PLAN TYPE</th>
            <th>ACTIVE SUBSCRIBERS</th>
            <th className="text-right">MONTHLY REVENUE</th>
          </tr>
        </thead>
        <tbody>
          {[
            ["Free Trial", "individual", "3,200", "$0"],
            ["Plus", "individual", "1,400", "$33,600"],
            ["Premium", "individual", "820", "$28,700"],
            ["Trainer Pro", "professional", "110", "$5,500"],
          ].map(([name, plan, users, rev]) => (
            <tr key={name} className="border-b border-[#F3F4F6]!">
              <td className="py-2">{name}</td>
              <td className="py-2 text-center">{plan}</td>
              <td className="text-center">{users}</td>
              <td className="text-right">{rev}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
