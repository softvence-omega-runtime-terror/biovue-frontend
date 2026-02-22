"use client";

export default function AdminOverviewPage() {
  return (
    <div className="flex flex-col gap-6">
      {/* Page title */}
      <h2 className="text-lg font-semibold">Admin Overview</h2>

      {/* Stat cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatCard
          title="Total Signups"
          value="12,482"
          sub="All registered users"
        />
        <StatCard
          title="Active Users"
          value="10,000"
          sub="Active in last 30 days"
        />
        <StatCard
          title="Total Subscriptions"
          value="3,549"
          sub="Paid subscriptions"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatCard
          title="Total Revenue"
          value="$128,450"
          sub="Lifetime revenue"
        />
        <StatCard title="Monthly Revenue" value="$32,800" sub="Current month" />
        <StatCard title="Churn Rate" value="3.4%" sub="Monthly churn" />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ChartCard title="User Growth" />
        <ChartCard title="Revenue Trend" />
      </div>

      {/* Tables */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <PlanSummaryTable />
        <SystemStatus />
      </div>
    </div>
  );
}

/* ---------- Small Components ---------- */

function StatCard({
  title,
  value,
  sub,
}: {
  title: string;
  value: string;
  sub: string;
}) {
  return (
    <div className="bg-white rounded-xl border p-4">
      <p className="text-sm text-gray-500">{title}</p>
      <p className="text-xl font-semibold mt-1">{value}</p>
      <p className="text-xs text-gray-400 mt-1">{sub}</p>
    </div>
  );
}

function ChartCard({ title }: { title: string }) {
  return (
    <div className="bg-white rounded-xl border p-4 h-64">
      <p className="text-sm font-medium mb-2">{title}</p>
      <div className="h-full flex items-center justify-center text-gray-400 text-sm">
        Chart placeholder
      </div>
    </div>
  );
}

function PlanSummaryTable() {
  return (
    <div className="bg-white rounded-xl border p-4">
      <p className="text-sm font-medium mb-4">Plan Wise Summary</p>

      <table className="w-full text-sm">
        <thead className="text-gray-400">
          <tr>
            <th className="text-left py-2">Plan</th>
            <th>Subscribers</th>
            <th className="text-right">Revenue</th>
          </tr>
        </thead>
        <tbody>
          {[
            ["Free Trial", "3,200", "$0"],
            ["Plus", "1,400", "$33,600"],
            ["Premium", "820", "$28,700"],
            ["Trainer Pro", "110", "$5,500"],
          ].map(([name, users, rev]) => (
            <tr key={name} className="border-t">
              <td className="py-2">{name}</td>
              <td className="text-center">{users}</td>
              <td className="text-right">{rev}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function SystemStatus() {
  return (
    <div className="bg-white rounded-xl border p-4">
      <p className="text-sm font-medium mb-4">Plan Wise Summary</p>

      {["Subscription Billing", "Payments", "Data Sync"].map((item) => (
        <div key={item} className="flex justify-between py-2 border-t text-sm">
          <span>{item}</span>
          <span className="text-green-500">OPERATIONAL</span>
        </div>
      ))}
    </div>
  );
}
