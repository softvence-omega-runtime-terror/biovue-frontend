"use client";

import React from "react";
import { 
  Search,
  ChevronDown,
  Plus,
  Eye,
  Pencil,
  Trash2
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

const PRODUCTS = [
  { 
    image: "/images/supplement-placeholder.png", 
    name: "Whey Protein Isolate 5kg", 
    url: "aaaaaaaaaaaaaa.com", 
    price: "$89.99",
    status: "Active" 
  },
  { 
    image: "/images/supplement-placeholder.png", 
    name: "BCAA Energy Drink Mix", 
    url: "aaaaaaaaaaaaaa.com", 
    price: "$34.99",
    status: "Active" 
  },
  { 
    image: "/images/supplement-placeholder.png", 
    name: "Creatine Monohydrate 1kg", 
    url: "aaaaaaaaaaaaaa.com", 
    price: "$45.99",
    status: "Draft" 
  },
];

export default function MyProductsPage() {
  return (
    <div className="flex flex-col gap-10">
      {/* Search and Filters */}
      <div className="flex flex-wrap items-center justify-between gap-6 mr-4">
        <div className="relative group w-full max-w-[450px]">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#94A3B8]" size={20} />
          <input 
            type="text" 
            placeholder="Search products..." 
            className="w-full bg-white border border-[#E4EFFF] rounded-xl py-3.5 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-[#3A86FF]/10 text-[16px] font-normal leading-[24px] text-[#041228] placeholder:text-[#94A3B8] shadow-sm"
          />
        </div>

        <div className="flex items-center gap-4">
          <div className="relative group min-w-[140px]">
            <select className="w-full bg-white border border-[#E4EFFF] rounded-xl py-3.5 px-6 appearance-none cursor-pointer text-[16px] font-normal leading-[24px] text-[#041228] focus:outline-none shadow-sm pr-12">
              <option>All Status</option>
              <option>Active</option>
              <option>Draft</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-[#041228] pointer-events-none" size={20} />
          </div>

          <Link href="/supplier-dashboard/add-product" className="bg-[#14A4A9] text-white px-8 py-3.5 rounded-xl font-normal text-[16px] leading-[24px] hover:bg-opacity-90 transition-all flex items-center gap-3 shadow-lg shadow-[#14A4A9]/10 cursor-pointer">
            <Plus size={22} strokeWidth={1.5} />
            Add New Product
          </Link>
        </div>
      </div>

      {/* Products Table Card */}
      <div className="bg-white rounded-3xl border border-[#D9E6FF] shadow-sm overflow-hidden mr-4">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-[#F8FBFA]/30 border-b border-[#F8FBFA]">
                <th className="px-10 py-6 text-sm font-normal text-[#94A3B8] uppercase tracking-wider">Product Image</th>
                <th className="px-10 py-6 text-sm font-normal text-[#94A3B8] uppercase tracking-wider">Product Name</th>
                <th className="px-10 py-6 text-sm font-normal text-[#94A3B8] uppercase tracking-wider">Redirect URL</th>
                <th className="px-10 py-6 text-sm font-normal text-[#94A3B8] uppercase tracking-wider">Price</th>
                <th className="px-10 py-6 text-sm font-normal text-[#94A3B8] uppercase tracking-wider text-center">Status</th>
                <th className="px-10 py-6 text-sm font-normal text-[#94A3B8] uppercase tracking-wider text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#F8FBFA]">
              {PRODUCTS.map((product, idx) => (
                <tr key={idx} className="hover:bg-[#F8FBFA]/20 transition-all">
                  <td className="px-10 py-6">
                    <div className="w-16 h-16 rounded-xl bg-[#E4F0FF] overflow-hidden">
                       <Image src={product.image} alt={product.name} width={64} height={64} className="object-cover" />
                    </div>
                  </td>
                  <td className="px-10 py-6">
                    <span className="text-[16px] font-normal text-[#041228] leading-[24px]">{product.name}</span>
                  </td>
                  <td className="px-10 py-6">
                    <span className="text-[16px] font-normal text-[#94A3B8] leading-[24px]">{product.url}</span>
                  </td>
                  <td className="px-10 py-6">
                    <span className="text-[16px] font-normal text-[#041228] leading-[24px]">{product.price}</span>
                  </td>
                  <td className="px-10 py-6 text-center">
                    <span className={cn(
                        "px-6 py-1.5 rounded-full text-sm font-normal",
                        product.status === "Active" ? "bg-[#E6F7F7] text-[#14A4A9]" : "bg-gray-100 text-[#94A3B8]"
                    )}>
                       {product.status}
                    </span>
                  </td>
                  <td className="px-10 py-6">
                    <div className="flex items-center justify-center gap-6">
                      <button className="text-[#041228]/60 hover:text-[#041228] transition-colors cursor-pointer">
                        <Eye size={22} />
                      </button>
                      <button className="text-[#041228]/60 hover:text-[#3A86FF] transition-colors cursor-pointer">
                        <Pencil size={22} />
                      </button>
                      <button className="text-[#041228]/60 hover:text-red-500 transition-colors cursor-pointer">
                        <Trash2 size={22} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="h-20" />
      </div>
    </div>
  );
}
