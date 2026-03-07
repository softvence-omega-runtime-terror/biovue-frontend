"use client";

import DashboardHeading from "@/components/common/DashboardHeading";
import ClientsTable from "@/components/TrainerDashboard/Clients/ClientsTable";
import { clients } from "@/components/TrainerDashboard/overview/data";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function ActiveClientsPage() {
  const activeClients = clients.filter(
    (client) => client.status === "on-track",
  );

  return (
    <div className="space-y-6">
      <div className="mb-4 cursor-pointer ">
        <Link
          href="/trainer-dashboard"
          className="flex items-center hover:opacity-80 gap-2"
        >
          <button className="  rounded-lg transition-all">
            <ChevronLeft className="w-5 h-5 cursor-pointer " />
          </button>
          <span>Back to Overview</span>
        </Link>
      </div>
      <DashboardHeading
        heading="Active Clients"
        subheading="Clients currently on track"
      />

      <ClientsTable clients={activeClients} />
    </div>
  );
}
