"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, Lock, Eye, FileText, ChevronRight } from "lucide-react";

const PrivacyPage = () => {
  const sections = [
    {
      id: "collection",
      title: "Data We Collect",
      content: "We collect information you provide directly to us, such as when you create or modify your account, request services, contact customer support, or otherwise communicate with us. This info may include: name, email, phone number, health data, and photos used for projections."
    },
    {
      id: "usage",
      title: "How We Use Your Data",
      content: "We use the information we collect to provide, maintain, and improve our services, such as to personalize your health projections, facilitate communication between you and your trainer, and send you technical notices and support messages."
    },
    {
      id: "sharing",
      title: "Information Sharing",
      content: "We do not share your health data or photos with third parties for marketing purposes. Data is only shared with your designated trainer (with your consent) or as required by law to protect the safety and rights of BioVue."
    },
    {
      id: "security",
      title: "Data Security",
      content: "BioVue takes reasonable measures to help protect information about you from loss, theft, misuse and unauthorized access. We use secure socket layer (SSL) technology and industry-standard encryption for all data transmissions."
    }
  ];

  return (
    <div className="relative min-h-screen bg-[#f4fbfa]">
      <Navbar />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
            
            {/* Left Sidebar Table of Contents */}
            <aside className="lg:w-1/4 hidden lg:block sticky top-32 h-fit">
              <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm">
                <div className="flex items-center gap-2 mb-6 text-[#0fa4a9]">
                  <Shield size={20} />
                  <span className="font-bold uppercase tracking-wider text-xs">Privacy Hub</span>
                </div>
                <nav className="space-y-4">
                  {sections.map((sec) => (
                    <a 
                      key={sec.id} 
                      href={`#${sec.id}`}
                      className="flex items-center justify-between text-[#5f6f73] hover:text-[#0fa4a9] font-medium transition-colors group"
                    >
                      {sec.title}
                      <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  ))}
                </nav>
                <div className="mt-10 pt-8 border-t border-gray-50">
                  <p className="text-[10px] text-gray-400 leading-relaxed uppercase font-bold tracking-widest">
                    Last Updated:<br />
                    March 15, 2026
                  </p>
                </div>
              </div>
            </aside>

            {/* Main Content Area */}
            <div className="lg:w-3/4">
              <div className="bg-white p-8 md:p-16 rounded-[40px] border border-gray-100 shadow-sm">
                <div className="mb-12">
                  <div className="w-16 h-16 bg-teal-50 rounded-2xl flex items-center justify-center mb-6 text-[#0fa4a9]">
                    <Lock size={32} />
                  </div>
                  <h1 className="text-4xl font-bold text-[#1f2d2e] mb-4">Privacy Policy</h1>
                  <p className="text-[#5f6f73] leading-relaxed">
                    At BioVue, your privacy is our core priority. We believe your health data is personal, and our platform is built to reflect that commitment. This policy explains how we collect, use, and protect your information.
                  </p>
                </div>

                <div className="space-y-16">
                  {sections.map((sec) => (
                    <section key={sec.id} id={sec.id} className="scroll-mt-32">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-2 h-8 bg-[#0fa4a9] rounded-full"></div>
                        <h2 className="text-2xl font-bold text-[#1f2d2e]">{sec.title}</h2>
                      </div>
                      <p className="text-[#5f6f73] leading-relaxed text-lg">
                        {sec.content}
                      </p>
                    </section>
                  ))}
                </div>

                {/* Important Highlights Strip */}
                <div className="mt-20 p-8 md:p-10 bg-[#1f2d2e] rounded-[32px] text-white overflow-hidden relative">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-[#0fa4a9]/20 rounded-full blur-3xl -mr-24 -mt-24"></div>
                  <h3 className="text-xl font-bold mb-8 flex items-center gap-3">
                    <Eye className="text-[#0fa4a9]" />
                    Key Privacy Facts
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                        <span className="text-xs font-bold">01</span>
                      </div>
                      <p className="text-sm text-gray-300">We do not sell your data to any advertising networks or third parties.</p>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                        <span className="text-xs font-bold">02</span>
                      </div>
                      <p className="text-sm text-gray-300">Encryption is applied at rest and in transit for all health-related metrics.</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-12 border-t border-gray-50 flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="flex items-center gap-3 text-gray-400">
                    <FileText size={20} />
                    <span className="text-sm">Download as PDF</span>
                  </div>
                  <button className="text-[#0fa4a9] font-bold text-sm tracking-widest uppercase hover:underline">
                    Contact Privacy Officer
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPage;
