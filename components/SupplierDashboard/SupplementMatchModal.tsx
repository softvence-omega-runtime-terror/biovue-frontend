"use client";

import Image from "next/image";
import { X, Sparkles, CheckCircle2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { User } from "@/redux/features/api/SupplierDashboard/AllUsers";

const getSafeImageSrc = (src: string | null | undefined) => {
  if (!src) return null;
  if (src.startsWith("/") || src.startsWith("http://") || src.startsWith("https://")) {
    try {
      if (src.startsWith("http")) {
        new URL(src);
      }
      return src;
    } catch (e) {
      return null;
    }
  }
  return null;
};

interface Supplement {
  id: number;
  name: string;
  category: string;
  matchScore: number;
  reason: string;
}

const MOCK_SUPPLEMENTS: Supplement[] = [
  {
    id: 1,
    name: "Pure Whey Isolate",
    category: "Protein",
    matchScore: 98,
    reason: "Based on recovery goals and high protein requirement.",
  },
  {
    id: 2,
    name: "Omega-3 Fish Oil",
    category: "Essential Fats",
    matchScore: 92,
    reason: "Recommended for joint health and anti-inflammatory benefits.",
  },
  {
    id: 3,
    name: "Pre-Workout Elite",
    category: "Performance",
    matchScore: 85,
    reason: "Matches stated energy needs for high-intensity training.",
  },
];

interface SupplementMatchModalProps {
  isOpen: boolean;
  onClose: () => void;
  user: User | null;
}

export default function SupplementMatchModal({
  isOpen,
  onClose,
  user,
}: SupplementMatchModalProps) {
  if (!isOpen || !user) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      <div className="w-full max-w-2xl bg-white rounded-[40px] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
        {/* Header */}
        <div className="relative p-8 bg-linear-to-br from-[#0FA4A9] to-[#0D9488] text-white">
          <button
            onClick={onClose}
            className="absolute right-6 top-6 text-white/80 hover:text-white transition-colors cursor-pointer"
          >
            <X size={24} />
          </button>

          <div className="flex items-center gap-6">
            <div className="relative w-24 h-24 rounded-3xl border-4 border-white/20 overflow-hidden bg-white/10 flex items-center justify-center">
              {getSafeImageSrc(user.profile_image) ? (
                <Image
                  src={getSafeImageSrc(user.profile_image)!}
                  alt={user.name}
                  fill
                  className="object-cover"
                />
              ) : (
                <span className="text-3xl font-bold">
                  {user.name.charAt(0)}
                </span>
              )}
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-1 tracking-tight">
                {user.name}
              </h2>
              <p className="text-white/80 font-medium">
                AI-Powered Supplement Matching
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="flex items-center gap-2 mb-6 text-[#0FA4A9]">
            <Sparkles size={20} fill="currentColor" />
            <h3 className="text-lg font-bold uppercase tracking-wider">
              Suggested Matches
            </h3>
          </div>

          <div className="space-y-4 max-h-100 overflow-y-auto pr-2 custom-scrollbar">
            {MOCK_SUPPLEMENTS.map((supp) => (
              <div
                key={supp.id}
                className="group relative p-6 bg-[#F8FBFA] rounded-3xl border border-[#D9E6FF] hover:border-[#0FA4A9] transition-all hover:shadow-md"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="text-lg font-bold text-[#041228]">
                        {supp.name}
                      </h4>
                      <span className="px-3 py-1 bg-white border border-[#D9E6FF] rounded-full text-xs font-bold text-[#94A3B8]">
                        {supp.category}
                      </span>
                    </div>
                    <p className="text-sm text-[#5F6F73] mb-4 leading-relaxed line-clamp-2">
                      {supp.reason}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-black text-[#0FA4A9] mb-1">
                      {supp.matchScore}%
                    </div>
                    <div className="text-[10px] uppercase font-bold text-[#94A3B8] tracking-widest">
                      Match Score
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-2 pt-4 border-t border-[#D9E6FF]/50">
                  <div className="flex items-center gap-2 text-[#22C55E]">
                    <CheckCircle2 size={16} />
                    <span className="text-xs font-bold uppercase tracking-wide">
                      In Stock
                    </span>
                  </div>
                  <Button className="bg-[#0FA4A9] hover:bg-[#0D9488] text-white rounded-xl px-6 h-9 flex items-center gap-2 transition-all cursor-pointer">
                    <Send size={16} />
                    Suggest to User
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-8 pt-0 flex justify-end">
          <Button
            onClick={onClose}
            variant="outline"
            className="rounded-xl px-10 border-[#D9E6FF] text-[#94A3B8] hover:bg-[#F8FBFA] cursor-pointer"
          >
            Close
          </Button>
        </div>
      </div>
    </div>
  );
}
