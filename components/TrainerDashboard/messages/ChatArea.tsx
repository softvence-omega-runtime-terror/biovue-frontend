"use client";

import { useState, useRef, useEffect } from "react";
import { Send } from "lucide-react";

import { ScrollArea } from "@/components/ui/scroll-area";

interface Message {
  id: string;
  senderRole: "client" | "coach";
  text: string;
  timestamp: string;
}

const mockMessages: Record<string, Message[]> = {
  "1": [
    {
      id: "1",
      senderRole: "client",
      text: "Hi coach, feeling good about this week!",
      timestamp: "Today - 8:30 AM",
    },
    {
      id: "2",
      senderRole: "coach",
      text: "Hi coach, feeling good about this week!",
      timestamp: "Today - 8:30 AM",
    },
    {
      id: "3",
      senderRole: "client",
      text: "Hi coach, feeling good about this week!",
      timestamp: "Today - 8:30 AM",
    },
    {
      id: "4",
      senderRole: "coach",
      text: "Hi coach, feeling good about this week!",
      timestamp: "Today - 8:30 AM",
    },
  ],
  "2": [
    {
      id: "1",
      senderRole: "client",
      text: "Hi coach, ready for this week!",
      timestamp: "Yesterday - 10:00 AM",
    },
  ],
  "3": [
    {
      id: "1",
      senderRole: "coach",
      text: "Great work this week!",
      timestamp: "Yesterday - 2:00 PM",
    },
  ],
};

interface ChatAreaProps {
  clientId: string;
}

export default function ChatArea({ clientId }: ChatAreaProps) {
  const [messages, setMessages] = useState<Message[]>(
    mockMessages[clientId] || [],
  );
  const [inputValue, setInputValue] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Wrap in a micro-task to avoid synchronous state update warning
    const timer = setTimeout(() => {
      setMessages(mockMessages[clientId] || []);
    }, 0);

    return () => clearTimeout(timer);
  }, [clientId]);

  // Auto-scroll to bottom when messages update
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;
    const newMessage: Message = {
      id: Date.now().toString(),
      senderRole: "coach",
      text: inputValue,
      timestamp: new Date().toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      }),
    };
    setMessages([...messages, newMessage]);
    setInputValue("");
  };

  return (
    <div className="flex-1 flex flex-col ">
      {/* Messages Area */}
      <div
        className="flex-1 p-6 overflow-y-auto
      "
      >
        <div className="space-y-6">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex  ${msg.senderRole === "coach" ? "justify-end" : "justify-start"}`}
            >
              <div className="max-w-xs">
                <div
                  className={`rounded-lg px-4 py-2 ${msg.senderRole === "coach" ? "bg-teal-100" : "bg-white border border-gray-200"}`}
                >
                  <p className="text-sm text-gray-900">{msg.text}</p>
                </div>
                <p
                  className={`text-xs text-gray-500 mt-1 ${msg.senderRole === "coach" ? "text-right" : "text-left"}`}
                >
                  {msg.timestamp}
                </p>
              </div>
            </div>
          ))}
          <div ref={scrollRef} />
        </div>
      </div>

      {/* Input Area */}
      <div className="border-t mt-auto border-gray-200 p-4">
        <div className="flex gap-2 ">
          <input
            placeholder="Type your message..."
            className="flex-1 text-sm px-3 bg-white py-4 border rounded-lg"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
          />
          <button
            onClick={handleSendMessage}
            className="cursor-pointer hover:opacity-80 text-black"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
