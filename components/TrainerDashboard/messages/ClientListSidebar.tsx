"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Search } from "lucide-react";
import { Client } from "@/app/(TrainerDashboard)/trainer-dashboard/messages/page";
import Image from "next/image";

interface ClientsListSidebarProps {
  clients: Client[];
  selectedClientId: string;
  onSelectClient: (id: string) => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
}

export default function ClientsListSidebar({
  clients,
  selectedClientId,
  onSelectClient,
  searchQuery,
  setSearchQuery,
}: ClientsListSidebarProps) {
  return (
    <div className="flex flex-col h-full">
      {/* Search */}
      <div className="relative mb-6">
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9CA3AF]">
          <Search className="w-5 h-5" />
        </div>
        <input
          placeholder="Search Clients"
          className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#E5E7EB] rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-[#0D9488] transition-all"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Clients List */}
      <ScrollArea className="flex-1 -mr-4 pr-4">
        <div className="space-y-1">
          {clients.map((client) => {
            const isActive = selectedClientId === client.id;
            return (
              <div
                key={client.id}
                onClick={() => onSelectClient(client.id)}
                className={`group relative p-3 cursor-pointer rounded-lg transition-all flex gap-3 ${
                  isActive
                    ? "bg-[#0D94880D] border border-transparent shadow-sm"
                    : "hover:bg-gray-50 border border-transparent"
                }`}
              >
                {/* Active Indicator */}
                {isActive && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-[#0D9488] rounded-r-full" />
                )}

                {/* Avatar */}
                <div className="relative w-12 h-12 shrink-0">
                  <Image
                    src={client.avatar || "/images/user.png"}
                    alt={client.name}
                    fill
                    className="rounded-full object-cover border border-[#E5E7EB]"
                  />
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0 flex flex-col justify-center">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className={`text-sm font-semibold truncate ${isActive ? "text-[#111827]" : "text-[#374151]"}`}>
                      {client.name}
                    </h3>
                    <span className="text-[10px] text-[#9CA3AF] whitespace-nowrap">
                      {client.timestamp}
                    </span>
                  </div>
                  <p className="text-xs text-[#6B7280] truncate leading-tight">
                    {client.lastMessage}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </ScrollArea>
    </div>
  );
}
