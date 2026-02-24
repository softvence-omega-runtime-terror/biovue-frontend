interface Plan {
  name: string;
  type: "individual" | "professional";
  activeSubscribers: number;
  monthlyRevenue: number;
  churnRate: number;
}

const plans: Plan[] = [
  {
    name: "Free Trial",
    type: "individual",
    activeSubscribers: 3200,
    monthlyRevenue: 0,
    churnRate: 5.2,
  },
  {
    name: "Plus",
    type: "individual",
    activeSubscribers: 1400,
    monthlyRevenue: 33600,
    churnRate: 2.9,
  },
  {
    name: "Premium",
    type: "individual",
    activeSubscribers: 820,
    monthlyRevenue: 78700,
    churnRate: 3.2,
  },
  {
    name: "Trainer Pro",
    type: "professional",
    activeSubscribers: 110,
    monthlyRevenue: 5500,
    churnRate: 1.8,
  },
];

export default function PlanTable() {
  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      <table className="w-full">
        <thead className="bg-[#0FA4A91A] border-b border-gray-200">
          <tr>
            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
              Plan Name
            </th>
            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
              Plan Type
            </th>
            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
              Active Subscribers
            </th>
            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
              Monthly Revenue
            </th>
            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
              Churn %
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {plans.map((plan) => (
            <tr key={plan.name} className="hover:bg-gray-50">
              <td className="px-6 py-4 text-sm font-medium text-gray-900">
                {plan.name}
              </td>
              <td className="px-6 py-4 text-sm">
                <span
                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    plan.type === "individual"
                      ? "bg-[#8746E726] text-[#8746E7] border border-[#8746E7]"
                      : "bg-[#0FA4A926] text-[#0FA4A9] border border-[#0FA4A9]"
                  }`}
                >
                  {plan.type.charAt(0).toUpperCase() + plan.type.slice(1)}
                </span>
              </td>
              <td className="px-6 py-4 text-sm text-gray-900">
                {plan.activeSubscribers.toLocaleString()}
              </td>
              <td className="px-6 py-4 text-sm text-gray-900">
                ${plan.monthlyRevenue.toLocaleString()}
              </td>
              <td className="px-6 py-4 text-sm text-gray-900">
                {plan.churnRate}%
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
