"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent mt-6">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="BioVue Logo"
            width={120}
            height={60}
            className="w-24 md:w-[120px] object-contain"
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link 
            href="/login" 
            className="text-main-text font-medium hover:text-primary transition-colors"
          >
            Sign In
          </Link>
          <Link
            href="/register"
            className="group bg-[#0FA4A9] text-white pl-6 pr-2  py-2 rounded-full  flex items-center gap-2.5 hover:bg-[#0d8d91] transition-all shadow-[0_4px_14px_0_rgba(15,164,169,0.25)] hover:scale-105 active:scale-95 cursor-pointer"
          >
            Get Started
            <div className="bg-white rounded-full p-1 flex items-center justify-center transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shadow-sm">
              <ArrowUpRight size={15} className="text-black" strokeWidth={3} />
            </div>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="bg-white text-main-text w-10 h-10 rounded-full flex items-center justify-center shadow-md border border-gray-100 hover:bg-gray-50 transition-all focus:outline-none cursor-pointer"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              {isMenuOpen ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 shadow-xl px-4 py-8 flex flex-col items-center gap-6 animate-in slide-in-from-top duration-300">
          <Link 
            href="/login" 
            onClick={() => setIsMenuOpen(false)}
            className="text-main-text text-xl font-medium"
          >
            Sign In
          </Link>
          <Link
            href="/register"
            onClick={() => setIsMenuOpen(false)}
            className="group bg-[#0FA4A9] text-white px-10 py-3.5 rounded-full font-bold text-lg w-full text-center flex items-center justify-center gap-3 hover:bg-[#0d8d91] transition-all cursor-pointer shadow-lg shadow-[#0FA4A9]/20 active:scale-95"
          >
            Get Started
            <div className="bg-white rounded-full p-1.5 flex items-center justify-center">
              <ArrowUpRight size={18} className="text-[#0FA4A9]" strokeWidth={3} />
            </div>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
