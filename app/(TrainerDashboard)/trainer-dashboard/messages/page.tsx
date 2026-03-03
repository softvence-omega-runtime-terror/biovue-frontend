
"use client";

import { useState, Suspense } from "react";
import { Send } from "lucide-react";

import ChatArea from "@/components/TrainerDashboard/messages/ChatArea";
import ClientsListSidebar from "@/components/TrainerDashboard/messages/ClientListSidebar";

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

export default function MessagesPage() {
  const [selectedClientId, setSelectedClientId] = useState("1");
  const [searchQuery, setSearchQuery] = useState("");

  const selectedClient = mockClients.find((c) => c.id === selectedClientId);
  const filteredClients = mockClients.filter((c) =>
    c.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="flex flex-col min-h-screen  gap-5 ">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div className=" mb-4">
          <div className="flex mb-2 items-center gap-3">
            <h1 className="text-xl font-medium text-gray-900">Messages</h1>

            <span className="bg-[#0D9488] text-white text-sm font-medium px-2 py-1 rounded-full">
              Active Clients
            </span>
          </div>

          <p className="text-xs">
            Communicate with your clients and support their progress.
          </p>
        </div>
        <button className="bg-[#0D9488] flex items-center cursor-pointer rounded-lg p-2 md:p-3 hover:opacity-80 text-white gap-2">
          <Send className="w-4 h-4" />
          <span>Send Motivation</span>
        </button>
      </div>

      {/* Main Layout */}
      <div className="flex flex-1 gap-5 border-t border-[#E3ECEB] pt-5">
        {/* Sidebar - Clients List */}
        <Suspense fallback={<div className="w-1/3 border-r border-gray-200" />}>
          <ClientsListSidebar
            clients={filteredClients}
            selectedClientId={selectedClientId}
            onSelectClient={setSelectedClientId}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        </Suspense>

        {/* Main Chat Area */}
        <div className="flex flex-col flex-1">
          <main className="flex-1 ">
            {selectedClient ? (
              <ChatArea clientId={selectedClient.id} />
            ) : (
              <div className="flex-1 flex items-center justify-center text-gray-500">
                Select a client to start messaging
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
