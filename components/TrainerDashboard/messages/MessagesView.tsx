"use client";

import { Suspense, useState } from "react";

import ChatArea from "./ChatArea";
import ClientsListSidebar from "./ClientListSidebar";

export interface Client {
  id: string;
  name: string;
  avatar?: string;
  lastMessage: string;
  timestamp: string;
}

const mockClients: Client[] = [
  {
    id: "1",
    name: "Sarah Jenkins",
    lastMessage: "Great progress this week keep going!",
    timestamp: "Just now",
  },
  {
    id: "2",
    name: "Michael Scott",
    lastMessage: "Remember the meeting tomorrow",
    timestamp: "5 hrs ago",
  },
  {
    id: "3",
    name: "Jim Halpert",
    lastMessage: "Check this out!",
    timestamp: "Yesterday",
  },
  {
    id: "4",
    name: "Pam Beesly",
    lastMessage: "Can we reschedule?",
    timestamp: "Just now",
  },
];

export default function MessagesView() {
  const [selectedClientId, setSelectedClientId] = useState("1");
  const [searchQuery, setSearchQuery] = useState("");

  const selectedClient = mockClients.find((c) => c.id === selectedClientId);
  const filteredClients = mockClients.filter((c) =>
    c.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="flex border-t-2 pt-5 border-[#E3ECEB] gap-5">
      {/* Clients List Sidebar */}
      <Suspense
        fallback={<div className="w-20 md:w-65 border-r border-gray-200" />}
      >
        <ClientsListSidebar
          clients={filteredClients}
          selectedClientId={selectedClientId}
          onSelectClient={setSelectedClientId}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
      </Suspense>

      {/* Chat Area */}
      <div className="flex flex-col flex-1">
        {selectedClient ? (
          <ChatArea clientId={selectedClient.id} />
        ) : (
          <div className="flex-1 flex items-center justify-center text-gray-500">
            Select a client to start messaging
          </div>
        )}
      </div>
    </div>
  );
}
