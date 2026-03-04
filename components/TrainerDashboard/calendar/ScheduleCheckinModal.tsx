"use client";

import { X, ChevronDown } from "lucide-react";
import { useState } from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function ScheduleCheckinModal({ isOpen, onClose }: Props) {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
      <div className="w-full max-w-125 bg-white rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
        {/* Header */}
        <div className="p-8 pb-4 relative">
          <button
            onClick={onClose}
            className="absolute right-6 top-6 text-[#94A3B8] hover:text-[#475569] transition-colors cursor-pointer"
          >
            <X size={24} />
          </button>
          <h2 className="text-2xl font-bold text-[#1E293B] mb-2">
            Schedule Check-in
          </h2>
          <p className="text-sm text-[#64748B]">
            Set up a one-on-one session with your client.
          </p>
        </div>

        <div className="p-8 pt-2 space-y-5">
          {/* Client Select */}
          <div>
            <label className="block text-sm font-medium text-[#64748B] mb-2 uppercase tracking-wide">
              Clients
            </label>
            <div className="relative group">
              <select className="w-full appearance-none bg-[#F0FDFD] border border-[#CCFBF1] text-[#0D9488] px-5 py-4 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#0D9488]/20 cursor-pointer transition-all">
                <option>Alex Johnson</option>
              </select>
              <ChevronDown
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#0D9488] pointer-events-none group-hover:scale-110 transition-transform"
                size={20}
              />
            </div>
          </div>

          {/* Date & Time Row */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-[#64748B] mb-2 uppercase tracking-wide">
                Date
              </label>
              <div className="relative group h-14">
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full bg-[#F0FDFD] border border-[#CCFBF1] text-[#0D9488] px-5 py-4 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#0D9488]/20"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-[#64748B] mb-2 uppercase tracking-wide">
                Time
              </label>
              <div className="relative group h-14">
                <input
                  type="time"
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  className="w-full bg-[#F0FDFD] border border-[#CCFBF1] text-[#0D9488] px-5 py-4 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#0D9488]/20"
                />
              </div>
            </div>
          </div>

          {/* Check-in Type (First) */}
          <div>
            <label className="block text-sm font-medium text-[#64748B] mb-2 uppercase tracking-wide">
              Check - in Type
            </label>
            <div className="relative group">
              <select className="w-full appearance-none bg-[#F0FDFD] border border-[#CCFBF1] text-[#0D9488] px-5 py-4 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#0D9488]/20 cursor-pointer transition-all">
                <option>Alex Johnson</option>
              </select>
              <ChevronDown
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#0D9488] pointer-events-none group-hover:scale-110 transition-transform"
                size={20}
              />
            </div>
          </div>

          {/* Check-in Type (Second) */}
          <div>
            <label className="block text-sm font-medium text-[#64748B] mb-2 uppercase tracking-wide">
              Check - in Type
            </label>
            <div className="relative group">
              <select className="w-full appearance-none bg-[#F0FDFD] border border-[#CCFBF1] text-[#0D9488] px-5 py-4 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#0D9488]/20 cursor-pointer transition-all">
                <option>Alex Johnson</option>
              </select>
              <ChevronDown
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#0D9488] pointer-events-none group-hover:scale-110 transition-transform"
                size={20}
              />
            </div>
          </div>

          {/* Private Note */}
          <div>
            <label className="block text-sm font-medium text-[#64748B] mb-2 uppercase tracking-wide">
              Private Note (Trainer Only)
            </label>
            <textarea
              className="w-full h-32 bg-[#F0FDFD] border border-[#CCFBF1] text-[#0D9488] px-5 py-4 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#0D9488]/20 resize-none transition-all"
              defaultValue="Alex Johnson"
            ></textarea>
          </div>

          {/* Actions */}
          <div className="grid grid-cols-2 gap-4 pt-2">
            <button
              onClick={onClose}
              className="py-4 rounded-xl border border-[#F1F5F9] text-[#1E293B] font-bold text-sm hover:bg-gray-50 transition-colors uppercase tracking-widest cursor-pointer"
            >
              Cancel
            </button>
            <button className="py-4 rounded-xl bg-[#0D9488] text-white font-bold text-sm hover:opacity-90 transition-all shadow-lg active:scale-[0.98] uppercase tracking-widest cursor-pointer">
              Send Reminder
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
