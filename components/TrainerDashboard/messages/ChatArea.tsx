"use client";

import { useState, useRef, useEffect } from "react";
import { Send } from "lucide-react";

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
    const timer = setTimeout(() => {
      setMessages(mockMessages[clientId] || []);
    }, 0);
    return () => clearTimeout(timer);
  }, [clientId]);

  // Scroll to bottom whenever messages change
  //   useEffect(() => {
  //     scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  //   }, [messages]);

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
    <div className="flex flex-col flex-1 h-full">
      {/* Scrollable Messages */}
      <div className="flex-1 overflow-y-auto p-6">
        <div className="space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.senderRole === "coach" ? "justify-end" : "justify-start"}`}
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

      {/* Input Box - Always at bottom */}
      <div className="border-t border-gray-200 p-4 flex-shrink-0">
        <div className="flex gap-2">
          <input
            placeholder="Type your message..."
            className="flex-1 px-3 py-3 text-sm border rounded-lg bg-white"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
          />
          <button
            onClick={handleSendMessage}
            className="text-black hover:opacity-80"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
