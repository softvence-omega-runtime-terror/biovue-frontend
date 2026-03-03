"use client";

import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Search } from "lucide-react";
import { Client } from "./MessagesView";

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
    <div className="w-1/3 flex flex-col">
      {/* Search */}
      <div className="relative mb-3 bg-white">
        <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
        <Input
          placeholder="Search Clients"
          className="pl-10 h-10 text-sm"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Clients List */}
      <ScrollArea className="flex-1 bg-white rounded-lg">
        <ul>
          {clients.map((client) => (
            <li
              key={client.id}
              onClick={() => onSelectClient(client.id)}
              className={`p-4 cursor-pointer border-b border-gray-100 hover:bg-[#0FA4A91A] flex flex-col ${
                selectedClientId === client.id ? "bg-[#0FA4A91A]" : ""
              }`}
            >
              <span className="font-medium text-gray-900">{client.name}</span>
              <span className="text-xs text-gray-500 truncate">
                {client.lastMessage}
              </span>
            </li>
          ))}
        </ul>
      </ScrollArea>
    </div>
  );
}
