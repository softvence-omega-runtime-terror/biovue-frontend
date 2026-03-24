"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, Lock, Eye, ChevronRight } from "lucide-react";

const PrivacyPage = () => {
  const sections = [
    {
      id: "intro",
      title: "Overview",
      content: `BioVue Digital Wellness respects your privacy. This Privacy Policy explains how we collect, use, and protect your information when you use our Services.

Last Updated: March 22, 2026`,
    },
    {
      id: "collection",
      title: "1. Information We Collect",
      content: `a. Information You Provide:
- Name and email address
- Account registration details
- Goals, habits, preferences, and wellness-related inputs
- Images or visual content you choose to upload
- Customer support communications

b. Information Collected Automatically:
- Device and browser information
- App and website usage data
- IP address
- Cookies and similar technologies (website only)`,
    },
    {
      id: "usage",
      title: "2. How We Use Your Information",
      content: `We use your information to:
- Provide and maintain the Services
- Personalize your experience
- Improve functionality and performance
- Send notifications or communications you opt into
- Respond to support or privacy requests`,
    },
    {
      id: "wellness",
      title: "3. Wellness Data",
      content: `Any wellness or habit data you voluntarily provide:
- Is used only to support your BioVue experience
- Is not sold or shared for advertising purposes
- Is not considered medical or clinical data

BioVue does not store or process medical records.`,
    },
    {
      id: "images",
      title: "4. User Images & Content Usage",
      content: `Any images, photos, or visual content uploaded by users remain the property of the user.

BioVue will not use, share, publish, or distribute user images or visual content for advertising, marketing, or promotional purposes without the user’s explicit written permission.

User content may be stored and processed solely for the purpose of providing the Services.`,
    },
    {
      id: "sharing",
      title: "5. Sharing of Information",
      content: `We may share information only:
- With service providers who support platform operations
- When required by law
- To protect rights, safety, or security

We do not sell personal data.`,
    },
    {
      id: "thirdparty",
      title: "6. Third-Party Services",
      content: `BioVue may integrate with third-party services (analytics, social platforms). We are not responsible for their privacy practices.`,
    },
    {
      id: "security",
      title: "7. Data Security",
      content: `We implement administrative, technical, and organizational safeguards. However, no system is 100% secure.`,
    },
    {
      id: "retention",
      title: "8. Data Retention",
      content: `We retain data only as long as necessary to:
- Provide Services
- Meet legal obligations

You can request deletion anytime.`,
    },
    {
      id: "rights",
      title: "9. Your Rights",
      content: `You may have rights to:
- Access data
- Correct data
- Delete data
- Opt out of communications

Contact us via email below.`,
    },
    {
      id: "children",
      title: "10. Children’s Privacy",
      content: `BioVue is not intended for individuals under 18.`,
    },
    {
      id: "changes",
      title: "11. Policy Updates",
      content: `We may update this policy. Continued use means acceptance.`,
    },
    {
      id: "contact",
      title: "12. Contact",
      content: `For privacy questions:
📧 BioVueSupport@gmail.com`,
    },
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
                  <span className="font-bold uppercase tracking-wider text-xs">
                    Privacy Hub
                  </span>
                </div>
                <nav className="space-y-4">
                  {sections.map((sec) => (
                    <a
                      key={sec.id}
                      href={`#${sec.id}`}
                      className="flex items-center justify-between text-[#5f6f73] hover:text-[#0fa4a9] font-medium transition-colors group"
                    >
                      {sec.title}
                      <ChevronRight
                        size={14}
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                    </a>
                  ))}
                </nav>
                <div className="mt-10 pt-8 border-t border-gray-50">
                  <p className="text-[10px] text-gray-400 leading-relaxed uppercase font-bold tracking-widest">
                    Last Updated:
                    <br />
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
                  <h1 className="text-4xl font-bold text-[#1f2d2e] mb-4">
                    Privacy Policy
                  </h1>
                  <p className="text-[#5f6f73] leading-relaxed">
                    At BioVue, your privacy is our core priority. We believe
                    your health data is personal, and our platform is built to
                    reflect that commitment. This policy explains how we
                    collect, use, and protect your information.
                  </p>
                </div>

                <div className="space-y-16">
                  {sections.map((sec) => (
                    <section key={sec.id} id={sec.id} className="scroll-mt-32">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-2 h-8 bg-[#0fa4a9] rounded-full"></div>
                        <h2 className="text-2xl font-bold text-[#1f2d2e]">
                          {sec.title}
                        </h2>
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
                      <p className="text-sm text-gray-300">
                        We do not sell your data to any advertising networks or
                        third parties.
                      </p>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                        <span className="text-xs font-bold">02</span>
                      </div>
                      <p className="text-sm text-gray-300">
                        Encryption is applied at rest and in transit for all
                        health-related metrics.
                      </p>
                    </div>
                  </div>
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
