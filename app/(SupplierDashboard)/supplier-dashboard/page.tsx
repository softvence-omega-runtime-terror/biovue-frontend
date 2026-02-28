"use client";

import React from "react";
import { 
  Box, 
  CheckCircle2, 
  FileText, 
  ShoppingCart 
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

const STATS = [
  { label: "Total Products", value: "156", icon: Box, color: "text-[#3A86FF] bg-[#EAF2FF]" },
  { label: "Active Products", value: "142", icon: CheckCircle2, color: "text-[#3A86FF] bg-[#EAF2FF]" },
  { label: "Draft Products", value: "14", icon: FileText, color: "text-[#3A86FF] bg-[#EAF2FF]" },
  { label: "Total Orders", value: "342", icon: ShoppingCart, color: "text-[#3A86FF] bg-[#EAF2FF]",  },
];

const RECENT_PRODUCTS = [
  { 
    image: "/images/supplement-placeholder.png", 
    name: "Whey Protein Isolate 5kg", 
    url: "ADDFF.COM", 
    status: "Active", 
    price: "$89.99" 
  },
  { 
    image: "/images/supplement-placeholder.png", 
    name: "BCAA Energy Drink Mix", 
    url: "ADDFF.COM", 
    status: "Active", 
    price: "$34.99" 
  },
  { 
    image: "/images/supplement-placeholder.png", 
    name: "Creatine Monohydrate 1kg", 
    url: "ADDFF.COM", 
    status: "Active", 
    price: "$45.99" 
  },
];

export default function SupplierDashboardPage() {
  return (
    <div className="flex flex-col gap-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
        {STATS.map((stat) => (
          <div key={stat.label} className="bg-white rounded-3xl p-8 border border-[#D9E6FF] shadow-sm flex items-center gap-6">
            <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center shrink-0", stat.color)}>
              <stat.icon size={30} strokeWidth={1.2} />
            </div>
            <div className="flex flex-col relative w-full">
              <span className="text-4xl font-normal text-[#041228] mb-1">{stat.value}</span>
              <span className="text-[16px] font-normal text-[#94A3B8] leading-[24px]">{stat.label}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Products Card */}
      <div className="bg-white rounded-3xl border border-[#D9E6FF] shadow-sm overflow-hidden mt-2">
        <div className="px-10 py-8 border-b border-[#F8FBFA] flex items-center justify-between">
          <h2 className="text-xl font-normal text-[#041228]">Recent Products</h2>
          <Link href="/supplier-dashboard/products" className="text-[#3A86FF] font-normal hover:underline cursor-pointer">View All</Link>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-[#F8FBFA]/30 border-b border-[#F8FBFA]">
                <th className="px-10 py-6 text-sm font-normal text-[#94A3B8] uppercase tracking-wider">Product Image</th>
                <th className="px-10 py-6 text-sm font-normal text-[#94A3B8] uppercase tracking-wider">Product Name</th>
                <th className="px-10 py-6 text-sm font-normal text-[#94A3B8] uppercase tracking-wider">Redirect URL</th>
                <th className="px-10 py-6 text-sm font-normal text-[#94A3B8] uppercase tracking-wider">Status</th>
                <th className="px-10 py-6 text-sm font-normal text-[#94A3B8] uppercase tracking-wider">Price</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#F8FBFA]">
              {RECENT_PRODUCTS.map((product, idx) => (
                <tr key={idx} className="hover:bg-[#F8FBFA]/20 transition-all">
                  <td className="px-10 py-5">
                    <div className="w-14 h-14 rounded-xl bg-[#E4F0FF] overflow-hidden">
                       <Image src={product.image} alt={product.name} width={56} height={56} className="object-cover" />
                    </div>
                  </td>
                  <td className="px-10 py-5">
                    <span className="text-[16px] font-normal text-[#041228] leading-[24px]">{product.name}</span>
                  </td>
                  <td className="px-10 py-5">
                    <span className="text-[16px] font-normal text-[#94A3B8] leading-[24px]">{product.url}</span>
                  </td>
                  <td className="px-10 py-5">
                    <span className="px-6 py-1.5 rounded-full bg-[#E6F7F7] text-[#14A4A9] text-sm font-normal">
                       {product.status}
                    </span>
                  </td>
                  <td className="px-10 py-5">
                    <span className="text-[16px] font-normal text-[#041228] leading-[24px]">{product.price}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="h-20" /> {/* Bottom spacing padding to match card shape */}
      </div>
    </div>
  );
}
