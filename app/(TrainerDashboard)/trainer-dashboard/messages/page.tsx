"use client";

import { useState, Suspense } from "react";
import { Send } from "lucide-react";

import ChatArea from "@/components/TrainerDashboard/messages/ChatArea";
import ClientsListSidebar from "@/components/TrainerDashboard/messages/ClientListSidebar";
import MotivationModal from "@/components/TrainerDashboard/messages/MotivationModal";

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
    // avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    lastMessage: "Great progress this week keep going!",
    timestamp: "Just now",
  },
  {
    id: "2",
    name: "Michael Scott",
    // avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
    lastMessage: "Remember the meeting tomorrow",
    timestamp: "5 hrs ago",
  },
  {
    id: "3",
    name: "Jim Halpert",
    // avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jim",
    lastMessage: "Check this out!",
    timestamp: "Yesterday",
  },
  {
    id: "4",
    name: "Pam Beesly",
    // avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Pam",
    lastMessage: "Can we reschedule?",
    timestamp: "Just now",
  },
];

export default function MessagesPage() {
  const [selectedClientId, setSelectedClientId] = useState("1");
  const [searchQuery, setSearchQuery] = useState("");
  const [openMotivation, setOpenMotivation] = useState(false);
  const selectedClient = mockClients.find((c) => c.id === selectedClientId);
  const filteredClients = mockClients.filter((c) =>
    c.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="flex flex-col h-[calc(100vh-140px)] gap-6">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <h1 className="text-2xl font-medium text-[#111827]">Messages</h1>
            <span className="bg-[#0D9488] text-white text-xs font-medium px-3 py-1 rounded-full">
              Active Clients
            </span>
          </div>
          <p className="text-sm text-[#6B7280]">
            Communicate with your clients and support their progress.
          </p>
        </div>
        <button
          onClick={() => selectedClient && setOpenMotivation(true)}
          className="bg-[#0D9488] flex items-center cursor-pointer rounded-lg px-4 py-2.5 hover:opacity-90 transition-opacity text-white gap-2 font-medium"
        >
          <Send className="w-5 h-5 rotate-[-10deg]" />
          <span>Send Motivation</span>
        </button>
      </div>

      {/* Main Layout */}
      <div className="flex flex-1 gap-0 border-t border-[#E5E7EB] -mx-6 px-6 pt-0 overflow-hidden">
        {/* Sidebar - Clients List */}
        <div className="w-[320px] border-r border-[#E5E7EB] pt-6 pr-4 h-full">
          <Suspense
            fallback={
              <div className="w-full h-full animate-pulse bg-gray-50" />
            }
          >
            <ClientsListSidebar
              clients={filteredClients}
              selectedClientId={selectedClientId}
              onSelectClient={setSelectedClientId}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
          </Suspense>
        </div>

        {/* Main Chat Area */}
        <div className="flex flex-col flex-1 h-full">
          <main className="flex-1 h-full">
            {selectedClient ? (
              <ChatArea
                clientId={selectedClient.id}
                clientName={selectedClient.name}
                clientAvatar={selectedClient.avatar}
              />
            ) : (
              <div className="flex-1 flex items-center justify-center text-gray-500 h-full">
                Select a client to start messaging
              </div>
            )}
          </main>
        </div>
      </div>
      {selectedClient && (
        <MotivationModal
          open={openMotivation}
          onClose={() => setOpenMotivation(false)}
          clientName={selectedClient.name}
          onSend={(message) => {
            console.log("Send to:", selectedClient.name, message);
          }}
        />
      )}
    </div>
  );
}
